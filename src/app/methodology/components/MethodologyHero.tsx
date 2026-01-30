import Icon from '@/components/ui/AppIcon';

interface MethodologyHeroProps {
  className?: string;
}

const MethodologyHero = ({ className = '' }: MethodologyHeroProps) => {
  return (
    <section className={`relative py-20 lg:py-32 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Icon name="CogIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              The Pilot Method
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-heading">
            Systematic Transformation,
            <span className="block text-primary mt-2">Not Quick Fixes</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
            Our 4-phase methodology transforms manual operations into intelligent automation infrastructure. Complete transparency, documented processes, and enterprise-grade reliability at every step.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/pilotlogicsystems/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:shadow-interactive hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2"
            >
              <span>Book System Audit</span>
              <Icon 
                name="ArrowRightIcon" 
                size={20} 
                className="group-hover:translate-x-1 transition-transform duration-200" 
              />
            </a>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Success Rate', value: '100%', icon: 'CheckCircleIcon' },
            { label: 'Avg. Timeline', value: '8-12 Weeks', icon: 'ClockIcon' },
            { label: 'Client Satisfaction', value: '98%', icon: 'StarIcon' },
            { label: 'Implementations', value: '150+', icon: 'ChartBarIcon' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="glassmorphism rounded-xl p-6 text-center hover:border-primary/40 transition-all duration-300"
            >
              <Icon 
                name={stat.icon as any} 
                size={32} 
                className="text-primary mx-auto mb-3" 
              />
              <div className="text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologyHero;