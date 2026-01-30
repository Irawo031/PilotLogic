'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface MethodologyFAQProps {
  className?: string;
}

const MethodologyFAQ = ({ className = '' }: MethodologyFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: 'How long does the complete Pilot Method take?',
      answer: 'The typical timeline is 8-12 weeks from discovery to handover, depending on the complexity of your operations and the number of integrations required. We provide a detailed timeline during the discovery phase with clear milestones and deliverables for each week.',
      category: 'Timeline'
    },
    {
      question: 'What happens if our requirements change during implementation?',
      answer: 'Our methodology includes built-in flexibility for requirement changes. During each phase review, we assess any new requirements and adjust the architecture accordingly. Changes are documented, and timeline impacts are communicated transparently before proceeding.',
      category: 'Process'
    },
    {
      question: 'Do we need technical expertise on our team?',
      answer: 'No technical expertise is required from your team. We handle all technical implementation and provide comprehensive training during handover. However, having a point person who understands your business processes is valuable for the discovery phase.',
      category: 'Requirements'
    },
    {
      question: 'How do you ensure security and compliance?',
      answer: 'Security is integrated into every phase. We conduct security audits during discovery, implement enterprise-grade security protocols during architecture design, perform penetration testing during implementation, and provide security documentation during handover. All systems follow industry best practices and compliance standards.',
      category: 'Security'
    },
    {
      question: 'What kind of documentation do we receive?',
      answer: 'You receive complete enterprise-grade documentation including: system architecture diagrams, API documentation, workflow diagrams, code comments, maintenance protocols, troubleshooting guides, and training materials. Everything needed for your team to maintain and extend the systems independently.',
      category: 'Documentation'
    },
    {
      question: 'Can the systems scale as our business grows?',
      answer: 'Absolutely. Scalability is a core principle of our methodology. During the architecture design phase, we build systems that can handle 10x your current volume. We document scaling procedures and provide recommendations for future growth scenarios.',
      category: 'Scalability'
    },
    {
      question: 'What support do we get after handover?',
      answer: 'The handover phase includes 30 days of ongoing support for questions, troubleshooting, and optimization. After that, we offer optional maintenance packages or on-demand support. However, our goal is complete knowledge transfer so your team can operate independently.',
      category: 'Support'
    },
    {
      question: 'How do you measure success?',
      answer: 'Success is measured against the specific metrics identified during discovery: time savings, error reduction, cost savings, and process efficiency improvements. We establish baseline metrics at the start and validate improvements during the testing phase with quantifiable results.',
      category: 'Results'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Icon name="QuestionMarkCircleIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Common Questions
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 font-heading">
            Methodology FAQ
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our systematic approach to automation transformation.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="glassmorphism rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/20 transition-colors duration-200"
              >
                <div className="flex-grow pr-4">
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.question}
                  </h3>
                </div>
                <Icon 
                  name="ChevronDownIcon" 
                  size={24} 
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 animate-scale-in">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center glassmorphism rounded-xl p-8">
          <Icon name="ChatBubbleLeftRightIcon" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-2 font-heading">
            Still Have Questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Schedule a free consultation to discuss your specific situation and how our methodology can be tailored to your needs.
          </p>
          <a
            href="https://calendly.com/pilotlogicsystems/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:shadow-interactive hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center space-x-2"
          >
            <Icon name="CalendarIcon" size={20} />
            <span>Schedule Consultation</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MethodologyFAQ;