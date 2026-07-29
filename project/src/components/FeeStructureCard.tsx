import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, PiggyBank, BadgePercent, CreditCard, ArrowRight, Briefcase, Wifi, TrendingDown, IndianRupee, Sparkles } from 'lucide-react';
import type { FeeStructure as FeeStructureType } from '../data/courses';

interface FeeStructureCardProps {
  feeStructure: FeeStructureType;
  duration: string;
  badge?: string;
  brochureUrl?: string;
}

const badgeStyles: Record<string, string> = {
  'Most Popular': 'bg-gradient-to-r from-orange-500 to-orange-600 text-white',
  'Best Value': 'bg-gradient-to-r from-green-500 to-green-600 text-white',
  'Fast Track': 'bg-gradient-to-r from-blue-500 to-blue-600 text-white',
  'Popular': 'bg-gradient-to-r from-orange-400 to-orange-500 text-white',
};

export default function FeeStructureCard({ feeStructure, duration, badge, brochureUrl }: FeeStructureCardProps) {
  const [paymentMode, setPaymentMode] = useState<'installment' | 'lumpsum'>('installment');
  const midIdx = Math.floor(feeStructure.emiOptions.length / 2);
  const [emiMonths, setEmiMonths] = useState<number>(feeStructure.emiOptions[midIdx]);

  const parseINR = (s: string) => parseInt(s.replace(/[^0-9]/g, ''), 10);
  const formatINR = (n: number) => `₹${n.toLocaleString('en-IN')}`;

  const totalFeeNum = parseINR(feeStructure.totalFee);
  const lumpsumNum = parseINR(feeStructure.lumpsumAmount);
  const savings = totalFeeNum - lumpsumNum;
  const savingsPercent = Math.round((savings / totalFeeNum) * 100);

  const isNoCostEmi = emiMonths <= 9;
  const annualInterestRate = 0.12; // 12% annual interest for standard EMI
  const monthlyRate = annualInterestRate / 12;
  const emiPerMonth = isNoCostEmi
    ? Math.ceil(lumpsumNum / emiMonths)
    : Math.ceil((lumpsumNum * monthlyRate * Math.pow(1 + monthlyRate, emiMonths)) / (Math.pow(1 + monthlyRate, emiMonths) - 1));

  const installmentTotal = feeStructure.installments.reduce((sum, inst) => sum + parseINR(inst.amount), 0);
  const installmentDiscountNum = totalFeeNum - installmentTotal;

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-orange-200/60">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-navy-900 to-[#1a2a4a] p-6 lg:p-8">
        {badge && (
          <span className={`absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold shadow-lg ${badgeStyles[badge] || 'bg-orange-gradient text-white'}`}>
            <Sparkles className="h-3.5 w-3.5" />
            {badge}
          </span>
        )}
        <h2 className="flex items-center gap-2 font-display text-xl font-bold text-white">
          <IndianRupee className="h-5 w-5 text-orange-400" />
          Program Fee Structure
        </h2>
        <p className="mt-1 text-sm text-navy-200">Flexible payment options designed for working professionals</p>
      </div>

      <div className="p-6 lg:p-8">
        {/* Toggle */}
        <div className="inline-flex rounded-full bg-orange-50 p-1 ring-1 ring-orange-200">
          <button
            onClick={() => setPaymentMode('installment')}
            className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${paymentMode === 'installment' ? 'bg-orange-gradient text-white shadow-md' : 'text-navy-600 hover:text-orange-600'}`}
          >
            <Calendar className="inline h-4 w-4 mr-1.5" />
            Installment Plan
          </button>
          <button
            onClick={() => setPaymentMode('lumpsum')}
            className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${paymentMode === 'lumpsum' ? 'bg-orange-gradient text-white shadow-md' : 'text-navy-600 hover:text-orange-600'}`}
          >
            <PiggyBank className="inline h-4 w-4 mr-1.5" />
            Lump Sum
          </button>
        </div>

        {/* Total Fee banner */}
        <div className="mt-5 flex items-center justify-between rounded-2xl bg-red-50 border border-red-200 px-5 py-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-red-400">Total Program Fee</p>
            <p className="font-display text-2xl font-black text-red-600">{feeStructure.totalFee}</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold uppercase tracking-wider text-navy-400">Duration</p>
            <p className="text-sm font-bold text-navy-900 flex items-center gap-1 justify-end">
              <Clock className="h-4 w-4 text-orange-500" />
              {duration}
            </p>
          </div>
        </div>

        {/* Installment view */}
        {paymentMode === 'installment' && (
          <div className="mt-5 space-y-3">
            {feeStructure.installments.map((inst, idx) => (
              <div key={inst.label} className="flex items-center justify-between rounded-xl border border-orange-100 px-4 py-3 transition-all hover:border-orange-300 hover:bg-orange-50/50">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-gradient text-xs font-bold text-white">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-navy-900">{inst.label}</p>
                    <p className="text-xs text-navy-500">{inst.timing}</p>
                  </div>
                </div>
                <span className="text-sm font-extrabold text-orange-600">{inst.amount}</span>
              </div>
            ))}
            {installmentDiscountNum > 0 && (
              <div className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-2.5">
                <BadgePercent className="h-4 w-4 text-green-600" />
                <p className="text-xs font-semibold text-green-700">
                  Installment Total: {formatINR(installmentTotal)} (Save {feeStructure.installmentDiscount})
                </p>
              </div>
            )}
          </div>
        )}

        {/* Lumpsum view */}
        {paymentMode === 'lumpsum' && (
          <div className="mt-5">
            <div className="rounded-2xl bg-navy-900 p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <PiggyBank className="h-5 w-5 text-orange-400" />
                  <span className="text-sm font-bold text-white">One-Time Payment</span>
                </div>
                <span className="font-display text-2xl font-extrabold text-orange-400">{feeStructure.lumpsumAmount}</span>
              </div>
              <div className="mt-3 flex items-center gap-2 rounded-xl bg-green-500/15 px-4 py-2.5">
                <TrendingDown className="h-4 w-4 text-green-400" />
                <p className="text-sm font-bold text-green-400">
                  You save {feeStructure.lumpsumDiscount} ({savingsPercent}% off total fee)
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Education Loan / No-Cost EMI */}
        <div className="mt-6 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-200 p-5">
          <h3 className="flex items-center gap-2 text-sm font-bold text-navy-900">
            <CreditCard className="h-4 w-4 text-green-600" />
            Education Loan Available
          </h3>
          <p className="mt-1 text-xs text-navy-500">No Cost EMI @ 0% Interest for 6 & 9 months. Standard EMI also available for 12, 15, 18 & 24 months — select a tenure below.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {feeStructure.emiOptions.map((months) => (
              <button
                key={months}
                onClick={() => setEmiMonths(months)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${emiMonths === months ? 'bg-green-600 text-white shadow-md' : 'bg-white text-navy-600 ring-1 ring-green-200 hover:ring-green-400'}`}
              >
                {months} mo{months <= 9 ? ' · 0%' : ''}
              </button>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between rounded-xl bg-white px-5 py-4 ring-1 ring-orange-100">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">Monthly EMI</p>
              <p className="font-display text-2xl font-black text-orange-600">{formatINR(emiPerMonth)}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">Tenure</p>
              <p className="text-sm font-bold text-navy-900">{emiMonths} months</p>
              <p className="mt-0.5 text-xs font-bold text-green-600">{isNoCostEmi ? 'No Cost EMI @ 0%' : `Standard EMI @ 12% p.a.`}</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-6 grid sm:grid-cols-3 gap-3">
          {[
            { icon: CreditCard, title: 'Education Loan', desc: '6–24 months EMI' },
            { icon: Briefcase, title: 'Placement', desc: '100% assistance' },
            { icon: Wifi, title: 'Online Learning', desc: 'Learn from anywhere' },
          ].map((f) => (
            <div key={f.title} className="flex items-center gap-3 rounded-xl bg-navy-50 px-4 py-3 ring-1 ring-navy-100">
              <f.icon className="h-5 w-5 text-orange-500" />
              <div>
                <p className="text-sm font-bold text-navy-900">{f.title}</p>
                <p className="text-xs text-navy-500">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            to="/home#enquiry"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-orange-gradient px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5"
          >
            Apply Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
