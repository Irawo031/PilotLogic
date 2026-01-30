'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ArchitectureLayer {
  id: string;
  title: string;
  description: string;
  icon: string;
  components: string[];
  color: string;
}

const ArchitectureSection = () => {
  const [activeLayer, setActiveLayer] = useState<string>('presentation');

  const architectureLayers: ArchitectureLayer[] = [
    {
      id: 'presentation',
      title: 'Presentation Layer',
      description: 'User interfaces and client applications',
      icon: 'DevicePhoneMobileIcon',
      components: ['Web Dashboard', 'Mobile Apps', 'Admin Portal', 'API Documentation'],
      color: 'primary'
    },
    {
      id: 'application',
      title: 'Application Layer',
      description: 'Business logic and automation workflows',
      icon: 'CogIcon',
      components: ['Workflow Engine', 'Business Rules', 'Process Orchestration', 'Event Handlers'],
      color: 'secondary'
    },
    {
      id: 'integration',
      title: 'Integration Layer',
      description: 'External system connectivity',
      icon: 'PuzzlePieceIcon',
      components: ['API Gateway', 'Message Queue', 'Webhook Manager', 'Data Transformers'],
      color: 'accent'
    },
    {
      id: 'data',
      title: 'Data Layer',
      description: 'Storage and data management',
      icon: 'CircleStackIcon',
      components: ['PostgreSQL', 'Redis Cache', 'S3 Storage', 'Data Warehouse'],
      color: 'success'
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure Layer',
      description: 'Cloud resources and deployment',
      icon: 'ServerStackIcon',
      components: ['AWS EC2', 'Load Balancers', 'Auto Scaling', 'CDN'],
      color: 'warning'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-muted/20">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Icon name="CubeTransparentIcon" size={20} className="text-primary" />
              <span className="text-sm font-semibold text-primary">System Architecture</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Built for Scale & Reliability
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our five-layer architecture ensures separation of concerns, maintainability, and the ability to scale each component independently.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              {architectureLayers.map((layer) => (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`w-full text-left glassmorphism rounded-xl p-6 transition-all duration-300 ${
                    activeLayer === layer.id
                      ? 'border-primary/60 shadow-lg'
                      : 'hover:border-primary/30'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${
                      activeLayer === layer.id ? 'bg-primary/20' : 'bg-muted/50'
                    }`}>
                      <Icon
                        name={layer.icon as any}
                        size={24}
                        className={activeLayer === layer.id ? 'text-primary' : 'text-muted-foreground'}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1">{layer.title}</h3>
                      <p className="text-sm text-muted-foreground">{layer.description}</p>
                    </div>
                    <Icon
                      name="ChevronRightIcon"
                      size={20}
                      className={`transition-transform duration-300 ${
                        activeLayer === layer.id ? 'rotate-90 text-primary' : 'text-muted-foreground'
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:sticky lg:top-24">
              {architectureLayers.map((layer) => (
                <div
                  key={layer.id}
                  className={`glassmorphism rounded-2xl p-8 transition-all duration-500 ${
                    activeLayer === layer.id
                      ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-4 absolute pointer-events-none'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-4 bg-primary/10 rounded-xl">
                      <Icon name={layer.icon as any} size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{layer.title}</h3>
                      <p className="text-sm text-muted-foreground">{layer.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Key Components
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {layer.components.map((component, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 p-3 bg-muted/30 rounded-lg"
                        >
                          <Icon name="CheckCircleIcon" size={16} className="text-success flex-shrink-0" />
                          <span className="text-sm text-foreground">{component}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Layer Status</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                        <span className="text-success font-semibold">Operational</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;