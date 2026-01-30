import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

export default function CTASection({ className = '' }: CTASectionProps) {
  return (
    <section className={`py-20 px-6 lg:px-12 ${className}`}>
      <div className="max-w-5xl mx-auto">
        <div className="glassmorphism rounded-2xl p-8 lg:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Ready to Transform
              <span className="text-primary"> Your Operations?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Book a 15-minute system audit and discover how we can build the operating system for your business—regardless of your industry.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://calendly.com/pilotlogicsystems/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-bold hover:shadow-interactive hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Book System Audit</span>
                <Icon name="ArrowRightIcon" size={20} />
              </a>
              
              <Link
                href="/architecture-showcase"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-card text-foreground border border-border rounded-lg text-lg font-semibold hover:bg-muted transition-all duration-200"
              >
                <span>View Architecture</span>
                <Icon name="CubeIcon" size={20} />
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircleIcon" size={18} className="text-success" />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="ClockIcon" size={18} className="text-success" />
                <span>15-minute consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="ShieldCheckIcon" size={18} className="text-success" />
                <span>Enterprise-grade security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}