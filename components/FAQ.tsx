import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const FAQItem: React.FC<{question: string, answer: string}> = ({question, answer}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full py-4 text-left rtl:text-right flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-lg text-gray-800">{question}</span>
        {isOpen ? <Minus className="text-morocco-red shrink-0 ml-2 rtl:ml-0 rtl:mr-2" /> : <Plus className="text-gray-400 shrink-0 ml-2 rtl:ml-0 rtl:mr-2" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 mb-4' : 'max-h-0'}`}>
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  )
}

const FAQ: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-gray-900">{t.faq.title}</h2>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
          {t.faq.items.map((faq, idx) => (
            <FAQItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;