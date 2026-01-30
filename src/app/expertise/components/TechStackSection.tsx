import Icon from '@/components/ui/AppIcon';

interface TechCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  technologies: Technology[];
}

interface Technology {
  name: string;
  purpose: string;
  icon: string;
}

const TechStackSection = () => {
  const techStack: TechCategory[] = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: 'CpuChipIcon',
      description: 'Intelligent decision-making and natural language processing',
      technologies: [
        { name: 'OpenAI GPT-4', purpose: 'Advanced language understanding and generation', icon: 'SparklesIcon' },
        { name: 'LangChain', purpose: 'AI application orchestration and chaining', icon: 'LinkIcon' },
        { name: 'Anthropic Claude', purpose: 'Complex reasoning and analysis', icon: 'LightBulbIcon' },
        { name: 'Hugging Face', purpose: 'Custom model deployment and fine-tuning', icon: 'BeakerIcon' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Infrastructure',
      icon: 'ServerIcon',
      description: 'Robust, scalable server architecture',
      technologies: [
        { name: 'Python 3.11+', purpose: 'Core automation logic and data processing', icon: 'CodeBracketIcon' },
        { name: 'FastAPI', purpose: 'High-performance API development', icon: 'BoltIcon' },
        { name: 'Node.js', purpose: 'Real-time processing and event handling', icon: 'CubeIcon' },
        { name: 'PostgreSQL', purpose: 'Enterprise-grade data persistence', icon: 'CircleStackIcon' }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      icon: 'CloudIcon',
      description: 'Scalable infrastructure and deployment',
      technologies: [
        { name: 'AWS', purpose: 'Primary cloud infrastructure provider', icon: 'ServerStackIcon' },
        { name: 'Docker', purpose: 'Containerization and environment consistency', icon: 'CubeTransparentIcon' },
        { name: 'Kubernetes', purpose: 'Container orchestration at scale', icon: 'CommandLineIcon' },
        { name: 'GitHub Actions', purpose: 'CI/CD automation and deployment', icon: 'ArrowPathIcon' }
      ]
    },
    {
      id: 'integration',
      title: 'Integration & APIs',
      icon: 'PuzzlePieceIcon',
      description: 'Seamless connectivity with existing systems',
      technologies: [
        { name: 'REST APIs', purpose: 'Standard HTTP-based integrations', icon: 'GlobeAltIcon' },
        { name: 'GraphQL', purpose: 'Flexible data querying and manipulation', icon: 'ShareIcon' },
        { name: 'Webhooks', purpose: 'Real-time event-driven automation', icon: 'BellAlertIcon' },
        { name: 'OAuth 2.0', purpose: 'Secure authentication and authorization', icon: 'LockClosedIcon' }
      ]
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Security',
      icon: 'ShieldCheckIcon',
      description: 'Enterprise-grade reliability and protection',
      technologies: [
        { name: 'Datadog', purpose: 'Real-time system monitoring and alerting', icon: 'ChartBarIcon' },
        { name: 'Sentry', purpose: 'Error tracking and performance monitoring', icon: 'ExclamationTriangleIcon' },
        { name: 'AWS CloudWatch', purpose: 'Infrastructure metrics and logging', icon: 'EyeIcon' },
        { name: 'Vault', purpose: 'Secrets management and encryption', icon: 'KeyIcon' }
      ]
    },
    {
      id: 'automation',
      title: 'Automation Tools',
      icon: 'WrenchScrewdriverIcon',
      description: 'Specialized automation frameworks',
      technologies: [
        { name: 'Selenium', purpose: 'Web browser automation and testing', icon: 'WindowIcon' },
        { name: 'Playwright', purpose: 'Modern web automation framework', icon: 'DevicePhoneMobileIcon' },
        { name: 'Apache Airflow', purpose: 'Workflow orchestration and scheduling', icon: 'CalendarIcon' },
        { name: 'Celery', purpose: 'Distributed task queue processing', icon: 'QueueListIcon' }
      ]
    }
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-6">
              <Icon name="CubeIcon" size={20} className="text-secondary" />
              <span className="text-sm font-semibold text-secondary">Technology Stack</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Enterprise-Grade Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build automation infrastructure that scales with your business and adapts to your evolving needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((category) => (
              <div
                key={category.id}
                className="glassmorphism rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon name={category.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <p className="text-sm text-muted-foreground mb-6">{category.description}</p>
                
                <div className="space-y-4">
                  {category.technologies.map((tech, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name={tech.icon as any} size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-foreground">{tech.name}</div>
                        <div className="text-xs text-muted-foreground">{tech.purpose}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;