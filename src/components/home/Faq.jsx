import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How secure are my investments?",
    answer: "We use bank-level security with multi-signature wallets, cold storage, and advanced encryption. Your funds are protected by comprehensive insurance coverage and regulatory compliance."
  },
  {
    question: "What are the minimum investment amounts?",
    answer: "Our Starter plan begins at $500, Growth plan at $2,500, and Premium plan at $10,000. These minimums ensure optimal portfolio diversification and risk management."
  },
  {
    question: "How are returns calculated and paid?",
    answer: "Returns are calculated based on our algorithmic trading strategies and market performance. Profits are distributed daily to your account and can be withdrawn or reinvested at any time."
  },
  {
    question: "Can I withdraw my funds anytime?",
    answer: "Yes, you can withdraw your initial investment and profits at any time. Withdrawals are processed within 24-48 hours to your designated bank account or crypto wallet."
  },
  {
    question: "What cryptocurrencies do you invest in?",
    answer: "We invest in a diversified portfolio of major cryptocurrencies including Bitcoin, Ethereum, and other established altcoins, selected based on thorough market analysis and risk assessment."
  },
  {
    question: "Is there customer support available?",
    answer: "We provide 24/7 customer support through live chat, email, and phone. Premium members also get access to dedicated account managers for personalized assistance."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our investment platform and services.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}