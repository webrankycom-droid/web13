import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-blue-600/30 group-hover:rotate-12 transition-transform cursor-pointer">V</div>
            <span className="text-2xl font-bold font-heading tracking-tighter hover:text-blue-500 transition-colors cursor-pointer">CardVCC</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-10">
            {['Product', 'Solutions', 'BIN List', 'Pricing', 'Developers'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-semibold text-slate-400 hover:text-white transition-all hover:-translate-y-0.5">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button className="hidden sm:block text-sm font-bold text-slate-400 hover:text-white transition-colors">
              Log in
            </button>
            <button className="px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-bold transition-all shadow-xl shadow-blue-600/20 active:scale-95">
              Launch Dashboard
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;