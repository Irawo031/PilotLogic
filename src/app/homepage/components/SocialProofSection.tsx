import Icon from '@/components/ui/AppIcon';

interface SocialProofSectionProps {
  className?: string;
}

const SocialProofSection = ({ className = '' }: SocialProofSectionProps) => {
  const trustMetrics = [
    { icon: 'ShieldCheckIcon', label: 'Enterprise Security', value: 'SOC 2 Compliant' },
    { icon: 'ClockIcon', label: 'Processing Time', value: '90% Reduction' },
    { icon: 'CurrencyDollarIcon', label: 'Annual Savings', value: '$120k Average' },
    { icon: 'CheckBadgeIcon', label: 'Error Rate', value: '0% Achieved' },
  ];

  const clientLogos = [
    'TechCorp Solutions',
    'Global Industries',
    'Enterprise Systems',
    'Innovation Labs',
    'Digital Ventures',
    'Smart Operations',
  ];

  return (
    <section className={`py-20 ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Trusted by Industry Leaders
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground">
            Enterprise-Grade Results
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustMetrics.map((metric, index) => (
            <div
              key={index}
              className="glassmorphism rounded-xl p-6 text-center hover:border-primary transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <Icon name={metric.icon as any} size={24} className="text-primary" />
              </div>
              <p className="text-2xl font-bold text-foreground mb-2">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="glassmorphism rounded-2xl p-8">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Powering Operations For
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 rounded-lg hover:bg-muted transition-colors duration-200"
              >
                <p className="text-sm font-semibold text-muted-foreground text-center">
                  {logo}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="glassmorphism rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <Icon name="StarIcon" size={24} className="text-warning flex-shrink-0" />
              <div>
                <p className="text-foreground font-medium mb-2">
                  "Transformed our operations completely. The ROI was evident within the first quarter."
                </p>
                <p className="text-sm text-muted-foreground">— Operations Director, TechCorp</p>
              </div>
            </div>
          </div>

          <div className="glassmorphism rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <Icon name="StarIcon" size={24} className="text-warning flex-shrink-0" />
              <div>
                <p className="text-foreground font-medium mb-2">
                  "The transparency and methodology gave us confidence. Results exceeded expectations."
                </p>
                <p className="text-sm text-muted-foreground">— CTO, Global Industries</p>
              </div>
            </div>
          </div>

          <div className="glassmorphism rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <Icon name="StarIcon" size={24} className="text-warning flex-shrink-0" />
              <div>
                <p className="text-foreground font-medium mb-2">
                  "Not just automation—they built us an operating system. Game-changing infrastructure."
                </p>
                <p className="text-sm text-muted-foreground">— CEO, Enterprise Systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;