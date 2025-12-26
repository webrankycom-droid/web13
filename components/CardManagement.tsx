import React, { useState } from 'react';

type Tab = 'controls' | 'bins' | 'withdraw';

const CardManagement: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('controls');

  const binOptions = [
    { code: "4532 11", region: "United States", type: "Visa Platinum", trust: "High", use: "Ads/Shopping", rate: "99.9%" },
    { code: "5421 90", region: "Hong Kong", type: "Mastercard Business", trust: "Elite", use: "Meta/Google", rate: "99.8%" },
    { code: "4859 02", region: "United Kingdom", type: "Visa Debit", trust: "High", use: "SaaS/Trials", rate: "99.2%" },
    { code: "5532 44", region: "European Union", type: "Mastercard Credit", trust: "High", use: "Travel/Retail", rate: "99.5%" },
  ];

  const sidebarItems = [
    { id: 'controls', label: 'Card Controls', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )},
    { id: 'bins', label: 'BIN Catalog', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    )},
    { id: 'withdraw', label: 'Withdrawal', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )},
  ];

  return (
    <section id="management" className="py-32 px-4 bg-slate-950/80 border-y border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Command Center</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading mb-6">Master your digital assets</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Granular controls for high-performance users. From custom BIN selection to instant reloading, every tool you need is one click away.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as Tab)}
                className={`whitespace-nowrap flex items-center gap-4 px-6 py-4 rounded-2xl transition-all text-sm font-bold border ${
                  activeTab === item.id 
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20' 
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          {/* Main Display Area */}
          <div className="lg:col-span-9 bg-slate-900/40 border border-slate-800 rounded-[2.5rem] p-6 md:p-12 backdrop-blur-xl min-h-[500px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] pointer-events-none"></div>

            {activeTab === 'controls' && (
              <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500 relative">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-slate-800">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1">Live Card Management</h4>
                    <p className="text-sm text-slate-500">Configure status and liquidity for individual cards</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-xl transition-all flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                      Reload Card
                    </button>
                    <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20">
                      New Virtual Card
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Virtual Card Interactive UI */}
                  <div className={`p-8 rounded-3xl border transition-all duration-500 ${isPaused ? 'bg-slate-950 border-orange-500/30' : 'bg-slate-950 border-blue-500/30'}`}>
                    <div className="flex justify-between items-center mb-10">
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                        <div className={`w-2 h-2 rounded-full ${isPaused ? 'bg-orange-500 animate-pulse' : 'bg-green-500'}`}></div>
                        <span className="text-[10px] font-bold text-white uppercase tracking-wider">{isPaused ? 'Paused' : 'Live'}</span>
                      </div>
                      <button 
                        onClick={() => setIsPaused(!isPaused)}
                        className={`text-[10px] font-black uppercase tracking-tighter px-4 py-1.5 rounded-lg border transition-all ${
                          isPaused 
                            ? 'bg-green-600/10 border-green-500/50 text-green-500 hover:bg-green-600 hover:text-white' 
                            : 'bg-orange-600/10 border-orange-500/50 text-orange-500 hover:bg-orange-600 hover:text-white'
                        }`}
                      >
                        {isPaused ? 'Resume Spend' : 'Freeze Card'}
                      </button>
                    </div>

                    <div className="mb-10">
                      <div className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em] mb-2">Available for spend</div>
                      <div className={`text-4xl font-mono font-bold transition-all ${isPaused ? 'text-slate-500' : 'text-white'}`}>$12,740.00</div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold uppercase text-slate-500">
                        <span>Card usage</span>
                        <span className="text-white">64%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-[64%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Contextual Info */}
                  <div className="flex flex-col justify-center space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <div>
                        <h5 className="font-bold text-white mb-1">Instant Top-ups</h5>
                        <p className="text-sm text-slate-500 leading-relaxed">Top up any card balance directly from your main wallet without waiting for network confirmations.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0 text-orange-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                      </div>
                      <div>
                        <h5 className="font-bold text-white mb-1">Safety Kill-Switch</h5>
                        <p className="text-sm text-slate-500 leading-relaxed">suspect unauthorized use? One-click pause kills all future authorization attempts instantly.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'bins' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <h4 className="text-2xl font-bold text-white">Select Your Preferred BIN</h4>
                  <div className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    Updated: Real-time authorization rates
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {binOptions.map((bin, i) => (
                    <div key={i} className="group p-5 rounded-2xl bg-slate-950/50 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all flex flex-col md:flex-row md:items-center gap-6 cursor-pointer">
                      <div className="flex items-center gap-6 flex-1">
                        <div className="w-14 h-14 rounded-xl bg-slate-900 flex flex-col items-center justify-center border border-slate-800 group-hover:border-blue-500/30 transition-all">
                          <span className="text-xs font-bold text-blue-500">{bin.code.split(' ')[0]}</span>
                          <span className="text-[8px] text-slate-600 font-bold uppercase">{bin.code.split(' ')[1]}</span>
                        </div>
                        <div>
                          <div className="text-white font-bold text-lg">{bin.region}</div>
                          <div className="text-xs text-slate-500 font-medium">{bin.type} • {bin.use}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:justify-end gap-10 md:w-1/2">
                        <div className="text-center">
                          <div className="text-[9px] text-slate-600 font-black uppercase mb-1">Trust</div>
                          <div className="text-blue-400 text-xs font-bold">{bin.trust}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-[9px] text-slate-600 font-black uppercase mb-1">Auth Rate</div>
                          <div className="text-green-500 text-xs font-bold">{bin.rate}</div>
                        </div>
                        <button className="px-6 py-2 bg-slate-800 group-hover:bg-blue-600 text-white text-xs font-bold rounded-lg transition-all">Select</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'withdraw' && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col items-center justify-center h-full text-center space-y-12 py-10">
                <div className="relative">
                  <div className="w-24 h-24 bg-blue-600/10 border border-blue-500/20 rounded-full flex items-center justify-center text-blue-500 mx-auto">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-slate-900 flex items-center justify-center text-[10px] text-white font-bold">✓</div>
                </div>

                <div className="max-w-md">
                  <h4 className="text-2xl font-bold text-white mb-3">Withdraw Account Balance</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Move your remaining funds back to your preferred payment method. Withdrawals are processed 24/7 with zero lock-in periods.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
                  <button className="p-6 rounded-[2rem] bg-slate-950 border border-slate-800 hover:border-blue-500 transition-all group flex flex-col items-center gap-3">
                    <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">₿</div>
                    <div className="text-sm font-bold text-white">Crypto Withdrawal</div>
                    <div className="text-[10px] text-slate-600">USDT, BTC, ETH (Instant)</div>
                  </button>
                  <button className="p-6 rounded-[2rem] bg-slate-950 border border-slate-800 hover:border-blue-500 transition-all group flex flex-col items-center gap-3">
                    <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">🏦</div>
                    <div className="text-sm font-bold text-white">Bank Transfer</div>
                    <div className="text-[10px] text-slate-600">SEPA, SWIFT, ACH (1-2 Days)</div>
                  </button>
                </div>

                <div className="text-[10px] font-bold text-slate-700 uppercase tracking-widest bg-slate-950 px-4 py-2 rounded-lg border border-slate-800">
                  Transaction Security Audit Complete
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardManagement;