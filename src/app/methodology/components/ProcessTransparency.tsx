import Icon from '@/components/ui/AppIcon';

interface TransparencyItem {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface ProcessTransparencyProps {
  className?: string;
}

const ProcessTransparency = ({ className = '' }: ProcessTransparencyProps) => {
  const transparencyItems: TransparencyItem[] = [
    {
      title: 'Complete Documentation',
      description: 'Every line of code, every integration, every workflow is documented with enterprise-grade standards.',
      icon: 'DocumentTextIcon',
      features: [
        'Inline code comments and explanations',
        'Architecture decision records',
        'API documentation with examples',
        'Workflow diagrams and flowcharts'
      ]
    },
    {
      title: 'Code Transparency',
      description: 'Full access to source code with clear explanations of logic, dependencies, and implementation decisions.',
      icon: 'CodeBracketIcon',
      features: [
        'Clean, readable code structure',
        'Version control with Git',
        'Dependency documentation',
        'Security best practices applied'
      ]
    },
    {
      title: 'Progress Tracking',
      description: 'Real-time visibility into project status with weekly updates and milestone tracking.',
      icon: 'ChartBarIcon',
      features: [
        'Weekly progress reports',
        'Milestone completion tracking',
        'Issue resolution transparency',
        'Timeline adjustments communicated'
      ]
    },
    {
      title: 'Knowledge Transfer',
      description: 'Comprehensive training and handover ensuring your team can maintain and extend the systems.',
      icon: 'AcademicCapIcon',
      features: [
        'Live training sessions',
        'Video documentation library',
        'Troubleshooting guides',
        'Ongoing support protocols'
      ]
    }
  ];

  return (
    <section className={`py-20 lg:py-32 bg-gradient-to-b from-transparent to-primary/5 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Icon name="EyeIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Transparency by Default
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 font-heading">
            Complete Process Visibility
          </h2>
          <p className="text-lg text-muted-foreground">
            No black boxes. No hidden processes. Every aspect of our methodology is documented, explained, and accessible to your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {transparencyItems.map((item, index) => (
            <div 
              key={index}
              className="glassmorphism rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={item.icon as any} size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {item.features.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors duration-200"
                  >
                    <Icon 
                      name="CheckIcon" 
                      size={18} 
                      className="text-success flex-shrink-0 mt-0.5" 
                    />
                    <span className="text-sm text-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glassmorphism rounded-2xl p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Icon name="ShieldCheckIcon" size={40} className="text-primary" />
              </div>
            </div>
            <div className="flex-grow text-center lg:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2 font-heading">
                Security & Compliance Built-In
              </h3>
              <p className="text-muted-foreground">
                Every phase includes security audits, compliance checks, and data protection protocols. Your business data remains secure throughout the transformation process.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-200 flex items-center space-x-2">
                <Icon name="DocumentTextIcon" size={20} />
                <span>Security Documentation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTransparency;