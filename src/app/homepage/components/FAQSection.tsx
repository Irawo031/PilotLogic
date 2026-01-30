'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQSectionProps {
  className?: string;
}

const FAQSection = ({ className = '' }: FAQSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const faqs = [
    {
      question: 'What makes Pilot Logic Systems different from other automation providers?',
      answer: 'We don\'t just write scripts—we build infrastructure. Our approach focuses on creating scalable, maintainable automation systems that function as your business\'s operating system. We provide complete transparency with code access, detailed documentation, and a proven 4-phase methodology that ensures successful implementation.',
    },
    {
      question: 'How long does a typical automation project take?',
      answer: 'Project timelines vary based on complexity, but our standard 4-phase methodology typically takes 8-14 weeks from initial audit to full deployment. We provide a detailed timeline during the discovery phase, with clear milestones and deliverables at each stage.',
    },
    {
      question: 'What is included in the free system audit?',
      answer: 'Our system audit includes process mapping, bottleneck identification, automation opportunity assessment, ROI projections, and a technical feasibility report. It\'s a comprehensive 15-minute consultation that gives you a clear picture of your automation potential with no obligation.',
    },
    {
      question: 'Do you provide ongoing support after implementation?',
      answer: 'Yes, we offer comprehensive handover including full documentation, team training, and ongoing optimization support. Your automation infrastructure is built to be maintainable by your team, but we\'re always available for enhancements and support as your needs evolve.',
    },
    {
      question: 'What industries do you work with?',
      answer: 'Our automation infrastructure is industry-agnostic. We\'ve successfully implemented solutions across financial services, healthcare, e-commerce, manufacturing, and professional services. The core principles of intelligent automation apply universally—we adapt our approach to your specific industry requirements.',
    },
    {
      question: 'How do you ensure security and compliance?',
      answer: 'Security is built into every layer of our infrastructure. We follow SOC 2 compliance standards, implement enterprise-grade encryption, maintain detailed audit logs, and ensure all systems meet industry-specific regulatory requirements. Your data security is our top priority.',
    },
    {
      question: 'What is the typical ROI timeline?',
      answer: 'Most clients see measurable ROI within the first quarter of implementation. Our average client saves $120k annually with 90% reduction in manual processing time. The ROI calculator on this page can give you a personalized estimate based on your current operations.',
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely. Our automation infrastructure is designed to work seamlessly with your existing tech stack. We specialize in API integrations, data pipeline creation, and system orchestration across platforms including CRMs, ERPs, databases, and custom applications.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-20 ${className}`}>
      <div className="w-full max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Common Questions
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our automation infrastructure services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glassmorphism rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <Icon
                  name="ChevronDownIcon"
                  size={24}
                  className={`flex-shrink-0 text-primary transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 glassmorphism rounded-2xl p-8 text-center">
          <Icon name="QuestionMarkCircleIcon" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Schedule a free consultation to discuss your specific automation needs
          </p>
          <a
            href="mailto:chris@pilotlogicsystems.com"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg text-base font-bold hover:shadow-interactive hover:-translate-y-0.5 transition-all duration-200"
          >
            <Icon name="EnvelopeIcon" size={20} />
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;