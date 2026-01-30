import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-20 ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="glassmorphism rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Icon name="SparklesIcon" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">
                Free System Audit Available
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
              Ready to Transform Your Operations?
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Book a free 15-minute system audit to discover your automation opportunities. No obligation, just insights.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="https://calendly.com/pilotlogicsystems/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg text-base font-bold hover:shadow-interactive hover:-translate-y-0.5 transition-all duration-200"
              >
                <Icon name="CalendarIcon" size={20} />
                <span>Book System Audit</span>
              </a>
              <a
                href="/architecture-showcase"
                className="inline-flex items-center space-x-2 px-8 py-4 glassmorphism text-foreground rounded-lg text-base font-semibold hover:border-primary transition-all duration-200"
              >
                <Icon name="CodeBracketIcon" size={20} />
                <span>View Architecture</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircleIcon" size={16} className="text-success" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="ClockIcon" size={16} className="text-primary" />
                <span>15-minute consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="ShieldCheckIcon" size={16} className="text-success" />
                <span>Enterprise security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;