import Icon from '@/components/ui/AppIcon';

interface ComparisonFeature {
  feature: string;
  pilotMethod: string;
  traditional: string;
  pilotIcon: string;
  traditionalIcon: string;
}

interface MethodologyComparisonProps {
  className?: string;
}

const MethodologyComparison = ({ className = '' }: MethodologyComparisonProps) => {
  const comparisonFeatures: ComparisonFeature[] = [
    {
      feature: 'Approach',
      pilotMethod: 'Systematic infrastructure building',
      traditional: 'Quick-fix script writing',
      pilotIcon: 'CubeIcon',
      traditionalIcon: 'WrenchIcon'
    },
    {
      feature: 'Timeline',
      pilotMethod: '8-12 weeks with complete handover',
      traditional: '2-4 weeks with ongoing dependency',
      pilotIcon: 'ClockIcon',
      traditionalIcon: 'ClockIcon'
    },
    {
      feature: 'Documentation',
      pilotMethod: 'Enterprise-grade, complete transparency',
      traditional: 'Minimal or non-existent',
      pilotIcon: 'DocumentTextIcon',
      traditionalIcon: 'DocumentIcon'
    },
    {
      feature: 'Scalability',
      pilotMethod: 'Built for growth from day one',
      traditional: 'Requires rebuilding as you scale',
      pilotIcon: 'ArrowTrendingUpIcon',
      traditionalIcon: 'ArrowPathIcon'
    },
    {
      feature: 'Maintenance',
      pilotMethod: 'Your team owns and controls',
      traditional: 'Vendor dependency continues',
      pilotIcon: 'UserGroupIcon',
      traditionalIcon: 'LinkIcon'
    },
    {
      feature: 'Security',
      pilotMethod: 'Enterprise standards, audited',
      traditional: 'Variable, often overlooked',
      pilotIcon: 'ShieldCheckIcon',
      traditionalIcon: 'ShieldExclamationIcon'
    }
  ];

  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 font-heading">
            Why Our Methodology Matters
          </h2>
          <p className="text-lg text-muted-foreground">
            The difference between building infrastructure and writing scripts. Compare our systematic approach to traditional automation vendors.
          </p>
        </div>

        <div className="glassmorphism rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border/20">
            <div className="bg-card p-6 lg:p-8">
              <h3 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider">
                Comparison Factor
              </h3>
            </div>
            <div className="bg-primary/5 p-6 lg:p-8 border-l-4 border-primary">
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircleIcon" size={24} className="text-primary" />
                <h3 className="text-lg font-bold text-foreground font-heading">
                  Pilot Method
                </h3>
              </div>
            </div>
            <div className="bg-card p-6 lg:p-8">
              <div className="flex items-center space-x-3">
                <Icon name="XCircleIcon" size={24} className="text-muted-foreground" />
                <h3 className="text-lg font-semibold text-muted-foreground">
                  Traditional Approach
                </h3>
              </div>
            </div>
          </div>

          {comparisonFeatures.map((item, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border/20 hover:bg-border/30 transition-colors duration-200"
            >
              <div className="bg-card p-6 lg:p-8 flex items-center">
                <span className="font-semibold text-foreground">
                  {item.feature}
                </span>
              </div>
              <div className="bg-primary/5 p-6 lg:p-8 border-l-4 border-primary">
                <div className="flex items-start space-x-3">
                  <Icon 
                    name={item.pilotIcon as any} 
                    size={20} 
                    className="text-primary flex-shrink-0 mt-0.5" 
                  />
                  <span className="text-foreground">
                    {item.pilotMethod}
                  </span>
                </div>
              </div>
              <div className="bg-card p-6 lg:p-8">
                <div className="flex items-start space-x-3">
                  <Icon 
                    name={item.traditionalIcon as any} 
                    size={20} 
                    className="text-muted-foreground flex-shrink-0 mt-0.5" 
                  />
                  <span className="text-muted-foreground">
                    {item.traditional}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Ready to experience the difference of systematic transformation?
          </p>
          <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-interactive hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center space-x-2">
            <span>Schedule Your System Audit</span>
            <Icon 
              name="ArrowRightIcon" 
              size={20} 
              className="group-hover:translate-x-1 transition-transform duration-200" 
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MethodologyComparison;