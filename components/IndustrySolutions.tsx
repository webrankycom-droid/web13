import React from 'react';

const IndustrySolutions: React.FC = () => {
  const industries = [
    {
      title: "Performance Marketing",
      description: "Scale your campaigns across Facebook, Google, and TikTok without the risk of account bans due to flagged payment methods. Our premium ad-tier BINS are specifically whitelisted for high-volume advertising.",
      keywords: ["Ad-Specific BINS", "Unlimited Card Issuance", "Dynamic Spending Control"],
      icon: "📊"
    },
    {
      title: "E-Commerce & Arbitrage",
      description: "Secure your inventory purchases with merchant-locked cards. Protect your business from unauthorized rebilling and manage cash flow across dozens of suppliers from a single, centralized dashboard.",
      keywords: ["Merchant Locking", "Zero-Wait Funding", "Supplier Management"],
      icon: "🛍️"
    },
    {
      title: "SaaS & Subscription Ops",
      description: "Take total control of your company's software stack. Assign dedicated cards to every subscription and stop unwanted trials from ever reaching your bank account with one-click burner technology.",
      keywords: ["Subscription Tracking", "Bulk Management", "Expense Reporting"],
      icon: "⚙️"
    }
  ];

  return (
    <section className="py-32 px-4 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Enterprise Grade Solutions</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">Built for the modern <br /> digital economy</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            CardVCC is more than a wallet—it's a robust infrastructure designed to solve specific financial bottlenecks for high-scale digital businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {industries.map((ind, i) => (
            <div key={i} className="flex flex-col p-10 rounded-[2rem] bg-slate-900/30 border border-slate-800 hover:border-blue-500/20 transition-all hover:bg-slate-900/50 group">
              <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500">{ind.icon}</div>
              <h4 className="text-2xl font-bold text-white mb-6 font-heading">{ind.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                {ind.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {ind.keywords.map((kw, j) => (
                  <span key={j} className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;