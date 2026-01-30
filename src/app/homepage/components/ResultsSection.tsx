import Icon from '@/components/ui/AppIcon';

interface ResultsSectionProps {
  className?: string;
}

const ResultsSection = ({ className = '' }: ResultsSectionProps) => {
  const caseStudies = [
    {
      industry: 'Financial Services',
      company: 'Global Finance Corp',
      challenge: 'Manual document processing taking 40+ hours per week',
      solution: 'Intelligent document extraction and validation system',
      results: [
        { metric: '90%', label: 'Time Reduction', icon: 'ClockIcon', color: 'text-primary' },
        { metric: '$120k', label: 'Annual Savings', icon: 'CurrencyDollarIcon', color: 'text-success' },
        { metric: '0%', label: 'Error Rate', icon: 'CheckBadgeIcon', color: 'text-warning' },
      ],
      testimonial: 'The automation infrastructure transformed our operations completely. ROI was evident within the first quarter.',
      role: 'Operations Director',
    },
    {
      industry: 'Healthcare',
      company: 'MedTech Solutions',
      challenge: 'Complex patient data workflows across multiple systems',
      solution: 'Unified data pipeline with intelligent routing',
      results: [
        { metric: '85%', label: 'Faster Processing', icon: 'BoltIcon', color: 'text-secondary' },
        { metric: '99.9%', label: 'Accuracy Rate', icon: 'ShieldCheckIcon', color: 'text-success' },
        { metric: '24/7', label: 'Availability', icon: 'ClockIcon', color: 'text-primary' },
      ],
      testimonial: 'Not just automation—they built us an operating system. Game-changing infrastructure for our operations.',
      role: 'CTO',
    },
    {
      industry: 'E-commerce',
      company: 'Digital Retail Inc',
      challenge: 'Order processing bottlenecks during peak seasons',
      solution: 'Scalable order orchestration and fulfillment system',
      results: [
        { metric: '10x', label: 'Capacity Increase', icon: 'ChartBarIcon', color: 'text-warning' },
        { metric: '95%', label: 'Cost Reduction', icon: 'CurrencyDollarIcon', color: 'text-success' },
        { metric: '2min', label: 'Avg Processing', icon: 'ClockIcon', color: 'text-primary' },
      ],
      testimonial: 'The transparency and methodology gave us confidence. Results exceeded all expectations.',
      role: 'CEO',
    },
  ];

  return (
    <section className={`py-20 ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Proven Results
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-4">
            Real Impact, Real Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how we've transformed operations for businesses across industries
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="glassmorphism rounded-2xl p-8 hover:border-primary transition-all duration-300">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-sm text-muted-foreground">{study.company}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {study.challenge}
                    </h3>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Solution:</span> {study.solution}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="bg-card rounded-lg p-4 text-center">
                        <Icon name={result.icon as any} size={24} className={`${result.color} mx-auto mb-2`} />
                        <p className="text-2xl font-bold text-foreground mb-1">{result.metric}</p>
                        <p className="text-xs text-muted-foreground">{result.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border">
                    <div className="flex items-start space-x-3">
                      <Icon name="ChatBubbleLeftIcon" size={20} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-foreground italic mb-2">"{study.testimonial}"</p>
                        <p className="text-sm text-muted-foreground">— {study.role}, {study.company}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-4">
                  <a
                    href="/results"
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:shadow-interactive hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span>View Full Case Study</span>
                    <Icon name="ArrowRightIcon" size={16} />
                  </a>
                  <a
                    href="/methodology"
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3 glassmorphism text-foreground rounded-lg text-sm font-semibold hover:border-primary transition-all duration-200"
                  >
                    <span>Book Similar Audit</span>
                    <Icon name="CalendarIcon" size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/results"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-semibold"
          >
            <span>View All Case Studies</span>
            <Icon name="ArrowRightIcon" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;