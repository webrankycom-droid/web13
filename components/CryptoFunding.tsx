import React from 'react';

const CryptoFunding: React.FC = () => {
  const supportedCoins = [
    { 
      name: 'USDT', 
      network: 'TRC20 / ERC20', 
      icon: 'https://cryptologos.cc/logos/tether-usdt-logo.svg?v=040',
      color: '#26A17B'
    },
    { 
      name: 'Bitcoin', 
      network: 'BTC Mainnet', 
      icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=040',
      color: '#F7931A'
    },
    { 
      name: 'Ethereum', 
      network: 'ERC20', 
      icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=040',
      color: '#627EEA'
    },
    { 
      name: 'Solana', 
      network: 'SPL Network', 
      icon: 'https://cryptologos.cc/logos/solana-sol-logo.svg?v=040',
      color: '#14F195'
    },
    { 
      name: 'Litecoin', 
      network: 'LTC Network', 
      icon: 'https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=040',
      color: '#345D9D'
    },
    { 
      name: 'USD Coin', 
      network: 'Multi-chain', 
      icon: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=040',
      color: '#2775CA'
    },
  ];

  return (
    <section id="crypto-funding" className="py-32 px-4 bg-slate-900/10 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest">
            Liquidity Bridge
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-heading leading-tight">
            Buy Virtual Cards <br /> 
            <span className="text-blue-500 text-gradient">With Crypto Instantly</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            Bridging the gap between your digital assets and real-world commerce. Deposit your crypto and generate a Visa or Mastercard in seconds. No bank account required for privacy-tier cards.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 mt-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-white">Instant On-Chain Confirmation</h4>
                <p className="text-sm text-slate-500">Funds are credited to your balance as soon as the transaction is verified.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 mt-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-white">Guaranteed Exchange Rates</h4>
                <p className="text-sm text-slate-500">Locked-in rates for 15 minutes to protect against market volatility.</p>
              </div>
            </div>
          </div>

          <button className="px-10 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-100 transition-all flex items-center gap-3 shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)]">
            Load Wallet with Crypto
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </button>
        </div>

        <div className="flex-1 w-full max-w-xl">
          <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-8 md:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
            <div className="mb-10 flex justify-between items-center">
              <h3 className="font-bold text-xl text-white">Premium Assets</h3>
              <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Live Nodes Online</span>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {supportedCoins.map((coin, i) => (
                <div key={i} className="relative flex flex-col p-6 rounded-3xl bg-slate-950/60 border border-slate-800/50 hover:border-white/10 transition-all group/item cursor-default hover:bg-slate-900/80 hover:-translate-y-1">
                  {/* Icon Container with Glow */}
                  <div className="relative w-12 h-12 mb-4 flex items-center justify-center">
                    <div 
                      className="absolute inset-0 opacity-0 group-hover/item:opacity-20 blur-xl transition-opacity duration-500 rounded-full"
                      style={{ backgroundColor: coin.color }}
                    ></div>
                    <img 
                      src={coin.icon} 
                      alt={coin.name} 
                      className="w-10 h-10 relative z-10 transition-all duration-500 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]" 
                    />
                  </div>
                  
                  <div>
                    <div className="font-bold text-base text-white group-hover/item:text-blue-400 transition-colors">{coin.name}</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{coin.network}</div>
                  </div>

                  {/* Subtle "Active" Indicator */}
                  <div className="absolute top-4 right-4 w-1 h-1 rounded-full bg-blue-500/50 group-hover/item:bg-blue-400"></div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-[2rem] bg-slate-950 border border-slate-800/80 flex items-center justify-between">
              <div className="text-left">
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">System Status</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-bold text-white">API Core Healthy</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Fee Tier</div>
                <div className="text-sm font-bold text-blue-400">0.00% Net</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoFunding;