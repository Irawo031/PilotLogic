import Icon from '@/components/ui/AppIcon';

const HeroSection = ({ className = '' }) => {
  return (
    <section className={`relative py-32 lg:py-40 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>
      <div className="relative w-full px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <Icon name="BuildingOfficeIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary">About Pilot Logic Systems</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight font-heading">
            The Automation Infrastructure Firm.
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Led by Lead Architect Chris O., Pilot Logic Systems is a global infrastructure firm dedicated to removing human robotic work from the enterprise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;