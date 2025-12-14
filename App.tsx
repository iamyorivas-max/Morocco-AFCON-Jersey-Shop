import React, { useState, useEffect } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, Check, Star, ShieldCheck, Clock, Truck } from 'lucide-react';
import { JerseyConfig, JERSEY_PRICES } from './types';
import Hero from './components/Hero';
import Customizer from './components/Customizer';
import Benefits from './components/Benefits';
import SocialProof from './components/SocialProof';
import OrderForm from './components/OrderForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [jerseyConfig, setJerseyConfig] = useState<JerseyConfig>({
    name: 'HAKIMI',
    number: '2',
    size: 'M',
    color: 'red'
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  // Scroll listener for Sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero (approx 600px)
      setShowStickyCTA(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-morocco-red rounded-full flex items-center justify-center text-white font-bold font-display border-2 border-morocco-green">
                M
              </div>
              <span className="font-display font-bold text-xl tracking-wide text-morocco-red">
                MOUNTAKHAB<span className="text-morocco-green">SHOP</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('customizer')} className="text-gray-700 hover:text-morocco-red font-medium transition">Customize</button>
              <button onClick={() => scrollToSection('benefits')} className="text-gray-700 hover:text-morocco-red font-medium transition">Why Us</button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-morocco-red font-medium transition">Reviews</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-morocco-red font-medium transition">FAQ</button>
            </div>

            <div className="hidden md:block">
              <button 
                onClick={() => scrollToSection('order')}
                className="bg-morocco-green hover:bg-green-800 text-white px-6 py-2 rounded-full font-bold transition flex items-center gap-2 shadow-lg transform hover:-translate-y-0.5"
              >
                <ShoppingBag size={18} />
                Order Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800 p-2">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-16 shadow-xl py-4 flex flex-col items-center gap-4">
             <button onClick={() => scrollToSection('customizer')} className="text-lg font-medium">Customize</button>
             <button onClick={() => scrollToSection('benefits')} className="text-lg font-medium">Why Us</button>
             <button onClick={() => scrollToSection('reviews')} className="text-lg font-medium">Reviews</button>
             <button 
                onClick={() => scrollToSection('order')}
                className="bg-morocco-red text-white w-3/4 py-3 rounded-lg font-bold flex justify-center items-center gap-2"
              >
                Order Now
              </button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Hero scrollToCustomize={() => scrollToSection('customizer')} />
        
        <div id="customizer" className="scroll-mt-20">
          <Customizer config={jerseyConfig} setConfig={setJerseyConfig} />
        </div>

        <div id="benefits" className="scroll-mt-20">
          <Benefits />
        </div>

        <div id="reviews" className="scroll-mt-20">
          <SocialProof />
        </div>

        <div id="order" className="scroll-mt-20">
          <OrderForm config={jerseyConfig} />
        </div>

        <div id="faq" className="scroll-mt-20">
          <FAQ />
        </div>
      </main>

      {/* Final Emotional CTA */}
      <section className="bg-morocco-black text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/id/1052/1920/1080')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-morocco-gold uppercase">
            Dima Maghrib! 🇲🇦
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Wear your colors with pride. The stadium is waiting. The team needs you.
          </p>
          <button 
            onClick={() => scrollToSection('order')}
            className="bg-morocco-red text-white px-10 py-4 rounded-full font-bold text-xl shadow-[0_0_20px_rgba(193,39,45,0.6)] hover:bg-red-600 transition transform hover:scale-105"
          >
            Get My Jersey Now
          </button>
        </div>
      </section>

      <Footer />

      {/* Mobile Sticky CTA */}
      <div 
        className={`fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 md:hidden transition-transform duration-300 ${showStickyCTA ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="flex gap-2">
          <button 
            onClick={() => scrollToSection('order')}
            className="flex-1 bg-morocco-green text-white py-3 rounded-lg font-bold flex justify-center items-center gap-2 text-lg shadow-lg"
          >
            <ShoppingBag size={20} />
            Buy {JERSEY_PRICES.discount} DH
          </button>
          <a 
            href="https://wa.me/212600000000?text=I%20have%20a%20question%20about%20the%20AFCON%20jersey"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-100 text-gray-800 p-3 rounded-lg flex items-center justify-center"
          >
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
