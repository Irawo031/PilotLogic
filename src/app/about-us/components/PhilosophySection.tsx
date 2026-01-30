import Icon from '@/components/ui/AppIcon';

const PhilosophySection = ({ className = '' }) => {
  const pillars = [
    { id: 'ownership', title: 'Ownership', description: 'We do not rent you software. We build assets you own.', icon: 'KeyIcon' },
    { id: 'transparency', title: 'Transparency', description: 'No black boxes. You see every line of code and logic.', icon: 'EyeIcon' },
    { id: 'security', title: 'Security', description: 'Enterprise-grade standards. Your data never leaves your control.', icon: 'ShieldCheckIcon' },
  ];

  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <Icon name="SparklesIcon" size={20} className="text-secondary" />
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Foundation</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 font-heading">Our Philosophy</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Three core principles that guide every system we build.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars?.map((pillar) => (
              <div key={pillar?.id} className="glassmorphism rounded-2xl p-8 hover:border-secondary/40 hover:shadow-card-hover transition-all duration-300 group text-center">
                <div className="mb-6 flex justify-center">
                  <div className="inline-flex p-4 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors">
                    <Icon name={pillar?.icon} size={40} className="text-secondary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">{pillar?.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{pillar?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;