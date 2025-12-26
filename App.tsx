import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedMerchants from './components/TrustedMerchants';
import Stats from './components/Stats';
import HowItWorks from './components/HowItWorks';
import CardShowcase from './components/CardShowcase';
import UseCases from './components/UseCases';
import IndustrySolutions from './components/IndustrySolutions';
import CryptoFunding from './components/CryptoFunding';
import CardManagement from './components/CardManagement';
import UserFeatures from './components/UserFeatures';
import Features from './components/Features';
import Security from './components/Security';
import Comparison from './components/Comparison';
import SupportSystem from './components/SupportSystem';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background blobs for aesthetics */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/5 blur-[120px] rounded-full"></div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <TrustedMerchants />
        <Stats />
        <IndustrySolutions />
        <CryptoFunding />
        <CardManagement />
        <HowItWorks />
        <CardShowcase />
        <UseCases />
        <UserFeatures />
        <Features />
        <Security />
        <Comparison />
        <SupportSystem />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;