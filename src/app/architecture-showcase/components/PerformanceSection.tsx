import Icon from '@/components/ui/AppIcon';

interface PerformanceMetric {
  label: string;
  value: string;
  description: string;
  icon: string;
  color: string;
}

export default function PerformanceSection() {
  const performanceMetrics: PerformanceMetric[] = [
    {
      label: 'Response Time',
      value: '<100ms',
      description: 'Average API response time under load',
      icon: 'BoltIcon',
      color: 'text-yellow-400'
    },
    {
      label: 'Throughput',
      value: '10K/sec',
      description: 'Requests processed per second',
      icon: 'ArrowTrendingUpIcon',
      color: 'text-green-400'
    },
    {
      label: 'Uptime',
      value: '99.99%',
      description: 'System availability guarantee',
      icon: 'CheckCircleIcon',
      color: 'text-emerald-400'
    },
    {
      label: 'Scalability',
      value: 'Auto',
      description: 'Automatic horizontal scaling',
      icon: 'ArrowsPointingOutIcon',
      color: 'text-blue-400'
    },
    {
      label: 'Error Rate',
      value: '<0.01%',
      description: 'System error percentage',
      icon: 'ShieldCheckIcon',
      color: 'text-cyan-400'
    },
    {
      label: 'Recovery Time',
      value: '<5min',
      description: 'Disaster recovery objective',
      icon: 'ArrowPathIcon',
      color: 'text-purple-400'
    }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-muted/50 rounded-full mb-4">
            <Icon name="ChartBarIcon" size={20} className="text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Performance Metrics</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
            Built for <span className="text-primary">Performance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade performance metrics that ensure reliability at scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {performanceMetrics.map((metric, index) => (
            <div
              key={index}
              className="glassmorphism rounded-xl p-8 hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 bg-muted rounded-lg ${metric.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={metric.icon as any} size={28} />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-foreground font-heading">{metric.value}</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-heading">{metric.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="glassmorphism rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-3 font-heading">Load Testing Results</h3>
            <p className="text-muted-foreground">Stress-tested under real-world conditions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 font-heading">1M+</div>
              <p className="text-sm text-muted-foreground">Daily Transactions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 font-heading">50TB</div>
              <p className="text-sm text-muted-foreground">Data Processed Monthly</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 font-heading">100+</div>
              <p className="text-sm text-muted-foreground">Concurrent Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 font-heading">24/7</div>
              <p className="text-sm text-muted-foreground">Monitoring & Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}