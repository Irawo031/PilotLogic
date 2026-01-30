'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CodeTransparencyProps {
  className?: string;
}

const CodeTransparency = ({ className = '' }: CodeTransparencyProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const codeExamples = [
    {
      title: 'Python Automation',
      language: 'Python',
      icon: 'CodeBracketIcon',
      code: `# Intelligent document processor
class DocumentProcessor:
    def __init__(self, ai_model):
        self.model = ai_model
        self.accuracy = 0.999
    
    def process(self, document):
        # Extract structured data
        data = self.model.extract(document)
        # Validate and enrich
        validated = self.validate(data)
        return self.enrich(validated)`,
    },
    {
      title: 'API Integration',
      language: 'TypeScript',
      icon: 'ServerIcon',
      code: `// Seamless system integration
interface SystemConnector {
  source: DataSource;
  destination: DataTarget;
  transform: TransformPipeline;
}

async function syncData(connector: SystemConnector) {
  const data = await connector.source.fetch();
  const transformed = connector.transform(data);
  return connector.destination.save(transformed);
}`,
    },
    {
      title: 'Workflow Engine',
      language: 'Python',
      icon: 'CogIcon',
      code: `# Self-healing workflow orchestration
class WorkflowEngine:
    def execute(self, workflow):
        for step in workflow.steps:
            try:
                result = step.run()
                self.log_success(step, result)
            except Exception as e:
                self.handle_error(step, e)
                self.retry_with_fallback(step)`,
    },
  ];

  const techStack = [
    { name: 'Python', icon: 'CodeBracketIcon', color: 'text-primary' },
    { name: 'OpenAI', icon: 'SparklesIcon', color: 'text-secondary' },
    { name: 'AWS', icon: 'CloudIcon', color: 'text-warning' },
    { name: 'PostgreSQL', icon: 'CircleStackIcon', color: 'text-success' },
  ];

  return (
    <section className={`py-20 ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Transparency by Default
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-4">
            Code You Can Trust
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe in complete transparency. See the quality of code that powers your automation infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="glassmorphism rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center space-x-2">
                  {codeExamples.map((example, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeTab === index
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      {example.title}
                    </button>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-muted-foreground">{codeExamples[activeTab].language}</span>
                  <Icon name="DocumentDuplicateIcon" size={16} className="text-muted-foreground" />
                </div>
              </div>

              <div className="p-6 bg-card/50">
                <pre className="text-sm text-foreground font-mono leading-relaxed overflow-x-auto">
                  <code>{codeExamples[activeTab].code}</code>
                </pre>
              </div>

              <div className="p-4 border-t border-border flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircleIcon" size={16} className="text-success" />
                  <span className="text-sm text-muted-foreground">Production-ready code</span>
                </div>
                <a
                  href="/architecture-showcase"
                  className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  View Full Architecture →
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Enterprise Tech Stack</h3>
              <div className="space-y-3">
                {techStack.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                    <Icon name={tech.icon as any} size={20} className={tech.color} />
                    <span className="text-sm font-medium text-foreground">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glassmorphism rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <Icon name="ShieldCheckIcon" size={24} className="text-success flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Security First</h4>
                  <p className="text-sm text-muted-foreground">
                    SOC 2 compliant infrastructure with enterprise-grade security standards
                  </p>
                </div>
              </div>
            </div>

            <div className="glassmorphism rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <Icon name="DocumentTextIcon" size={24} className="text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Full Documentation</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete handover with detailed documentation and training
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeTransparency;