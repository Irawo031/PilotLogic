import Icon from '@/components/ui/AppIcon';

interface Phase {
  number: string;
  title: string;
  duration: string;
  description: string;
  icon: string;
  deliverables: string[];
  color: string;
}

interface PhaseTimelineProps {
  className?: string;
}

const PhaseTimeline = ({ className = '' }: PhaseTimelineProps) => {
  const phases: Phase[] = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      duration: '1-2 Weeks',
      description: 'Deep dive into your current operations to identify automation opportunities and map existing workflows. We document every manual process, bottleneck, and inefficiency.',
      icon: 'MagnifyingGlassIcon',
      deliverables: [
        'Complete process mapping documentation',
        'Automation opportunity assessment',
        'Technical feasibility analysis',
        'ROI projection report',
        'Security and compliance audit'
      ],
      color: 'from-primary/20 to-secondary/20'
    },
    {
      number: '02',
      title: 'Architecture Design',
      duration: '2-3 Weeks',
      description: 'Design the intelligent infrastructure that will power your operations. Every integration, workflow, and data flow is mapped with precision engineering standards.',
      icon: 'CubeIcon',
      deliverables: [
        'System architecture blueprint',
        'Integration specifications',
        'Data flow diagrams',
        'Security architecture design',
        'Scalability roadmap'
      ],
      color: 'from-secondary/20 to-accent/20'
    },
    {
      number: '03',
      title: 'Implementation & Testing',
      duration: '3-5 Weeks',
      description: 'Build and deploy your automation infrastructure with continuous testing and validation. Every component is stress-tested before going live.',
      icon: 'CodeBracketIcon',
      deliverables: [
        'Production-ready automation systems',
        'Comprehensive testing reports',
        'Integration validation',
        'Performance benchmarks',
        'Error handling protocols'
      ],
      color: 'from-accent/20 to-success/20'
    },
    {
      number: '04',
      title: 'Handover & Optimization',
      duration: '2 Weeks',
      description: 'Complete knowledge transfer with documentation, training, and ongoing optimization support. Your team gains full control of the intelligent infrastructure.',
      icon: 'AcademicCapIcon',
      deliverables: [
        'Complete system documentation',
        'Team training sessions',
        'Maintenance protocols',
        'Optimization recommendations',
        '30-day support period'
      ],
      color: 'from-success/20 to-primary/20'
    }
  ];

  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 font-heading">
            The 4-Phase Pilot Method
          </h2>
          <p className="text-lg text-muted-foreground">
            A systematic approach to transforming manual operations into intelligent automation infrastructure. Complete transparency at every step.
          </p>
        </div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className="glassmorphism rounded-2xl p-8 lg:p-10 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center`}>
                    <Icon name={phase.icon as any} size={36} className="text-primary" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <div className="text-sm font-mono text-primary mb-2">
                        PHASE {phase.number}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground font-heading">
                        {phase.title}
                      </h3>
                    </div>
                    <div className="mt-2 lg:mt-0 inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-muted/50 border border-border">
                      <Icon name="ClockIcon" size={16} className="text-primary" />
                      <span className="text-sm font-semibold text-foreground">
                        {phase.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {phase.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                      Key Deliverables
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {phase.deliverables.map((deliverable, idx) => (
                        <div 
                          key={idx}
                          className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200"
                        >
                          <Icon 
                            name="CheckCircleIcon" 
                            size={20} 
                            className="text-success flex-shrink-0 mt-0.5" 
                          />
                          <span className="text-sm text-foreground">
                            {deliverable}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {index < phases.length - 1 && (
                <div className="flex justify-center mt-8">
                  <Icon 
                    name="ChevronDownIcon" 
                    size={32} 
                    className="text-primary/50" 
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhaseTimeline;