
import React from 'react';

const Security: React.FC = () => {
  return (
    <section id="security" className="py-24 px-4 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-3xl mb-6">🛡️</div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Security is not <br /> an afterthought</h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            We use bank-grade security protocols to ensure your data and funds are protected at all times. Our architecture is designed to give you peace of mind.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h4 className="font-bold text-white mb-2">PCI DSS Compliant</h4>
              <p className="text-sm text-slate-500">Adhering to the highest industry standards for payment security.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h4 className="font-bold text-white mb-2">256-bit Encryption</h4>
              <p className="text-sm text-slate-500">Every piece of data is encrypted both in transit and at rest.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h4 className="font-bold text-white mb-2">Biometric 2FA</h4>
              <p className="text-sm text-slate-500">Secure your account with hardware keys, FaceID, or TouchID.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h4 className="font-bold text-white mb-2">Isolated Funds</h4>
              <p className="text-sm text-slate-500">User funds are held in segregated top-tier banking accounts.</p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full"></div>
          <div className="relative bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl">
            <div className="space-y-4">
              <div className="h-2 w-1/2 bg-slate-800 rounded"></div>
              <div className="h-8 w-full bg-slate-800/50 rounded flex items-center px-4">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-3"></div>
                <div className="h-2 w-1/3 bg-slate-700 rounded"></div>
              </div>
              <div className="h-24 w-full bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl mb-1">🔒</div>
                  <div className="text-xs font-mono text-blue-400">ENCRYPTED_SESSION_ACTIVE</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-12 bg-slate-800 rounded"></div>
                <div className="h-12 bg-slate-800 rounded"></div>
                <div className="h-12 bg-slate-800 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
