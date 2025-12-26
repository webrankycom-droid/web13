
import React from 'react';

const UseCases: React.FC = () => {
  const useCases = [
    {
      title: "Media Buying",
      tagline: "High-trust BINS for Ad Platforms",
      features: ["Facebook & Google Optimized", "Unlimited Cards for Accounts", "Instant Limit Adjustments"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "SaaS Management",
      tagline: "Control recurring billing",
      features: ["Auto-Cancel Unwanted Trials", "Vendor-Locked Numbers", "Expense Reporting Tools"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Privacy First",
      tagline: "Protect your identity",
      features: ["No KYC Tiers Available", "Masked Billing Address", "One-Click Card Burning"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-24 px-4 bg-slate-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading">Built for every scenario</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {useCases.map((uc, i) => (
            <div key={i} className="group overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-all">
              <div className="h-48 overflow-hidden relative">
                <img src={uc.image} alt={uc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-1">{uc.title}</h4>
                <p className="text-blue-500 text-sm font-medium mb-6">{uc.tagline}</p>
                <ul className="space-y-3">
                  {uc.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-400 text-sm">
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
