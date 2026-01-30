'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface MethodologyTimelineProps {
  className?: string;
}

const MethodologyTimeline = ({ className = '' }: MethodologyTimelineProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const phases = [
    {
      number: '01',
      title: 'Discovery & Audit',
      duration: '1-2 weeks',
      icon: 'MagnifyingGlassIcon',
      description: 'Deep dive into your current operations to identify automation opportunities',
      deliverables: [
        'Process mapping and documentation',
        'Bottleneck identification',
        'ROI projection report',
        'Technical feasibility assessment',
      ],
      color: 'text-primary',
    },
    {
      number: '02',
      title: 'Architecture Design',
      duration: '2-3 weeks',
      icon: 'CubeIcon',
      description: 'Design the automation infrastructure tailored to your business needs',
      deliverables: [
        'System architecture blueprint',
        'Integration strategy',
        'Security and compliance plan',
        'Implementation roadmap',
      ],
      color: 'text-secondary',
    },
    {
      number: '03',
      title: 'Build & Integration',
      duration: '4-8 weeks',
      icon: 'WrenchScrewdriverIcon',
      description: 'Develop and deploy your custom automation infrastructure',
      deliverables: [
        'Core automation systems',
        'API integrations',
        'Testing and validation',
        'Performance optimization',
      ],
      color: 'text-success',
    },
    {
      number: '04',
      title: 'Handover & Optimization',
      duration: 'Ongoing',
      icon: 'RocketLaunchIcon',
      description: 'Complete knowledge transfer and continuous improvement support',
      deliverables: [
        'Full documentation',
        'Team training sessions',
        'Monitoring dashboards',
        'Optimization recommendations',
      ],
      color: 'text-warning',
    },
  ];

  return (
    <section className={`py-20 ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            The Pilot Method
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-4">
            Transparent Methodology
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our proven 4-phase approach ensures successful automation implementation with complete transparency
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            {phases.map((phase, index) => (
              <button
                key={index}
                onClick={() => setActivePhase(index)}
                className={`w-full text-left glassmorphism rounded-xl p-6 transition-all duration-300 ${
                  activePhase === index
                    ? 'border-primary scale-105' :'hover:border-border'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-card flex items-center justify-center ${phase.color}`}>
                    <Icon name={phase.icon as any} size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {phase.number}. {phase.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">{phase.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                  </div>
                  <Icon
                    name="ChevronRightIcon"
                    size={20}
                    className={`flex-shrink-0 transition-transform ${
                      activePhase === index ? 'rotate-90 text-primary' : 'text-muted-foreground'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          <div className="glassmorphism rounded-2xl p-8">
            <div className="mb-6">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-card mb-4 ${phases[activePhase].color}`}>
                <Icon name={phases[activePhase].icon as any} size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {phases[activePhase].title}
              </h3>
              <p className="text-muted-foreground">{phases[activePhase].description}</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Key Deliverables
              </h4>
              {phases[activePhase].deliverables.map((deliverable, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-card rounded-lg">
                  <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{deliverable}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Duration</span>
                <span className="font-semibold text-foreground">{phases[activePhase].duration}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/methodology"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg text-base font-semibold hover:shadow-interactive hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Learn More About Our Process</span>
            <Icon name="ArrowRightIcon" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MethodologyTimeline;