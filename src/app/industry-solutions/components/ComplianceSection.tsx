import Icon from '@/components/ui/AppIcon';

interface ComplianceSectionProps {
  className?: string;
}

export default function ComplianceSection({ className = '' }: ComplianceSectionProps) {
  const complianceStandards = [
    {
      id: 'soc2',
      name: 'SOC 2 Type II',
      icon: 'ShieldCheckIcon',
      description: 'Enterprise-grade security controls and data protection',
    },
    {
      id: 'hipaa',
      name: 'HIPAA Compliant',
      icon: 'DocumentCheckIcon',
      description: 'Healthcare data privacy and security standards',
    },
    {
      id: 'gdpr',
      name: 'GDPR Ready',
      icon: 'GlobeAltIcon',
      description: 'European data protection regulation compliance',
    },
    {
      id: 'iso',
      name: 'ISO 27001',
      icon: 'LockClosedIcon',
      description: 'Information security management systems',
    },
  ];

  return (
    <section className={`py-20 px-6 lg:px-12 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">
            Enterprise Standards
            <span className="text-primary"> By Default</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with security, compliance, and transparency at the core—meeting the strictest industry regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {complianceStandards.map((standard) => (
            <div
              key={standard.id}
              className="glassmorphism rounded-xl p-6 text-center space-y-4 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20">
                <Icon name={standard.icon as any} size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{standard.name}</h3>
              <p className="text-sm text-muted-foreground">{standard.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}