import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative py-24 lg:py-32 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="relative w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <Icon name="CpuChipIcon" size={20} className="text-primary" />
                <span className="text-sm font-semibold text-primary">Technical Excellence</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Enterprise-Grade Automation Stack.
                <span className="block text-primary mt-2">Python, SQL, AI Agents.</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Enterprise-grade automation architecture that transforms manual operations into intelligent, self-sustaining systems. Our technical capabilities span the full spectrum of modern automation technology.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="/methodology"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Explore Our Method</span>
                  <Icon name="ArrowRightIcon" size={20} />
                </a>
                <a
                  href="/architecture-showcase"
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-border rounded-lg font-semibold text-foreground hover:border-primary hover:text-primary transition-all duration-200"
                >
                  <Icon name="CodeBracketIcon" size={20} />
                  <span>View Architecture</span>
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="glassmorphism rounded-2xl p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono text-muted-foreground">system_status.py</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                    <span className="text-xs text-success font-semibold">OPERATIONAL</span>
                  </div>
                </div>
                
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircleIcon" size={20} className="text-success" />
                    <span className="text-foreground">Python 3.11+ Runtime</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircleIcon" size={20} className="text-success" />
                    <span className="text-foreground">OpenAI GPT-4 Integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircleIcon" size={20} className="text-success" />
                    <span className="text-foreground">AWS Cloud Infrastructure</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircleIcon" size={20} className="text-success" />
                    <span className="text-foreground">Enterprise Security Standards</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">99.9%</div>
                      <div className="text-xs text-muted-foreground">Uptime</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">&lt;100ms</div>
                      <div className="text-xs text-muted-foreground">Response</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-xs text-muted-foreground">Monitoring</div>
                    </div>
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

export default HeroSection;