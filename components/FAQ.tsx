
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Where can I use CardVCC cards?",
      a: "Our virtual cards are issued on the Visa and Mastercard networks, meaning they are accepted at millions of merchants globally including Amazon, Google, Netflix, and Facebook Ads."
    },
    {
      q: "How do I load funds onto my account?",
      a: "You can load funds using traditional methods like SEPA/Swift bank transfers and debit cards, or via 50+ cryptocurrencies including BTC, USDT (TRC20/ERC20), and ETH."
    },
    {
      q: "Are there any KYC requirements?",
      a: "We offer different account tiers. Our basic 'Privacy' tier requires minimal information, while our 'Business' tier involves standard business verification to unlock higher limits and premium BINs."
    },
    {
      q: "Can I use these for ad accounts?",
      a: "Yes! In fact, we specialize in high-trust BINs (Bank Identification Numbers) specifically categorized for advertising platforms like Meta, Google Ads, and TikTok to prevent automatic flags."
    },
    {
      q: "What is a 'Burner Card'?",
      a: "A burner card is a temporary virtual card that automatically deletes itself after a single successful transaction. It's the ultimate tool for security on unknown websites."
    },
    {
      q: "Are there monthly maintenance fees?",
      a: "Our Starter plan has zero monthly fees. We only charge a small loading fee when you top up your balance. Premium plans have a subscription but lower loading fees."
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 bg-slate-950">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-16">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/30">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-800/50 transition-colors"
              >
                <span className="font-bold text-white">{faq.q}</span>
                <span className={`text-blue-500 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50 bg-slate-950/20">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-12 rounded-3xl bg-blue-600 text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Ready to secure your payments?</h3>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto relative z-10">Join thousands of smart spenders today. It takes less than 60 seconds to get your first card.</p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 active:scale-95 relative z-10">
            Get My Free Card Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
