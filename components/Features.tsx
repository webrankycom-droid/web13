import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Instant Virtual Issuance",
      description: "Generate Visa and Mastercard virtual numbers in under 10 seconds with high authorization rates.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Subscription Shield",
      description: "Auto-block unwanted renewals and manage recurring fees with vendor-specific locks.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Global Liquidity",
      description: "Spend globally at millions of merchants. Our cards are accepted anywhere Visa/MC is supported.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Crypto-to-Card Bridge",
      description: "Convert BTC, ETH, USDT, and 50+ assets directly into spending power with zero delay.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: "Ad-Platform BINS",
      description: "Specialized high-trust BINs for Facebook, Google, and TikTok Ads to prevent account flags.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: "Privacy-First Access",
      description: "Anonymized payment tiers for users who value financial privacy and data protection.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
        </svg>
      )
    }
  ];

  return (
    <section id="product" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-3">Core Infrastructure</h2>
        <h3 className="text-3xl md:text-5xl font-bold font-heading">Financial tools for the <br /> digital-first generation</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="group p-10 rounded-[2rem] bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all hover:bg-slate-900/80">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-8 transform group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(37,99,235,0.1)]">
              {f.icon}
            </div>
            <h4 className="text-xl font-bold mb-4 text-white font-heading">{f.title}</h4>
            <p className="text-slate-400 leading-relaxed text-sm">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;