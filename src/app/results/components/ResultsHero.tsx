import Icon from '@/components/ui/AppIcon';

interface ResultsHeroProps {
  className?: string;
}

const ResultsHero = ({ className = '' }: ResultsHeroProps) => {
  return (
    <section className={`relative py-24 lg:py-32 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="relative w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Icon name="ChartBarIcon" size={20} className="text-primary" />
              <span className="text-sm font-semibold text-primary">Proven Results</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-heading">
              Automation ROI
              <span className="block text-primary mt-2">& Case Studies</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we saved 10,000+ hours for Logistics and Finance firms. Real numbers, real ROI, real efficiency.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <div className="flex items-center space-x-2 text-foreground">
                <Icon name="CheckCircleIcon" size={20} className="text-success" />
                <span className="text-sm font-medium">Enterprise-Grade Results</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground">
                <Icon name="ShieldCheckIcon" size={20} className="text-success" />
                <span className="text-sm font-medium">Validated Outcomes</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground">
                <Icon name="DocumentCheckIcon" size={20} className="text-success" />
                <span className="text-sm font-medium">Documented Success</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsHero;