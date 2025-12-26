
import React from 'react';

const Comparison: React.FC = () => {
  const rows = [
    { feature: "Issuance Time", traditional: "7-14 Days", vcc: "Instantly" },
    { feature: "One-Time Use Cards", traditional: "❌ Rare", vcc: "✅ Unlimited" },
    { feature: "Crypto Top-ups", traditional: "❌ Restricted", vcc: "✅ Native Support" },
    { feature: "Subscription Control", traditional: "Manual Disputing", vcc: "Instant One-Click Kill" },
    { feature: "Spending Limits", traditional: "Hard Limits", vcc: "Dynamic & Custom" },
    { feature: "KYC Requirements", traditional: "Extensive Documenting", vcc: "Flexible/No KYC Tiers" },
  ];

  return (
    <section className="py-24 px-4 bg-slate-900/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-16">Why settle for legacy?</h2>
        
        <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="p-6 text-sm font-bold text-slate-500 uppercase tracking-widest">Feature</th>
                <th className="p-6 text-sm font-bold text-slate-500 uppercase tracking-widest">Traditional Banks</th>
                <th className="p-6 text-sm font-bold text-blue-500 uppercase tracking-widest bg-blue-500/5">CardVCC</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-slate-800 last:border-0 hover:bg-slate-800/30 transition-colors">
                  <td className="p-6 font-medium text-white">{row.feature}</td>
                  <td className="p-6 text-slate-400">{row.traditional}</td>
                  <td className="p-6 font-bold text-blue-400 bg-blue-500/5">{row.vcc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
