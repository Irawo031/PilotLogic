import Icon from '@/components/ui/AppIcon';

interface TechItem {
  name: string;
  icon: string;
  category: string;
  description: string;
  color: string;
}

export default function TechStackSection() {
  const techStack: TechItem[] = [
    {
      name: 'Python',
      icon: 'CodeBracketIcon',
      category: 'Core Language',
      description: 'Enterprise-grade automation scripts with type safety and async capabilities',
      color: 'text-blue-400'
    },
    {
      name: 'OpenAI GPT-4',
      icon: 'SparklesIcon',
      category: 'AI Integration',
      description: 'Intelligent decision-making and natural language processing for autonomous operations',
      color: 'text-emerald-400'
    },
    {
      name: 'AWS Lambda',
      icon: 'CloudIcon',
      category: 'Infrastructure',
      description: 'Serverless compute for scalable, cost-efficient automation execution',
      color: 'text-amber-400'
    },
    {
      name: 'PostgreSQL',
      icon: 'CircleStackIcon',
      category: 'Data Layer',
      description: 'Robust relational database for structured data management and analytics',
      color: 'text-cyan-400'
    },
    {
      name: 'Redis',
      icon: 'BoltIcon',
      category: 'Caching',
      description: 'High-performance in-memory data store for real-time processing',
      color: 'text-red-400'
    },
    {
      name: 'Docker',
      icon: 'CubeIcon',
      category: 'Containerization',
      description: 'Consistent deployment environments across development and production',
      color: 'text-indigo-400'
    },
    {
      name: 'FastAPI',
      icon: 'RocketLaunchIcon',
      category: 'API Framework',
      description: 'Modern, fast web framework for building APIs with automatic documentation',
      color: 'text-teal-400'
    },
    {
      name: 'Celery',
      icon: 'ClockIcon',
      category: 'Task Queue',
      description: 'Distributed task queue for asynchronous job processing and scheduling',
      color: 'text-green-400'
    }
  ];

  return (
    <section id="tech-stack" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-muted/50 rounded-full mb-4">
            <Icon name="CpuChipIcon" size={20} className="text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Technology Foundation</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
            Enterprise-Grade <span className="text-primary">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with industry-leading technologies for reliability, scalability, and maintainability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="glassmorphism rounded-xl p-6 hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-muted rounded-lg ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={tech.icon as any} size={24} />
                </div>
                <span className="text-xs font-medium text-muted-foreground px-2 py-1 bg-muted rounded-full">
                  {tech.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-heading">{tech.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{tech.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 glassmorphism rounded-xl p-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="ShieldCheckIcon" size={24} className="text-success" />
            <h3 className="text-2xl font-bold text-foreground font-heading">Enterprise Standards</h3>
          </div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Every component in our stack is chosen for production-grade reliability, security compliance, and long-term maintainability. We follow industry best practices for code quality, testing, and deployment.
          </p>
        </div>
      </div>
    </section>
  );
}