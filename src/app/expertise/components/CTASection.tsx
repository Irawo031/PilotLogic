import Icon from '@/components/ui/AppIcon';

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="glassmorphism rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-8">
                <Icon name="RocketLaunchIcon" size={20} className="text-primary" />
                <span className="text-sm font-semibold text-primary">Ready to Transform?</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Let's Build Your Automation Infrastructure
              </h2>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Schedule a 15-minute system audit to discover how our technical capabilities can transform your operations and eliminate manual processes.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://calendly.com/pilotlogicsystems/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Icon name="CalendarIcon" size={20} />
                  <span>Book System Audit</span>
                </a>
                <a
                  href="/architecture-showcase"
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-border rounded-lg font-semibold text-foreground hover:border-primary hover:text-primary transition-all duration-200"
                >
                  <Icon name="CodeBracketIcon" size={20} />
                  <span>View Architecture</span>
                </a>
              </div>

              <div className="mt-12 pt-12 border-t border-border">
                <div className="grid sm:grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">System Uptime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">&lt;100ms</div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;