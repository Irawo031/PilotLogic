import Icon from '@/components/ui/AppIcon';

interface IndustryHeroProps {
  className?: string;
}

export default function IndustryHero({ className = '' }: IndustryHeroProps) {
  return (
    <section className={`relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Icon name="BuildingOfficeIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Industry Solutions</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Sector-Specific Automation
            <br />
            <span className="text-primary">For Logistics, Fintech, & Healthcare</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don't just write scripts. We build architecture for efficiency—delivering autonomous logic that scales without scaling headcount, regardless of your industry.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <div className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-card border border-border">
              <Icon name="CheckCircleIcon" size={20} className="text-success" />
              <span className="text-sm font-medium text-foreground">90% Time Reduction</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-card border border-border">
              <Icon name="CurrencyDollarIcon" size={20} className="text-success" />
              <span className="text-sm font-medium text-foreground">$120k+ Annual Savings</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-card border border-border">
              <Icon name="ShieldCheckIcon" size={20} className="text-success" />
              <span className="text-sm font-medium text-foreground">0% Error Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}