import Icon from '@/components/ui/AppIcon';

interface MethodologyCTAProps {
  className?: string;
}

const MethodologyCTA = ({ className = '' }: MethodologyCTAProps) => {
  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
          <div className="absolute inset-0 glassmorphism" />
          
          <div className="relative px-8 py-16 lg:px-16 lg:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                <Icon name="RocketLaunchIcon" size={20} className="text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Ready to Transform
                </span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 font-heading">
                Experience the Pilot Method
              </h2>
              
              <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
                Start with a free 15-minute system audit. We'll analyze your current operations, identify automation opportunities, and show you exactly how our methodology can transform your business.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <a
                  href="https://calendly.com/pilotlogicsystems/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-interactive hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2"
                >
                  <Icon name="CalendarIcon" size={20} />
                  <span>Book Your System Audit</span>
                  <Icon 
                    name="ArrowRightIcon" 
                    size={20} 
                    className="group-hover:translate-x-1 transition-transform duration-200" 
                  />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <Icon name="ClockIcon" size={24} className="text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    15 Minutes
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Free consultation
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <Icon name="DocumentTextIcon" size={24} className="text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    Full Report
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Detailed analysis
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <Icon name="CurrencyDollarIcon" size={24} className="text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    No Obligation
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Zero commitment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Questions? Contact us directly
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:chris@pilotlogicsystems.com"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-200"
            >
              <Icon name="EnvelopeIcon" size={20} />
              <span>chris@pilotlogicsystems.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologyCTA;