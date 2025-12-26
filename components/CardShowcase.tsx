
import React, { useState } from 'react';

const CardShowcase: React.FC = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Complete Privacy. <br />Total Control.</h2>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 text-blue-500 font-bold text-xs">✓</div>
              <div>
                <h3 className="font-semibold text-lg text-white">Merchant-Locked Cards</h3>
                <p className="text-slate-400">Cards that only work with the first merchant you use them with. No more overbilling.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 text-blue-500 font-bold text-xs">✓</div>
              <div>
                <h3 className="font-semibold text-lg text-white">One-Time Use Burners</h3>
                <p className="text-slate-400">Cards that expire automatically after a single transaction. Perfect for suspicious sites.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 text-blue-500 font-bold text-xs">✓</div>
              <div>
                <h3 className="font-semibold text-lg text-white">Instant Spending Limits</h3>
                <p className="text-slate-400">Set daily, weekly, or lifetime limits. Pause or delete cards in one click.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex-1 flex justify-center perspective-1000">
          <div 
            className={`relative w-80 md:w-[450px] h-52 md:h-[280px] cursor-pointer transition-all duration-700 preserve-3d shadow-2xl shadow-blue-500/10 ${flipped ? 'rotate-y-180' : ''}`}
            onClick={() => setFlipped(!flipped)}
          >
            {/* Front of Card */}
            <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden glass-card bg-gradient-to-br from-blue-600/80 to-purple-800/80 p-6 md:p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="w-12 h-10 bg-yellow-500/20 rounded border border-yellow-500/50 flex items-center justify-center overflow-hidden">
                  <div className="w-10 h-8 grid grid-cols-2 border border-yellow-500/30 opacity-50">
                    <div className="border border-yellow-500/30"></div>
                    <div className="border border-yellow-500/30"></div>
                    <div className="border border-yellow-500/30"></div>
                    <div className="border border-yellow-500/30"></div>
                  </div>
                </div>
                <div className="font-bold text-2xl italic text-white opacity-80">VISA</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-white/60 tracking-widest uppercase">Virtual Holder</div>
                <div className="text-xl md:text-2xl font-mono tracking-[0.2em] text-white">4532 •••• •••• 9801</div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-[10px] text-white/50 uppercase">Expiry</div>
                  <div className="text-sm font-semibold">12 / 28</div>
                </div>
                <div className="w-12 h-8">
                  <svg className="w-full h-full text-white/20" viewBox="0 0 100 60">
                    <circle cx="35" cy="30" r="25" fill="currentColor" />
                    <circle cx="65" cy="30" r="25" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Back of Card */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-slate-900 border border-white/10 flex flex-col">
              <div className="h-10 md:h-12 bg-slate-800 mt-6 md:mt-8 w-full"></div>
              <div className="px-6 md:px-8 mt-4 flex items-center gap-4">
                <div className="bg-slate-100/20 h-8 md:h-10 flex-grow rounded"></div>
                <div className="bg-white text-slate-950 font-mono italic px-3 h-8 md:h-10 flex items-center justify-center rounded">743</div>
              </div>
              <div className="p-6 md:p-8 mt-auto">
                <p className="text-[10px] text-slate-500 leading-tight">
                  This virtual card is issued by CardVCC in association with our banking partners. Use subject to Cardholder Agreement. For support visit cardvcc.com/support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </section>
  );
};

export default CardShowcase;
