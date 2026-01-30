'use client';

import Icon from '@/components/ui/AppIcon';
import { 
  SiMake, 
  SiZapier, 
  SiN8N, 
  SiAirtable, 
  SiSupabase, 
  SiPostgresql,
  SiPython, 
  SiNodedotjs,
  SiHubspot, 
  SiSalesforce
} from 'react-icons/si';


interface Technology {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number }> | 'text';
  alt: string;
}

interface TechCategory {
  title: string;
  icon: string;
  technologies: Technology[];
}

interface MethodologyResourcesProps {
  className?: string;
}

const MethodologyResources = ({ className = '' }: MethodologyResourcesProps) => {
  const techCategories: TechCategory[] = [
    {
      title: 'Orchestration',
      icon: 'BoltIcon',
      technologies: [
        {
          name: 'Make.com',
          description: 'Advanced automation scenarios and visual workflow builder',
          icon: SiMake,
          alt: 'Make.com automation and integrations — PilotLogic Systems'
        },
        {
          name: 'Zapier',
          description: 'No-code workflow automation and app integrations',
          icon: SiZapier,
          alt: 'Zapier automation and integrations — PilotLogic Systems'
        },
        {
          name: 'n8n',
          description: 'Open-source workflow automation with custom nodes',
          icon: SiN8N,
          alt: 'n8n automation and integrations — PilotLogic Systems'
        }
      ]
    },
    {
      title: 'Data Layer',
      icon: 'CircleStackIcon',
      technologies: [
        {
          name: 'Airtable',
          description: 'Flexible database with spreadsheet interface',
          icon: SiAirtable,
          alt: 'Airtable automation and integrations — PilotLogic Systems'
        },
        {
          name: 'Supabase',
          description: 'Real-time database and authentication backend',
          icon: SiSupabase,
          alt: 'Supabase automation and integrations — PilotLogic Systems'
        },
        {
          name: 'PostgreSQL',
          description: 'Enterprise-grade relational database system',
          icon: SiPostgresql,
          alt: 'PostgreSQL automation and integrations — PilotLogic Systems'
        }
      ]
    },
    {
      title: 'Custom Code',
      icon: 'CodeBracketIcon',
      technologies: [
        {
          name: 'Python',
          description: 'Core automation scripting and data processing',
          icon: SiPython,
          alt: 'Python automation and integrations — PilotLogic Systems'
        },
        {
          name: 'Node.js',
          description: 'JavaScript runtime for scalable server applications',
          icon: SiNodedotjs,
          alt: 'Node.js automation and integrations — PilotLogic Systems'
        }
      ]
    },
    {
      title: 'CRM & Sales',
      icon: 'UserGroupIcon',
      technologies: [
        {
          name: 'HubSpot',
          description: 'Complete CRM platform with marketing automation',
          icon: SiHubspot,
          alt: 'HubSpot automation and integrations — PilotLogic Systems'
        },
        {
          name: 'Salesforce',
          description: 'Enterprise CRM and customer success platform',
          icon: SiSalesforce,
          alt: 'Salesforce automation and integrations — PilotLogic Systems'
        },
        {
          name: 'GoHighLevel',
          description: 'All-in-one marketing and CRM automation platform',
          icon: 'text',
          alt: 'GoHighLevel automation and integrations — PilotLogic Systems'
        }
      ]
    }
  ];

  return (
    <section className={`py-20 lg:py-32 bg-gradient-to-b from-primary/5 to-transparent ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Icon name="CubeIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Technology Stack
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 font-heading">
            Technologies We Deploy
          </h2>
          <p className="text-lg text-muted-foreground">
            Enterprise-grade tools and platforms powering intelligent automation infrastructure
          </p>
        </div>

        {/* Categorized Grid */}
        <div className="space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name={category.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground font-heading">
                  {category.title}
                </h3>
              </div>

              {/* Technology Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Icon + Name */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {tech.icon === 'text' ? (
                          <div 
                            className="text-primary font-mono font-bold text-xs"
                            role="img"
                            aria-label={tech.alt}
                          >
                            GHL
                          </div>
                        ) : (
                          <tech.icon 
                            className="text-primary" 
                            size={28}
                            aria-label={tech.alt}
                          />
                        )}
                      </div>
                      <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {tech.name}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {tech.description}
                    </p>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 glassmorphism rounded-2xl p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Icon name="RocketLaunchIcon" size={40} className="text-primary" />
              </div>
            </div>
            <div className="flex-grow text-center lg:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2 font-heading">
                Ready to Build Your Automation Infrastructure?
              </h3>
              <p className="text-muted-foreground">
                Schedule a free consultation to discuss how we can leverage these technologies to transform your operations.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="https://calendly.com/pilotlogicsystems/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:shadow-interactive hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2">

                <Icon name="CalendarIcon" size={20} />
                <span>Book Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologyResources;