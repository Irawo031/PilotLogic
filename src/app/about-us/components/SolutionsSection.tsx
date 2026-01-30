import Icon from '@/components/ui/AppIcon';

const SolutionsSection = ({ className = '' }) => {
  const solutions = [
    { id: 'architecture', title: 'System Architecture', description: 'Designing the logic blueprint for your operations.', icon: 'CubeIcon' },
    { id: 'development', title: 'Custom Development', description: 'Python & API coding for bespoke needs.', icon: 'CodeBracketIcon' },
    { id: 'automation', title: 'Process Automation', description: 'Eliminating manual data entry & repetitive tasks.', icon: 'BoltIcon' },
    { id: 'synchronization', title: 'Data Synchronization', description: 'Unifying your siloed software tools.', icon: 'ArrowPathIcon' },
  ];

  return (
    <section className={`py-20 lg:py-32 bg-muted/20 ${className}`}>
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Icon name="WrenchScrewdriverIcon" size={20} className="text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">What We Deliver</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 font-heading">Core Capabilities.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions?.map((solution) => (
              <div key={solution?.id} className="glassmorphism rounded-xl p-6 hover:border-primary/40 hover:shadow-card-hover transition-all duration-300 group">
                <div className="mb-4">
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon name={solution?.icon} size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-heading">{solution?.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{solution?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;