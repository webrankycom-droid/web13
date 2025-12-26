
import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for casual shopping",
      features: [
        "Up to 3 active cards",
        "Single-use burner cards",
        "Merchant-locked cards",
        "2% loading fee",
        "Support via Email"
      ]
    },
    {
      name: "Pro",
      price: "$19",
      description: "For digital nomads & small teams",
      recommended: true,
      features: [
        "Up to 50 active cards",
        "Unlimited burner cards",
        "Custom billing address",
        "0.5% loading fee",
        "Priority 24/7 Support",
        "API Access"
      ]
    },
    {
      name: "Business",
      price: "$99",
      description: "High-scale ad campaigns",
      features: [
        "Unlimited active cards",
        "Premium Ad Bins (high trust)",
        "Team management tools",
        "0% loading fee",
        "Dedicated account manager",
        "Custom Integrations"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Pricing Plans</h2>
          <p className="text-slate-400">No hidden monthly costs. Pay for what you use.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div 
              key={i} 
              className={`relative p-8 rounded-3xl border transition-all flex flex-col ${p.recommended ? 'bg-blue-600/10 border-blue-500 shadow-2xl shadow-blue-500/10' : 'bg-slate-900/30 border-slate-800'}`}
            >
              {p.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-2">{p.name}</h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold font-heading">{p.price}</span>
                  <span className="text-slate-400 text-sm">/month</span>
                </div>
                <p className="text-slate-400 text-sm">{p.description}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all active:scale-95 ${p.recommended ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white text-slate-950 hover:bg-slate-100'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
