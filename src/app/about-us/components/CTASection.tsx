import Icon from '@/components/ui/AppIcon';

const CTASection = ({ className = '' }) => {
  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="glassmorphism rounded-2xl p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
            <div className="relative space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Icon name="RocketLaunchIcon" size={20} className="text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Ready to Transform?</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground font-heading">Partner with Pilot Logic.</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how we can architect intelligent automation infrastructure for your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="https://calendly.com/pilotlogicsystems/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-interactive hover:-translate-y-0.5 transition-all duration-200">
                  <Icon name="CalendarIcon" size={20} />
                  <span>Book System Audit</span>
                  <Icon name="ArrowRightIcon" size={20} />
                </a>
                <a href="mailto:chris@pilotlogicsystems.com" className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-border rounded-lg font-semibold text-foreground hover:border-primary hover:text-primary transition-all duration-200">
                  <Icon name="EnvelopeIcon" size={20} />
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;