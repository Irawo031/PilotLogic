import Icon from '@/components/ui/AppIcon';


export default function CTASection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="glassmorphism rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-muted/50 rounded-full mb-6">
              <Icon name="RocketLaunchIcon" size={20} className="text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Ready to Transform?</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-heading">
              Let's Build Your <span className="text-primary">Operating System</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              See how our architecture can transform your business operations. Book a free system audit to discover automation opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/pilotlogicsystems/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:shadow-interactive hover:-translate-y-0.5 transition-all duration-200"
              >
                <Icon name="CalendarIcon" size={20} />
                <span>Book System Audit</span>
              </a>
              <a
                href="mailto:chris@pilotlogicsystems.com"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Icon name="EnvelopeIcon" size={20} />
                <span>Contact Us</span>
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircleIcon" size={20} className="text-success" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="ClockIcon" size={20} className="text-success" />
                <span>15-Minute Audit</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="ShieldCheckIcon" size={20} className="text-success" />
                <span>No Commitment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}