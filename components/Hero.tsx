import React, { useState, useEffect } from 'react';
import { ArrowRight, Timer } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface HeroProps {
  scrollToCustomize: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToCustomize }) => {
  const { t, language } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({ days: 7, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 7);

    const timer = window.setInterval(() => {
      const now = new Date();
      const difference = deadline.getTime() - now.getTime();

      if (difference <= 0) {
        window.clearInterval(timer);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-10 pb-20 md:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-morocco-red opacity-10 skew-x-12 transform translate-x-20 rtl:-translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-morocco-green opacity-10 -skew-x-12 transform -translate-x-10 rtl:translate-x-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left rtl:md:text-right">
            <div className="inline-flex items-center gap-2 bg-morocco-red/20 border border-morocco-red/40 text-morocco-red text-sm font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wider animate-pulse-fast">
              <span className="w-2 h-2 bg-morocco-red rounded-full"></span>
              {t.hero.badge}
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {t.hero.title} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-morocco-red to-morocco-gold">
                {t.hero.titleSuffix}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={scrollToCustomize}
                className="bg-morocco-red hover:bg-red-600 text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg shadow-red-900/50 transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                {t.hero.ctaCustomize} <ArrowRight size={20} className="rtl:rotate-180" />
              </button>
              <a 
                href="https://wa.me/212600000000"
                target="_blank"
                rel="noreferrer"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white text-lg font-bold py-4 px-8 rounded-full transition flex items-center justify-center"
              >
                {t.hero.ctaWhatsapp}
              </a>
            </div>

            {/* Countdown */}
            <div className="mt-10 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl inline-block">
              <p className="text-sm text-gray-400 mb-3 flex items-center justify-center md:justify-start gap-2">
                <Timer size={16} /> {t.hero.timerLabel}
              </p>
              <div className="flex gap-4 text-center">
                {[
                  { label: t.hero.days, value: timeLeft.days },
                  { label: t.hero.hours, value: timeLeft.hours },
                  { label: t.hero.mins, value: timeLeft.minutes },
                  { label: t.hero.secs, value: timeLeft.seconds },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-3xl font-display font-bold text-white">{String(item.value).padStart(2, '0')}</span>
                    <span className="text-xs text-gray-400 uppercase">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Hero */}
          <div className="md:w-1/2 relative">
            <div className="relative z-10 w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img 
                src="https://picsum.photos/seed/football1/800/1000" 
                alt="Fan wearing Morocco Jersey" 
                className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <div className="bg-morocco-green text-white text-xs font-bold px-3 py-1 rounded inline-block w-max mb-2">{t.hero.officialDesign}</div>
                <p className="font-display text-3xl font-bold text-white">{t.hero.lions}</p>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 rtl:right-auto rtl:-left-6 md:top-10 md:-right-10 rtl:md:left-[-2.5rem] bg-morocco-gold text-black font-bold w-24 h-24 rounded-full flex items-center justify-center shadow-xl z-20 transform rotate-12 rtl:-rotate-12">
              <div className="text-center leading-none">
                <span className="block text-sm">{t.hero.only}</span>
                <span className="block text-2xl font-display">199</span>
                <span className="block text-xs">{t.hero.currency}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;