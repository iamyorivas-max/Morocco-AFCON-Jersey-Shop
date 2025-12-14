import React from 'react';
import { Star } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 bg-morocco-red/5 p-8 rounded-2xl">
          <div className="text-center md:text-left">
             <h2 className="font-display text-3xl font-bold text-gray-900">JOIN THE <span className="text-morocco-red">RED ARMY</span></h2>
             <p className="text-gray-600">Morocco's #1 Fan Shop for CAN 2025</p>
          </div>
          <div className="flex gap-8 text-center">
             <div>
                <div className="text-3xl font-bold text-morocco-red">1,200+</div>
                <div className="text-xs text-gray-500 uppercase font-bold">Jerseys Sold</div>
             </div>
             <div>
                <div className="text-3xl font-bold text-morocco-green">4.9/5</div>
                <div className="text-xs text-gray-500 uppercase font-bold">Rating</div>
             </div>
             <div>
                <div className="text-3xl font-bold text-morocco-gold">100%</div>
                <div className="text-xs text-gray-500 uppercase font-bold">Delivery Rate</div>
             </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Amine T.",
              city: "Casablanca",
              text: "The quality is amazing for the price. I printed 'HAKIMI' on mine and the font looks official. Delivery was next day.",
              img: "https://picsum.photos/seed/user1/100/100"
            },
            {
              name: "Sarah L.",
              city: "Marrakech",
              text: "Ordered 5 for my family. The kids love them! The fabric is light, perfect for the hot weather during games.",
              img: "https://picsum.photos/seed/user2/100/100"
            },
            {
              name: "Youssef B.",
              city: "Tangier",
              text: "Customer service on WhatsApp was very helpful. I wasn't sure about the size, they guided me perfectly. Fits like a glove.",
              img: "https://picsum.photos/seed/user3/100/100"
            }
          ].map((review, i) => (
            <div key={i} className="bg-white border border-gray-100 p-6 rounded-xl shadow-lg relative">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-morocco-gold text-morocco-gold" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <img src={review.img} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
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
