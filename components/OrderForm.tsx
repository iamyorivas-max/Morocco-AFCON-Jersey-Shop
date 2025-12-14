import React, { useState } from 'react';
import { JerseyConfig, JERSEY_PRICES } from '../types';
import { Send, CheckCircle, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface OrderFormProps {
  config: JerseyConfig;
}

const OrderForm: React.FC<OrderFormProps> = ({ config }) => {
  const { t, dir } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: '',
    quantity: 1
  });

  const totalPrice = formData.quantity * JERSEY_PRICES.discount;
  const isFormValid = formData.fullName && formData.phone && formData.city;

  const handleWhatsAppOrder = () => {
    if (!isFormValid) return;

    // We keep the actual message in English/French as it goes to the seller
    const message = `
*NEW AFCON JERSEY ORDER* 🇲🇦
------------------
*Product Details:*
Color: ${config.color.toUpperCase()}
Size: ${config.size}
Name: ${config.name || 'NONE'}
Number: ${config.number || 'NONE'}

*Customer Info:*
Name: ${formData.fullName}
Phone: ${formData.phone}
City: ${formData.city}
Quantity: ${formData.quantity}

*Total: ${totalPrice} DH*
------------------
Please confirm my order!
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/212600000000?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50" id="order-section">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-morocco-green p-6 text-center">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide">{t.order.title}</h2>
            <p className="text-green-100 text-sm mt-1">{t.order.subtitle}</p>
          </div>

          <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Order Summary */}
            <div className="bg-gray-50 p-6 rounded-xl h-fit">
              <h3 className="font-bold text-gray-900 mb-4 border-b pb-2">{t.order.summary}</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t.order.color}:</span>
                  <span className="font-medium capitalize">{config.color}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t.order.size}:</span>
                  <span className="font-medium">{config.size}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t.order.customName}:</span>
                  <span className="font-medium">{config.name || '-'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t.order.customNumber}:</span>
                  <span className="font-medium">{config.number || '-'}</span>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-gray-200 pt-4">
                <span className="text-gray-600">{t.order.total}:</span>
                <span className="text-3xl font-display font-bold text-morocco-red">{totalPrice} DH</span>
              </div>

              {!isFormValid && (
                <div className="mt-6 flex items-start gap-2 text-yellow-600 text-xs bg-yellow-50 p-3 rounded">
                  <AlertTriangle size={16} className="shrink-0" />
                  <p>{t.order.alert}</p>
                </div>
              )}
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.order.fullName}</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-morocco-green outline-none"
                  placeholder="Ali Benani"
                  value={formData.fullName}
                  onChange={e => setFormData({...formData, fullName: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.order.phone}</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-morocco-green outline-none"
                  placeholder="06 00 00 00 00 text-right"
                  style={{ direction: 'ltr', textAlign: dir === 'rtl' ? 'right' : 'left' }}
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.order.city}</label>
                <select 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-morocco-green outline-none bg-white"
                  value={formData.city}
                  onChange={e => setFormData({...formData, city: e.target.value})}
                >
                  <option value="">{t.order.selectCity}</option>
                  {t.order.cities.map(c => (
                     <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.order.quantity}</label>
                <div className="flex items-center gap-4">
                  <button 
                    type="button"
                    className="w-10 h-10 rounded-full bg-gray-200 text-xl font-bold hover:bg-gray-300"
                    onClick={() => setFormData({...formData, quantity: Math.max(1, formData.quantity - 1)})}
                  >-</button>
                  <span className="text-xl font-bold w-8 text-center">{formData.quantity}</span>
                  <button 
                    type="button"
                    className="w-10 h-10 rounded-full bg-gray-200 text-xl font-bold hover:bg-gray-300"
                    onClick={() => setFormData({...formData, quantity: formData.quantity + 1})}
                  >+</button>
                </div>
              </div>

              <button 
                onClick={handleWhatsAppOrder}
                disabled={!isFormValid}
                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition transform hover:scale-[1.02] mt-4 ${
                  isFormValid 
                  ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/30' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Send size={20} className="rtl:rotate-180" />
                {t.order.cta}
              </button>
              
              <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                <CheckCircle size={12} className="text-green-500" />
                {t.order.noPayment}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;