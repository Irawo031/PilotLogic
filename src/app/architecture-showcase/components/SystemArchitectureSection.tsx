import Icon from '@/components/ui/AppIcon';

interface ArchitectureLayer {
  name: string;
  components: string[];
  icon: string;
  color: string;
}

export default function SystemArchitectureSection() {
  const architectureLayers: ArchitectureLayer[] = [
    {
      name: 'Presentation Layer',
      icon: 'DevicePhoneMobileIcon',
      color: 'text-blue-400',
      components: ['Web Dashboard', 'Mobile Apps', 'API Documentation', 'Admin Portal']
    },
    {
      name: 'Application Layer',
      icon: 'CpuChipIcon',
      color: 'text-emerald-400',
      components: ['FastAPI Services', 'Business Logic', 'Authentication', 'Rate Limiting']
    },
    {
      name: 'Processing Layer',
      icon: 'BoltIcon',
      color: 'text-amber-400',
      components: ['Celery Workers', 'Task Queue', 'Job Scheduler', 'Event Handlers']
    },
    {
      name: 'AI/ML Layer',
      icon: 'SparklesIcon',
      color: 'text-purple-400',
      components: ['OpenAI Integration', 'Model Training', 'Prediction Engine', 'NLP Processing']
    },
    {
      name: 'Data Layer',
      icon: 'CircleStackIcon',
      color: 'text-cyan-400',
      components: ['PostgreSQL', 'Redis Cache', 'S3 Storage', 'Data Warehouse']
    },
    {
      name: 'Infrastructure Layer',
      icon: 'CloudIcon',
      color: 'text-indigo-400',
      components: ['AWS Lambda', 'Docker Containers', 'Load Balancers', 'CDN']
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-muted/50 rounded-full mb-4">
            <Icon name="CubeIcon" size={20} className="text-primary" />
            <span className="text-sm font-medium text-muted-foreground">System Design</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
            Layered <span className="text-primary">Architecture</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modular, scalable architecture designed for enterprise reliability and maintainability
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {architectureLayers.map((layer, index) => (
            <div
              key={index}
              className="glassmorphism rounded-xl p-8 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-4 bg-muted rounded-lg ${layer.color}`}>
                  <Icon name={layer.icon as any} size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground font-heading">{layer.name}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {layer.components.map((component, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 px-4 py-2 bg-muted/50 rounded-lg"
                  >
                    <Icon name="CheckCircleIcon" size={16} className="text-success flex-shrink-0" />
                    <span className="text-sm text-foreground">{component}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="glassmorphism rounded-xl p-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Icon name="ArrowPathIcon" size={32} className="text-primary" />
            <h3 className="text-3xl font-bold text-foreground font-heading">Data Flow Architecture</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {['Input', 'Validate', 'Process', 'Store', 'Output'].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-muted rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-primary-foreground">{index + 1}</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2 font-heading">{step}</h4>
                  <p className="text-sm text-muted-foreground">
                    {index === 0 && 'Data ingestion from multiple sources'}
                    {index === 1 && 'Schema validation and sanitization'}
                    {index === 2 && 'AI-powered transformation logic'}
                    {index === 3 && 'Persistent storage with backups'}
                    {index === 4 && 'Formatted delivery to endpoints'}
                  </p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <Icon name="ChevronRightIcon" size={24} className="text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}