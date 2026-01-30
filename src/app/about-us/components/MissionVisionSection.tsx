'use client';

import Icon from '@/components/ui/AppIcon';

const MissionVisionSection = ({ className = '' }) => {
  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glassmorphism rounded-2xl p-8 lg:p-12 hover:border-primary/40 transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon name="RocketLaunchIcon" size={28} className="text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-heading">The Mission</h2>
              </div>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                To architect digital systems that run flawlessly without human intervention.
              </p>
            </div>
            <div className="glassmorphism rounded-2xl p-8 lg:p-12 hover:border-secondary/40 transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Icon name="EyeIcon" size={28} className="text-secondary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-heading">The Vision</h2>
              </div>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                A future where operations teams focus on Strategy and Growth, while Pilot Logic handles the Execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;