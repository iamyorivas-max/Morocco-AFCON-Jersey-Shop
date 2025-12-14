import React from 'react';
import { ShieldCheck, Truck, Users, Shirt } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Benefits: React.FC = () => {
  const { t } = useLanguage();
  
  const icons = [
    <Shirt className="w-8 h-8 text-morocco-red" />,
    <Truck className="w-8 h-8 text-morocco-green" />,
    <Users className="w-8 h-8 text-morocco-gold" />,
    <ShieldCheck className="w-8 h-8 text-gray-800" />
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">{t.benefits.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.benefits.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.benefits.items.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                {icons[index]}
              </div>
              <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-500 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;