'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CodeExample {
  id: string;
  title: string;
  language: string;
  description: string;
  code: string;
}

const CodeTransparencySection = () => {
  const [activeExample, setActiveExample] = useState<string>('workflow');

  const codeExamples: CodeExample[] = [
    {
      id: 'workflow',
      title: 'Workflow Automation',
      language: 'Python',
      description: 'Intelligent task orchestration with error handling',
      code: `from automation import WorkflowEngine, Task

class InvoiceProcessor(WorkflowEngine):
    def __init__(self):
        super().__init__()
        self.add_task(Task('extract_data', self.extract))
        self.add_task(Task('validate', self.validate))
        self.add_task(Task('process', self.process))
    
    async def extract(self, invoice):
        """Extract data using AI-powered OCR"""
        data = await self.ai.extract_invoice_data(invoice)
        return self.validate_extraction(data)
    
    async def validate(self, data):
        """Validate extracted data against rules"""
        rules = self.load_validation_rules()
        return await self.rule_engine.validate(data, rules)
    
    async def process(self, validated_data):
        """Process validated invoice"""
        result = await self.erp.create_invoice(validated_data)
        await self.notify_stakeholders(result)
        return result`
    },
    {
      id: 'integration',
      title: 'API Integration',
      language: 'Python',
      description: 'Secure external system connectivity',
      code: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import asyncio

app = FastAPI()

class IntegrationRequest(BaseModel):
    system: str
    action: str
    data: dict

@app.post("/api/integrate")
async def integrate_system(request: IntegrationRequest):
    """Handle external system integration"""
    try:
        connector = SystemConnector(request.system)
        await connector.authenticate()
        
        result = await connector.execute(
            action=request.action,
            data=request.data
        )
        
        await log_integration(request.system, result)
        return {"status": "success", "data": result}
        
    except Exception as e:
        await handle_integration_error(e)
        raise HTTPException(status_code=500, detail=str(e))`
    },
    {
      id: 'monitoring',
      title: 'System Monitoring',
      language: 'Python',
      description: 'Real-time health checks and alerting',
      code: `import asyncio
from monitoring import MetricsCollector, AlertManager

class SystemMonitor:
    def __init__(self):
        self.metrics = MetricsCollector()
        self.alerts = AlertManager()
    
    async def monitor_health(self):
        """Continuous system health monitoring"""
        while True:
            health_data = await self.collect_metrics()
            
            if health_data['cpu_usage'] > 80:
                await self.alerts.send(
                    level='warning',
                    message='High CPU usage detected'
                )
            
            if health_data['error_rate'] > 0.01:
                await self.alerts.send(
                    level='critical',
                    message='Error rate threshold exceeded'
                )
            
            await asyncio.sleep(60)
    
    async def collect_metrics(self):
        return await self.metrics.gather_all()`
    }
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <Icon name="CodeBracketIcon" size={20} className="text-accent" />
              <span className="text-sm font-semibold text-accent">Code Transparency</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              See How We Build
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in transparency by default. Explore real examples of our automation code to understand our engineering approach and quality standards.
            </p>
          </div>

          <div className="glassmorphism rounded-2xl overflow-hidden">
            <div className="flex border-b border-border overflow-x-auto">
              {codeExamples.map((example) => (
                <button
                  key={example.id}
                  onClick={() => setActiveExample(example.id)}
                  className={`flex-shrink-0 px-6 py-4 text-sm font-semibold transition-all duration-200 ${
                    activeExample === example.id
                      ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                  }`}
                >
                  {example.title}
                </button>
              ))}
            </div>

            {codeExamples.map((example) => (
              <div
                key={example.id}
                className={`transition-all duration-300 ${
                  activeExample === example.id ? 'block' : 'hidden'
                }`}
              >
                <div className="p-6 border-b border-border">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{example.title}</h3>
                      <p className="text-sm text-muted-foreground">{example.description}</p>
                    </div>
                    <div className="flex items-center space-x-2 px-3 py-1 bg-muted/50 rounded-lg">
                      <Icon name="CommandLineIcon" size={16} className="text-primary" />
                      <span className="text-xs font-mono text-foreground">{example.language}</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <pre className="p-6 overflow-x-auto">
                    <code className="text-sm font-mono text-foreground leading-relaxed">
                      {example.code}
                    </code>
                  </pre>
                  <button className="absolute top-4 right-4 p-2 bg-muted/80 hover:bg-muted rounded-lg transition-colors duration-200">
                    <Icon name="ClipboardDocumentIcon" size={20} className="text-foreground" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/architecture-showcase"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Explore Full Architecture</span>
              <Icon name="ArrowRightIcon" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeTransparencySection;