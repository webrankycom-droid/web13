
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: "Active Cardholders", value: "120K+" },
    { label: "Monthly Volume", value: "$45M+" },
    { label: "Merchant Coverage", value: "99.9%" },
    { label: "Uptime Guarantee", value: "99.99%" },
  ];

  return (
    <section className="py-12 border-y border-slate-800 bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-heading text-white mb-1">{stat.value}</div>
              <div className="text-slate-500 text-sm font-medium tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
