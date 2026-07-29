import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const NOTIFY_EMAIL = "santosh.kadam@moneyskat.com";
const FROM_EMAIL = "notifications@moneyskat.com";

interface EnquiryPayload {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  loan_amount?: string | null;
  course_interested?: string | null;
  message?: string | null;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function row(label: string, value?: string | null): string {
  if (!value) return "";
  return `<tr><td style="padding:6px 12px;color:#64748b;font-weight:600;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:6px 12px;color:#0f172a;font-weight:500;">${escapeHtml(value)}</td></tr>`;
}

function buildHtml(e: EnquiryPayload): string {
  return `<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:600px;margin:24px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(15,23,42,0.08);">
    <div style="background:#0f172a;padding:24px 28px;">
      <h1 style="margin:0;color:#f97316;font-size:20px;font-weight:800;letter-spacing:0.02em;">New Loan Enquiry Received</h1>
      <p style="margin:6px 0 0;color:#cbd5e1;font-size:13px;">A visitor has submitted an enquiry on your website.</p>
    </div>
    <div style="padding:20px 28px;">
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        ${row("Name", e.name)}
        ${row("Phone", e.phone)}
        ${row("Email", e.email)}
        ${row("City", e.city)}
        ${row("Service", e.service)}
        ${row("Loan Amount", e.loan_amount)}
        ${row("Course Interested", e.course_interested)}
        ${row("Message", e.message)}
      </table>
    </div>
    <div style="padding:16px 28px;background:#f8fafc;border-top:1px solid #e2e8f0;">
      <p style="margin:0;color:#94a3b8;font-size:12px;">This is an automated notification from the MoneySkat & MIT website enquiry form.</p>
    </div>
  </div>
</body></html>`;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const payload: EnquiryPayload = await req.json();

    if (!payload?.name || !payload?.phone || !payload?.email || !payload?.service) {
      return new Response(
        JSON.stringify({ error: "Missing required enquiry fields." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Email service not configured." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const subject = `New Enquiry: ${payload.service} — ${payload.name}`;
    const html = buildHtml(payload);

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: NOTIFY_EMAIL,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return new Response(
        JSON.stringify({ error: "Failed to send email.", detail: errText }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
