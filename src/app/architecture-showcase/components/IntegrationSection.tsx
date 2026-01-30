'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Integration {
  name: string;
  category: string;
  icon: string;
  description: string;
}

export default function IntegrationSection() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const integrations: Integration[] = [
    {
      name: 'Salesforce',
      category: 'CRM',
      icon: 'UserGroupIcon',
      description: 'Automated lead management and customer data synchronization'
    },
    {
      name: 'Slack',
      category: 'Communication',
      icon: 'ChatBubbleLeftRightIcon',
      description: 'Real-time notifications and team collaboration workflows'
    },
    {
      name: 'Google Workspace',
      category: 'Productivity',
      icon: 'DocumentTextIcon',
      description: 'Document processing and calendar automation'
    },
    {
      name: 'Stripe',
      category: 'Payments',
      icon: 'CreditCardIcon',
      description: 'Payment processing and subscription management'
    },
    {
      name: 'HubSpot',
      category: 'Marketing',
      icon: 'MegaphoneIcon',
      description: 'Marketing automation and lead nurturing'
    },
    {
      name: 'Zendesk',
      category: 'Support',
      icon: 'LifebuoyIcon',
      description: 'Customer support ticket automation'
    },
    {
      name: 'QuickBooks',
      category: 'Accounting',
      icon: 'CalculatorIcon',
      description: 'Financial data synchronization and reporting'
    },
    {
      name: 'Jira',
      category: 'Project Management',
      icon: 'ClipboardDocumentListIcon',
      description: 'Task automation and project tracking'
    }
  ];

  if (!isHydrated) {
    return (
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-muted/50 rounded-full mb-4">
              <Icon name="PuzzlePieceIcon" size={20} className="text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Integrations</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
              Seamless <span className="text-primary">Integrations</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with your existing tools and platforms
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="glassmorphism rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={integration.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1 font-heading">{integration.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{integration.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glassmorphism rounded-full mb-4">
            <Icon name="PuzzlePieceIcon" size={20} className="text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Integrations</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
            Seamless <span className="text-primary">Integrations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with your existing tools and platforms for unified automation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="glassmorphism rounded-xl p-6 text-center hover:shadow-card-hover transition-all duration-300 group cursor-pointer"
            >
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name={integration.icon as any} size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1 font-heading">{integration.name}</h3>
              <p className="text-xs text-muted-foreground mb-2">{integration.category}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{integration.description}</p>
            </div>
          ))}
        </div>

        <div className="glassmorphism rounded-xl p-8 text-center">
          <Icon name="LinkIcon" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-3 font-heading">Custom Integration Support</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Need to connect with a platform not listed? We build custom integrations tailored to your specific requirements using REST APIs, webhooks, and enterprise connectors.
          </p>
          <a
            href="mailto:chris@pilotlogicsystems.com"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-interactive hover:-translate-y-0.5 transition-all duration-200"
          >
            <Icon name="EnvelopeIcon" size={20} />
            <span>Request Custom Integration</span>
          </a>
        </div>
      </div>
    </section>
  );
}