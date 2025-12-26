import React from 'react';

const TrustedMerchants: React.FC = () => {
  const merchants = [
    "Amazon", "Google Ads", "Meta", "Netflix", "TikTok Ads", 
    "OpenAI", "AWS", "DigitalOcean", "Spotify", "Airbnb", 
    "Steam", "Uber", "Doordash", "LinkedIn", "Cloudflare"
  ];

  const doubleMerchants = [...merchants, ...merchants];

  return (
    <div className="w-full bg-slate-950 py-16 overflow-hidden border-b border-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <p className="text-center text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black">
          Global Merchant Compatibility Engine
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {doubleMerchants.map((merchant, i) => (
            <div key={i} className="mx-12 flex items-center gap-3 opacity-30 hover:opacity-100 transition-all duration-500 cursor-default grayscale hover:grayscale-0">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sm font-black text-slate-500 group-hover:border-blue-500/30">
                {merchant.charAt(0)}
              </div>
              <span className="text-2xl font-heading font-extrabold text-slate-400 tracking-tighter">
                {merchant}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TrustedMerchants;