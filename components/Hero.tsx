import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-32 px-4 overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-blue-400 text-xs font-semibold mb-10 tracking-widest uppercase">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
          Enterprise Virtual Card Infrastructure v4.0
        </div>

        <h1 className="text-6xl md:text-[5.5rem] font-extrabold font-heading leading-[1.05] tracking-tight mb-8 text-gradient">
          Financial Control <br /> 
          <span className="text-blue-500">Without Compromise</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Empowering modern teams and privacy-conscious spenders with <span className="text-white font-medium">Instant Issuance Virtual Cards</span>. Scale your media buying and secure your subscriptions on a globally recognized banking network.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-12 py-5 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-500 transition-all shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] hover:-translate-y-1 active:scale-95">
            Create Free Account
          </button>
          <button className="w-full sm:w-auto px-12 py-5 bg-slate-900 border border-slate-800 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
            Explore BIN List
            <svg className="w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Feature Trust Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-slate-900 pt-12">
          {[
            { label: "Issuance", value: "Instant 30s", sub: "Visa / Mastercard" },
            { label: "Network", value: "Tier-1 BINS", sub: "US, UK, HK, EU" },
            { label: "Privacy", value: "Burner Tech", sub: "Merchant Locking" },
            { label: "Funding", value: "Multi-Asset", sub: "Bank & 50+ Crypto" }
          ].map((item, idx) => (
            <div key={idx} className="text-left group cursor-default">
              <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-1 group-hover:text-blue-500 transition-colors">{item.label}</div>
              <div className="text-white text-lg font-bold mb-0.5">{item.value}</div>
              <div className="text-slate-500 text-xs">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;