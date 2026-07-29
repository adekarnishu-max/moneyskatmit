/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the person enquiring
  - `email` (text, not null) — contact email
  - `phone` (text, not null) — contact phone number
  - `service` (text, not null) — which service they're interested in (loans, insurance, education, other)
  - `message` (text) — optional message from the user
  - `created_at` (timestamptz, default now)
2. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated INSERT only (public contact form, no public reads).
- This is a single-tenant no-auth app; the contact form is intentionally public.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);
