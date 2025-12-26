import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-32 pb-12 px-4 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-blue-600/20">V</div>
              <span className="text-2xl font-bold font-heading tracking-tighter">CardVCC</span>
            </div>
            <p className="text-slate-500 text-base max-w-sm leading-relaxed">
              Global infrastructure for virtual payment cards. Trusted by 120,000+ businesses and privacy-conscious users worldwide to secure digital transactions.
            </p>
            <div className="flex gap-5">
              {['Twitter', 'GitHub', 'LinkedIn', 'Telegram'].map(social => (
                <a key={social} href="#" className="text-slate-500 hover:text-blue-500 text-sm font-medium transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 text-sm uppercase tracking-widest">Solutions</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Media Buying Cards</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">SaaS Expense Mgmt</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Dropshipping Payments</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Enterprise BINS</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 text-sm uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Pricing & Limits</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Developer API</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Card Burning Tech</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Security Audit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 text-sm uppercase tracking-widest">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Help Documentation</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">System Uptime</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">BIN Status Live</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-900 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col lg:flex-row items-center gap-6 text-slate-600 text-[12px] font-semibold tracking-wider uppercase">
            <p>© {currentYear} CardVCC Global Inc.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
          <div className="flex items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <span className="text-[10px] text-slate-700 font-bold uppercase tracking-[0.2em] mr-2">Secure Processing</span>
            <div className="w-10 h-6 bg-slate-800 rounded flex items-center justify-center font-bold text-[8px]">VISA</div>
            <div className="w-10 h-6 bg-slate-800 rounded flex items-center justify-center font-bold text-[8px]">MC</div>
            <div className="w-10 h-6 bg-slate-800 rounded flex items-center justify-center font-bold text-[8px]">PCI</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[10px] text-slate-800 max-w-4xl mx-auto leading-relaxed uppercase tracking-tighter">
            Disclaimer: CardVCC is a financial technology platform, not a bank. Banking services are provided by our licensed partner banks and financial institutions. Virtual cards are subject to standard compliance checks.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;