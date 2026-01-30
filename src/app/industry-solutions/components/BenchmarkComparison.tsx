import Icon from '@/components/ui/AppIcon';

interface BenchmarkComparisonProps {
  className?: string;
}

export default function BenchmarkComparison({ className = '' }: BenchmarkComparisonProps) {
  const benchmarks = [
    {
      metric: 'Processing Time',
      industry: '4-6 hours',
      withPilot: '15 minutes',
      improvement: '90% faster',
      icon: 'ClockIcon',
    },
    {
      metric: 'Error Rate',
      industry: '5-8%',
      withPilot: '0%',
      improvement: '100% accuracy',
      icon: 'CheckBadgeIcon',
    },
    {
      metric: 'Annual Cost',
      industry: '$180k',
      withPilot: '$60k',
      improvement: '$120k saved',
      icon: 'CurrencyDollarIcon',
    },
    {
      metric: 'Team Hours',
      industry: '2,080 hrs/year',
      withPilot: '208 hrs/year',
      improvement: '90% reduction',
      icon: 'UsersIcon',
    },
  ];

  return (
    <section className={`py-20 px-6 lg:px-12 bg-card/50 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">
            Industry Benchmark
            <span className="text-primary"> Comparison</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how Pilot Logic Systems stacks up against traditional manual operations across key performance indicators.
          </p>
        </div>

        <div className="glassmorphism rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border">
            <div className="p-6 bg-muted/20">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Metric
              </div>
              {benchmarks.map((benchmark) => (
                <div
                  key={benchmark.metric}
                  className="flex items-center space-x-3 py-4 border-b border-border last:border-0"
                >
                  <Icon name={benchmark.icon as any} size={20} className="text-primary" />
                  <span className="font-medium text-foreground">{benchmark.metric}</span>
                </div>
              ))}
            </div>

            <div className="p-6">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Industry Average
              </div>
              {benchmarks.map((benchmark) => (
                <div
                  key={benchmark.metric}
                  className="py-4 border-b border-border last:border-0"
                >
                  <span className="text-lg font-semibold text-destructive">
                    {benchmark.industry}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-primary/5">
              <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                With Pilot Logic
              </div>
              {benchmarks.map((benchmark) => (
                <div
                  key={benchmark.metric}
                  className="py-4 border-b border-primary/20 last:border-0"
                >
                  <span className="text-lg font-semibold text-primary">
                    {benchmark.withPilot}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-6">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Improvement
              </div>
              {benchmarks.map((benchmark) => (
                <div
                  key={benchmark.metric}
                  className="py-4 border-b border-border last:border-0"
                >
                  <div className="flex items-center space-x-2">
                    <Icon name="ArrowTrendingUpIcon" size={16} className="text-success" />
                    <span className="text-lg font-semibold text-success">
                      {benchmark.improvement}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}