import Icon from '@/components/ui/AppIcon';

interface ProcessPhase {
  id: string;
  phase: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
  duration: string;
}

const ProcessSection = () => {
  const processPhases: ProcessPhase[] = [
    {
      id: 'discovery',
      phase: 'Phase 1',
      title: 'Discovery & Analysis',
      description: 'Deep dive into your current operations to identify automation opportunities and define success metrics.',
      icon: 'MagnifyingGlassIcon',
      deliverables: [
        'Process mapping and documentation',
        'Technical requirements specification',
        'ROI analysis and business case',
        'Risk assessment and mitigation plan'
      ],
      duration: '1-2 weeks'
    },
    {
      id: 'design',
      phase: 'Phase 2',
      title: 'Architecture Design',
      description: 'Create detailed technical architecture and workflow designs tailored to your specific needs.',
      icon: 'CubeTransparentIcon',
      deliverables: [
        'System architecture diagrams',
        'Data flow specifications',
        'Integration design documents',
        'Security and compliance framework'
      ],
      duration: '2-3 weeks'
    },
    {
      id: 'development',
      phase: 'Phase 3',
      title: 'Development & Testing',
      description: 'Build, test, and refine your automation infrastructure with continuous feedback loops.',
      icon: 'CodeBracketIcon',
      deliverables: [
        'Production-ready automation code',
        'Comprehensive test coverage',
        'Performance optimization',
        'Documentation and code comments'
      ],
      duration: '4-8 weeks'
    },
    {
      id: 'deployment',
      phase: 'Phase 4',
      title: 'Deployment & Handover',
      description: 'Seamless deployment with complete knowledge transfer and ongoing support setup.',
      icon: 'RocketLaunchIcon',
      deliverables: [
        'Production deployment',
        'Team training and documentation',
        'Monitoring and alerting setup',
        'Maintenance and support plan'
      ],
      duration: '1-2 weeks'
    }
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Icon name="ClipboardDocumentCheckIcon" size={20} className="text-primary" />
              <span className="text-sm font-semibold text-primary">Our Process</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The 4-Phase Pilot Method
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful automation implementation from initial discovery through production deployment and beyond.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden lg:block" />

            <div className="space-y-12">
              {processPhases.map((phase, index) => (
                <div key={phase.id} className="relative">
                  <div className="lg:pl-24">
                    <div className="glassmorphism rounded-2xl p-8 hover:border-primary/40 transition-all duration-300">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                        <div className="flex-shrink-0 mb-6 lg:mb-0">
                          <div className="relative">
                            <div className="absolute -left-24 top-0 hidden lg:flex items-center justify-center w-16 h-16 bg-primary rounded-full border-4 border-background">
                              <Icon name={phase.icon as any} size={28} className="text-primary-foreground" />
                            </div>
                            <div className="lg:hidden flex items-center space-x-4 mb-4">
                              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl">
                                <Icon name={phase.icon as any} size={28} className="text-primary" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-primary">{phase.phase}</div>
                                <div className="text-xs text-muted-foreground">{phase.duration}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="hidden lg:block text-sm font-semibold text-primary mb-2">
                                {phase.phase}
                              </div>
                              <h3 className="text-2xl font-bold text-foreground mb-2">{phase.title}</h3>
                              <p className="text-muted-foreground">{phase.description}</p>
                            </div>
                            <div className="hidden lg:block text-right ml-4">
                              <div className="text-xs text-muted-foreground mb-1">Duration</div>
                              <div className="text-sm font-semibold text-foreground">{phase.duration}</div>
                            </div>
                          </div>

                          <div className="mt-6">
                            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                              Key Deliverables
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-3">
                              {phase.deliverables.map((deliverable, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start space-x-2 p-3 bg-muted/30 rounded-lg"
                                >
                                  <Icon name="CheckCircleIcon" size={18} className="text-success mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-foreground">{deliverable}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="/methodology"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Learn More About Our Methodology</span>
              <Icon name="ArrowRightIcon" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;