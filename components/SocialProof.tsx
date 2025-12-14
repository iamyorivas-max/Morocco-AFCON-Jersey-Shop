import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const SocialProof: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 bg-morocco-red/5 p-8 rounded-2xl">
          <div className="text-center md:text-left rtl:md:text-right">
             <h2 className="font-display text-3xl font-bold text-gray-900">{t.socialProof.title} <span className="text-morocco-red">{t.socialProof.titleSuffix}</span></h2>
             <p className="text-gray-600">{t.socialProof.subtitle}</p>
          </div>
          <div className="flex gap-8 text-center">
             <div>
                <div className="text-3xl font-bold text-morocco-red">1,200+</div>
                <div className="text-xs text-gray-500 uppercase font-bold">{t.socialProof.sold}</div>
             </div>
             <div>
                <div className="text-3xl font-bold text-morocco-green">4.9/5</div>
                <div className="text-xs text-gray-500 uppercase font-bold">{t.socialProof.rating}</div>
             </div>
             <div>
                <div className="text-3xl font-bold text-morocco-gold">100%</div>
                <div className="text-xs text-gray-500 uppercase font-bold">{t.socialProof.delivery}</div>
             </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.socialProof.reviews.map((review, i) => (
            <div key={i} className="bg-white border border-gray-100 p-6 rounded-xl shadow-lg relative">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-morocco-gold text-morocco-gold" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <img src={`https://picsum.photos/seed/user${i+1}/100/100`} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-gray-900">{review.name}</div>
                  <div className="text-xs text-gray-400">{review.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SocialProof;