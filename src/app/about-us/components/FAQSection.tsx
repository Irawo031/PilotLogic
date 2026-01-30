'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const FAQSection = ({ className = '' }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: 'Where are you based?',
      answer: 'We operate as a digital-first infrastructure firm, deploying systems for clients globally. Our distributed model allows us to serve businesses worldwide with the same level of precision and expertise.',
    },
    {
      question: 'Do you work with startups?',
      answer: 'We partner with high-growth operations of any size, from Series A startups to Enterprise logistics hubs. If you have complex operational challenges that require intelligent automation, we can help.',
    },
    {
      question: 'What industries do you serve?',
      answer: 'We specialize in operations-heavy industries including logistics, e-commerce, manufacturing, healthcare, and financial services. Our systems are built to handle high-volume data processing and complex workflow orchestration.',
    },
    {
      question: 'How long does implementation take?',
      answer: 'Typical implementation timelines range from 8-12 weeks depending on complexity. We follow a structured methodology with clear milestones and deliverables at each phase.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-20 lg:py-32 bg-muted/20 ${className}`}>
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Icon name="QuestionMarkCircleIcon" size={20} className="text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Common Questions</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 font-heading">Company FAQ</h2>
            <p className="text-lg text-muted-foreground">Learn more about Pilot Logic Systems and how we work.</p>
          </div>
          <div className="space-y-4">
            {faqItems?.map((item, index) => (
              <div key={index} className="glassmorphism rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300">
                <button onClick={() => toggleFAQ(index)} className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/20 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-foreground pr-4">{item?.question}</h3>
                  <Icon name="ChevronDownIcon" size={24} className={`text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 animate-scale-in">
                    <p className="text-muted-foreground leading-relaxed">{item?.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;