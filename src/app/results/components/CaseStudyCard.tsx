import Icon from '@/components/ui/AppIcon';

interface CaseStudyMetric {
  label: string;
  value: string;
  improvement: string;
}

interface CaseStudyCardProps {
  industry: string;
  companySize: string;
  challenge: string;
  solution: string;
  metrics: CaseStudyMetric[];
  timeline: string;
  featured?: boolean;
}

const CaseStudyCard = ({
  industry,
  companySize,
  challenge,
  solution,
  metrics,
  timeline,
  featured = false
}: CaseStudyCardProps) => {
  return (
    <div className={`glassmorphism rounded-2xl p-8 hover:shadow-card-hover transition-all duration-300 ${featured ? 'lg:col-span-2' : ''}`}>
      <div className="flex items-start justify-between mb-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              {industry}
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold">
              {companySize}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Icon name="ClockIcon" size={16} />
          <span className="text-sm">{timeline}</span>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center space-x-2">
            <Icon name="ExclamationTriangleIcon" size={20} className="text-warning" />
            <span>Challenge</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed">{challenge}</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center space-x-2">
            <Icon name="LightBulbIcon" size={20} className="text-primary" />
            <span>Solution</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed">{solution}</p>
        </div>
        
        <div className="pt-4 border-t border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Results Achieved</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="space-y-1">
                <div className="text-2xl font-bold text-primary font-heading">{metric.value}</div>
                <div className="text-sm font-medium text-foreground">{metric.label}</div>
                <div className="flex items-center space-x-1 text-success">
                  <Icon name="ArrowTrendingUpIcon" size={14} />
                  <span className="text-xs font-semibold">{metric.improvement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;