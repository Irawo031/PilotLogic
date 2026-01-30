import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-20 ${className}`}>
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="glassmorphism rounded-3xl p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Icon name="RocketLaunchIcon" size={32} className="text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
              Ready to Achieve Similar Results?
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let&apos;s analyze your current operations and design an automation infrastructure that delivers measurable business transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/pilotlogicsystems/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg text-base font-bold hover:shadow-interactive hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Book System Audit</span>
                <Icon name="ArrowRightIcon" size={20} />
              </a>
              
              <Link
                href="/architecture-showcase"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-muted text-foreground rounded-lg text-base font-semibold hover:bg-muted/80 transition-all duration-200"
              >
                <span>View Architecture</span>
                <Icon name="CubeIcon" size={20} />
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-6 mt-8 pt-8 border-t border-border">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="ShieldCheckIcon" size={20} className="text-success" />
                <span className="text-sm">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="ClockIcon" size={20} className="text-primary" />
                <span className="text-sm">15-Min Consultation</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="DocumentCheckIcon" size={20} className="text-secondary" />
                <span className="text-sm">No Commitment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;