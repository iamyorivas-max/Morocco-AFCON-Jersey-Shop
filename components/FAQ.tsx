import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{question: string, answer: string}> = ({question, answer}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full py-4 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-lg text-gray-800">{question}</span>
        {isOpen ? <Minus className="text-morocco-red" /> : <Plus className="text-gray-400" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 mb-4' : 'max-h-0'}`}>
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  )
}

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "When will I receive my jersey?",
      answer: "We offer express shipping. Orders in Casablanca/Rabat arrive in 24h. Other cities take 48h maximum."
    },
    {
      question: "Can I pay cash on delivery?",
      answer: "Yes! You pay only when you receive the product and verify it."
    },
    {
      question: "How do I choose the right size?",
      answer: "Our sizes are standard European fit. If you usually wear Medium, order Medium. If you prefer a loose fit for the stadium, go one size up."
    },
    {
      question: "Does the print wash off?",
      answer: "No. We use premium industrial heat press vinyl that is guaranteed to last through machine washing (wash inside out at 30°C)."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-gray-900">FREQUENTLY ASKED QUESTIONS</h2>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
