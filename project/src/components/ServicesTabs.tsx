import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Landmark, Shield } from 'lucide-react';
import VisionMission from './VisionMission';
import Hero from './Hero';
import LoanProducts from './LoanProducts';
import BankingPartners from './BankingPartners';
import InsuranceAdvisor from './InsuranceAdvisor';
import InsurancePremiumCalculator from './InsurancePremiumCalculator';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import EnquiryForm from './EnquiryForm';

type TabKey = 'loans' | 'insurance';

const tabs: { key: TabKey; label: string; icon: typeof Landmark }[] = [
  { key: 'loans', label: 'Loan Services', icon: Landmark },
  { key: 'insurance', label: 'Insurance', icon: Shield },
];

export default function ServicesTabs() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<TabKey>('loans');

  useEffect(() => {
    if (location.hash === '#insurance') {
      setActiveTab('insurance');
    } else if (location.hash === '#loans') {
      setActiveTab('loans');
    }
  }, [location.hash]);

  return (
    <>
      <VisionMission />
      <Hero />

      {/* Tab bar */}
      <div className="sticky top-16 lg:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-navy-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 sm:gap-4 py-3">
            {tabs.map((tab) => {
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 rounded-full px-5 sm:px-8 py-2.5 text-sm sm:text-base font-bold transition-all ${
                    active
                      ? 'bg-orange-gradient text-white shadow-lg shadow-orange-500/30'
                      : 'bg-navy-50 text-navy-600 ring-1 ring-navy-200 hover:ring-orange-300 hover:text-orange-600'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div key={activeTab} className="animate-fade-in">
        {activeTab === 'loans' && (
          <>
            <LoanProducts />
            <BankingPartners />
          </>
        )}
        {activeTab === 'insurance' && (
          <>
            <InsuranceAdvisor />
            <InsurancePremiumCalculator />
          </>
        )}
      </div>

      {/* Shared sections */}
      <WhyChooseUs />
      <Testimonials />
      <EnquiryForm />
    </>
  );
}
