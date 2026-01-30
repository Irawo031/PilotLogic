interface MetricCardProps {
  value: string;
  label: string;
  description: string;
  icon: string;
}

const MetricCard = ({ value, label, description, icon }: MetricCardProps) => {
  return (
    <div className="glassmorphism rounded-2xl p-8 hover:shadow-card-hover transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
          </svg>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="text-5xl font-bold text-primary font-heading">{value}</div>
        <div className="text-xl font-semibold text-foreground">{label}</div>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

interface MetricsOverviewProps {
  className?: string;
}

const MetricsOverview = ({ className = '' }: MetricsOverviewProps) => {
  const metrics: MetricCardProps[] = [
    {
      value: "90%",
      label: "Processing Time Reduction",
      description: "Average reduction in manual processing time across all implementations",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      value: "$120K",
      label: "Annual Cost Savings",
      description: "Average yearly savings per client through automation infrastructure",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      value: "0%",
      label: "Error Rate",
      description: "Zero errors in automated processes with built-in validation and monitoring",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      value: "24/7",
      label: "Autonomous Operation",
      description: "Continuous operation without human intervention or supervision required",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  ];

  return (
    <section className={`py-20 ${className}`}>
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
              Results That Matter
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every metric represents real business transformation through intelligent automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsOverview;