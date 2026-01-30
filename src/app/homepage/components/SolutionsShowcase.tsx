import Icon from '@/components/ui/AppIcon';

interface SolutionsShowcaseProps {
  className?: string;
}

const SolutionsShowcase = ({ className = '' }: SolutionsShowcaseProps) => {
  const solutions = [
    {
      icon: 'DocumentTextIcon',
      title: 'Document Processing',
      description: 'Intelligent extraction and processing of business documents with 99.9% accuracy',
      metrics: ['90% faster processing', 'Zero manual entry', 'Real-time validation'],
      color: 'text-primary',
    },
    {
      icon: 'ChartBarIcon',
      title: 'Data Pipeline Automation',
      description: 'End-to-end data workflows that transform raw information into actionable insights',
      metrics: ['24/7 operation', 'Automated reporting', 'Error detection'],
      color: 'text-secondary',
    },
    {
      icon: 'UserGroupIcon',
      title: 'Customer Operations',
      description: 'Streamlined customer interactions with intelligent routing and response systems',
      metrics: ['Instant responses', 'Smart escalation', 'Full audit trail'],
      color: 'text-success',
    },
    {
      icon: 'CogIcon',
      title: 'Workflow Orchestration',
      description: 'Complex multi-step processes automated with precision and reliability',
      metrics: ['Cross-system integration', 'Conditional logic', 'Self-healing'],
      color: 'text-warning',
    },
    {
      icon: 'ShieldCheckIcon',
      title: 'Compliance Automation',
      description: 'Automated compliance checks and reporting for regulatory requirements',
      metrics: ['Real-time monitoring', 'Audit-ready logs', 'Risk alerts'],
      color: 'text-destructive',
    },
    {
      icon: 'BoltIcon',
      title: 'API Integration Hub',
      description: 'Seamless connection between all your business systems and tools',
      metrics: ['Universal connectivity', 'Data synchronization', 'Version control'],
      color: 'text-accent',
    },
  ];

  return (
    <section className={`py-20 ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Industry-Agnostic Solutions
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-4">
            Automation Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We don't just write scripts. We build infrastructure that transforms how your business operates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="glassmorphism rounded-xl p-6 hover:border-primary transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-card mb-4 ${solution.color}`}>
                <Icon name={solution.icon as any} size={24} />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {solution.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {solution.description}
              </p>

              <div className="space-y-2">
                {solution.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <Icon name="CheckCircleIcon" size={16} className="text-success flex-shrink-0" />
                    <span className="text-sm text-foreground">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/expertise"
            className="inline-flex items-center space-x-2 px-8 py-4 glassmorphism text-foreground rounded-lg text-base font-semibold hover:border-primary transition-all duration-200"
          >
            <span>Explore All Capabilities</span>
            <Icon name="ArrowRightIcon" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionsShowcase;