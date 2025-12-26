import React from 'react';

const SupportSystem: React.FC = () => {
  const channels = [
    {
      name: "24/7 Live Chat",
      description: "Average response time < 2 minutes. Our team of financial experts is ready to assist you in real-time.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      cta: "Open Chat",
      status: "Online"
    },
    {
      name: "Telegram Community",
      description: "Join 15k+ power users. Get instant updates on BIN performance, network status, and community insights.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      cta: "Join Group",
      status: "Active"
    },
    {
      name: "Enterprise Ticketing",
      description: "For complex integrations or billing inquiries. Professional SLA-backed support for business accounts.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      ),
      cta: "Submit Ticket",
      status: "Priority"
    },
    {
      name: "Knowledge Base",
      description: "Comprehensive guides on media buying, merchant compatibility, and digital asset management.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      cta: "Read Docs",
      status: "Self-serve"
    }
  ];

  return (
    <section id="support" className="py-24 px-4 bg-slate-900/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Ecosystem Support</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading mb-6">Unrivaled support for <br /> unparalleled performance</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              We understand that timing is everything in digital commerce. That's why we've built a multi-channel support infrastructure to ensure you're never left in the dark.
            </p>
          </div>
          
          <div className="flex flex-col items-center lg:items-end gap-4 p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm">
            <div className="flex -space-x-3 mb-2">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={`https://picsum.photos/100/100?random=${i + 20}`} className="w-12 h-12 rounded-full border-4 border-slate-900" alt="Support agent" />
              ))}
              <div className="w-12 h-12 rounded-full bg-blue-600 border-4 border-slate-900 flex items-center justify-center text-xs font-bold text-white">
                +12
              </div>
            </div>
            <p className="text-white font-bold">Dedicated support agents online</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Global Ops Active</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((ch, i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] bg-slate-950/50 border border-slate-800/80 hover:border-blue-500/30 transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                    {ch.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-500 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
                    {ch.status}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4 font-heading">{ch.name}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{ch.description}</p>
              </div>
              
              <button className="w-full py-3 px-6 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-bold hover:bg-blue-600 hover:border-blue-600 transition-all flex items-center justify-center gap-2">
                {ch.cta}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          ))}
        </div>
        
        {/* Banner for Telegram especially */}
        <div className="mt-12 p-1 bg-gradient-to-r from-blue-600/20 via-slate-800/50 to-blue-600/20 rounded-[2rem]">
          <div className="bg-slate-950/80 rounded-[1.9rem] p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0088cc]/10 flex items-center justify-center text-[#0088cc]">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.88.03-.24.36-.48.98-.74 3.82-1.66 6.37-2.75 7.64-3.28 3.63-1.5 4.38-1.76 4.87-1.77.11 0 .35.03.51.15.13.11.17.27.18.39.01.07.02.21.01.3z"/></svg>
              </div>
              <div>
                <div className="text-white font-bold">Official Telegram Channel</div>
                <div className="text-xs text-slate-500">Real-time alerts, daily BIN success rates, and exclusive offers.</div>
              </div>
            </div>
            <button className="px-8 py-3 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-[#0088cc]/20">
              Join Official Group
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSystem;