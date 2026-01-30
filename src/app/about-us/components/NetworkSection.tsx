import Icon from '@/components/ui/AppIcon';

const NetworkSection = ({ className = '' }) => {
  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <Icon name="GlobeAltIcon" size={20} className="text-secondary" />
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Global Reach</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 font-heading">Backed by a Global Network.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We collaborate with specialized engineers globally to execute large-scale projects with precision and expertise.
            </p>
          </div>
          <div className="glassmorphism rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-secondary rounded-full blur-2xl" />
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary rounded-full blur-2xl" />
            </div>
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="UsersIcon" size={32} className="text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Expert Engineers</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Icon name="GlobeAltIcon" size={32} className="text-secondary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="CodeBracketIcon" size={32} className="text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Icon name="ClockIcon" size={32} className="text-secondary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;