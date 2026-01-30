import Icon from '@/components/ui/AppIcon';

interface SecurityFeature {
  title: string;
  description: string;
  icon: string;
  metrics: string;
}

export default function SecuritySection() {
  const securityFeatures: SecurityFeature[] = [
    {
      title: 'End-to-End Encryption',
      description: 'All data encrypted in transit and at rest using AES-256 and TLS 1.3',
      icon: 'LockClosedIcon',
      metrics: '256-bit encryption'
    },
    {
      title: 'Access Control',
      description: 'Role-based access control (RBAC) with multi-factor authentication',
      icon: 'ShieldCheckIcon',
      metrics: 'MFA enabled'
    },
    {
      title: 'Audit Logging',
      description: 'Comprehensive logging of all system activities and data access',
      icon: 'DocumentTextIcon',
      metrics: '100% coverage'
    },
    {
      title: 'Compliance',
      description: 'SOC 2 Type II, GDPR, and HIPAA compliant infrastructure',
      icon: 'CheckBadgeIcon',
      metrics: 'Multi-certified'
    },
    {
      title: 'Vulnerability Scanning',
      description: 'Automated security scanning and penetration testing',
      icon: 'MagnifyingGlassIcon',
      metrics: 'Daily scans'
    },
    {
      title: 'Disaster Recovery',
      description: 'Automated backups with 99.99% uptime SLA and failover systems',
      icon: 'ArrowPathIcon',
      metrics: '99.99% uptime'
    }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-muted/50 rounded-full mb-4">
            <Icon name="ShieldCheckIcon" size={20} className="text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Enterprise Security</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
            Security & <span className="text-primary">Compliance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade security measures protecting your data and operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="glassmorphism rounded-xl p-6 hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-muted rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                  <Icon name={feature.icon as any} size={28} />
                </div>
                <span className="text-xs font-bold text-success px-3 py-1 bg-success/10 rounded-full">
                  {feature.metrics}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-heading">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="glassmorphism rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2 font-heading">256-bit</div>
              <p className="text-muted-foreground">Encryption Standard</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2 font-heading">99.99%</div>
              <p className="text-muted-foreground">Uptime Guarantee</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2 font-heading">24/7</div>
              <p className="text-muted-foreground">Security Monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}