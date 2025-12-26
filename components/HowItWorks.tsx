
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Deposit Funds",
      desc: "Instant top-up via Crypto, Bank Transfer, or Debit Card with zero wait time.",
      icon: "💰"
    },
    {
      title: "Create Your Card",
      desc: "Choose your BIN, set a spending limit, and name your card for easy tracking.",
      icon: "💳"
    },
    {
      title: "Spend Safely",
      desc: "Use your VCC anywhere. Monitor transactions in real-time on our dashboard.",
      icon: "🚀"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-3">Simple Process</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading">Go from zero to spending <br /> in three easy steps</h3>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-y-12"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center text-3xl mb-6 shadow-xl shadow-blue-500/5 group hover:border-blue-500 transition-colors">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-slate-400 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
