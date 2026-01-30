import Icon from '@/components/ui/AppIcon';

interface Capability {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

const CapabilitiesSection = () => {
  const capabilities: Capability[] = [
    {
      id: 'ai-automation',
      title: 'AI-Powered Automation',
      description: 'Leverage advanced AI models to automate complex decision-making and natural language processing tasks.',
      icon: 'SparklesIcon',
      features: [
        'Document processing and data extraction',
        'Intelligent email classification and routing',
        'Natural language query interfaces',
        'Predictive analytics and forecasting'
      ],
      metrics: [
        { label: 'Accuracy', value: '98.5%' },
        { label: 'Processing Speed', value: '10x faster' }
      ]
    },
    {
      id: 'workflow',
      title: 'Workflow Orchestration',
      description: 'Design and deploy complex multi-step workflows that coordinate actions across multiple systems.',
      icon: 'ArrowPathIcon',
      features: [
        'Visual workflow designer',
        'Conditional logic and branching',
        'Error handling and retry mechanisms',
        'Real-time monitoring and alerts'
      ],
      metrics: [
        { label: 'Uptime', value: '99.9%' },
        { label: 'Tasks/Day', value: '50K+' }
      ]
    },
    {
      id: 'integration',
      title: 'System Integration',
      description: 'Connect disparate systems and create unified data flows across your entire technology ecosystem.',
      icon: 'LinkIcon',
      features: [
        'REST and GraphQL API integration',
        'Database synchronization',
        'Real-time webhook processing',
        'Legacy system modernization'
      ],
      metrics: [
        { label: 'Integrations', value: '100+' },
        { label: 'Data Sync', value: 'Real-time' }
      ]
    },
    {
      id: 'data-processing',
      title: 'Data Processing',
      description: 'Transform, validate, and enrich data at scale with intelligent processing pipelines.',
      icon: 'CircleStackIcon',
      features: [
        'ETL pipeline development',
        'Data validation and cleansing',
        'Format transformation',
        'Batch and stream processing'
      ],
      metrics: [
        { label: 'Records/Hour', value: '1M+' },
        { label: 'Error Rate', value: '<0.1%' }
      ]
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      description: 'Enterprise-grade security measures and compliance frameworks built into every automation.',
      icon: 'ShieldCheckIcon',
      features: [
        'End-to-end encryption',
        'Role-based access control',
        'Audit logging and compliance',
        'SOC 2 Type II certified infrastructure'
      ],
      metrics: [
        { label: 'Security Score', value: 'A+' },
        { label: 'Compliance', value: '100%' }
      ]
    },
    {
      id: 'scalability',
      title: 'Scalability & Performance',
      description: 'Built to handle growth from startup to enterprise scale without performance degradation.',
      icon: 'ChartBarIcon',
      features: [
        'Auto-scaling infrastructure',
        'Load balancing and distribution',
        'Caching and optimization',
        'Performance monitoring'
      ],
      metrics: [
        { label: 'Response Time', value: '<100ms' },
        { label: 'Concurrent Users', value: '10K+' }
      ]
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-muted/20">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-success/10 border border-success/20 rounded-full mb-6">
              <Icon name="BoltIcon" size={20} className="text-success" />
              <span className="text-sm font-semibold text-success">Core Capabilities</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What We Can Build For You
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From AI-powered document processing to enterprise-scale workflow orchestration, our technical capabilities cover the full spectrum of automation needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability) => (
              <div
                key={capability.id}
                className="glassmorphism rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon name={capability.icon as any} size={28} className="text-primary" />
                  </div>
                  <div className="flex items-center space-x-1">
                    {capability.metrics.map((metric, index) => (
                      <div key={index} className="text-right">
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                        <div className="text-sm font-bold text-primary">{metric.value}</div>
                      </div>
                    )).slice(0, 1)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{capability.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{capability.description}</p>

                <div className="space-y-2 mb-6">
                  {capability.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon name="CheckIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="grid grid-cols-2 gap-4">
                    {capability.metrics.map((metric, index) => (
                      <div key={index}>
                        <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
                        <div className="text-lg font-bold text-primary">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;