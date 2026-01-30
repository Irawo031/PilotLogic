import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface IndustryCardProps {
  industry: {
    id: string;
    name: string;
    icon: string;
    description: string;
    image: string;
    alt: string;
    challenges: string[];
    solutions: string[];
    metrics: {
      label: string;
      value: string;
    }[];
  };
  index: number;
}

export default function IndustryCard({ industry, index }: IndustryCardProps) {
  const isLarge = index % 3 === 0;
  
  return (
    <div
      className={`glassmorphism rounded-2xl overflow-hidden group hover:shadow-card-hover transition-all duration-300 ${
        isLarge ? 'lg:col-span-2 lg:row-span-2' : ''
      }`}
    >
      <div className="relative h-48 lg:h-64 overflow-hidden">
        <AppImage
          src={industry.image}
          alt={industry.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30">
              <Icon name={industry.icon as any} size={24} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">{industry.name}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-6">
        <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center space-x-2">
              <Icon name="ExclamationTriangleIcon" size={16} className="text-warning" />
              <span>Key Challenges</span>
            </h4>
            <ul className="space-y-2">
              {industry.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                  <Icon name="MinusIcon" size={16} className="text-destructive mt-0.5 flex-shrink-0" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center space-x-2">
              <Icon name="CheckCircleIcon" size={16} className="text-success" />
              <span>Our Solutions</span>
            </h4>
            <ul className="space-y-2">
              {industry.solutions.map((solution, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                  <Icon name="ArrowRightIcon" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
          {industry.metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl font-bold text-primary">{metric.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}