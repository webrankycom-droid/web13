
import React from 'react';

const Testimonials: React.FC = () => {
  const feedback = [
    {
      name: "Alex Rivera",
      role: "E-commerce Seller",
      content: "CardVCC saved my Amazon business. The high-trust bins are the only ones that don't get my account flagged. Highly recommended.",
      avatar: "https://picsum.photos/100/100?random=11"
    },
    {
      name: "Sarah Chen",
      role: "Privacy Enthusiast",
      content: "I use burner cards for every trial sign-up. I've saved hundreds of dollars in 'forgotten' subscriptions over the last year.",
      avatar: "https://picsum.photos/100/100?random=12"
    },
    {
      name: "Marcus Thorne",
      role: "Media Buyer",
      content: "Scaling FB ads is a nightmare without dedicated cards. CardVCC makes it seamless to manage budgets across 20+ different accounts.",
      avatar: "https://picsum.photos/100/100?random=13"
    }
  ];

  return (
    <section className="py-24 px-4 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-16">Join 100,000+ happy users</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedback.map((t, i) => (
            <div key={i} className="flex flex-col p-8 rounded-3xl bg-slate-900/50 border border-slate-800 shadow-xl relative overflow-hidden group">
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-blue-500/30" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-blue-400 font-medium">{t.role}</p>
                </div>
              </div>
              
              <p className="text-slate-400 italic leading-relaxed mb-8 flex-grow relative z-10">
                "{t.content}"
              </p>

              <div className="pt-4 border-t border-slate-800 relative z-10">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  Verified Real User • {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
