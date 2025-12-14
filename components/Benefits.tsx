import React from 'react';
import { ShieldCheck, Truck, Users, Shirt } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Shirt className="w-8 h-8 text-morocco-red" />,
      title: "Premium Dri-Fit",
      description: "Breathable, moisture-wicking fabric designed for intense matches and hot stadium days."
    },
    {
      icon: <Truck className="w-8 h-8 text-morocco-green" />,
      title: "Fast Delivery",
      description: "We ship anywhere in Morocco within 24-48 hours. Receive it before the first whistle."
    },
    {
      icon: <Users className="w-8 h-8 text-morocco-gold" />,
      title: "Fan Ready",
      description: "Perfect for groups, families, and passionate supporters. Discounts on 3+ orders."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-gray-800" />,
      title: "Satisfaction Guarantee",
      description: "Pay cash on delivery. Inspect the quality before you pay. No risks involved."
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">WHY CHOOSE THIS KIT?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Don't settle for cheap replicas. Support the team with a jersey that looks professional and feels comfortable.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-500 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
