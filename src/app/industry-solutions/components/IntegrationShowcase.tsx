'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Integration {
  id: string;
  name: string;
  category: string;
  logo: string;
  alt: string;
  description: string;
}

interface IntegrationShowcaseProps {
  className?: string;
}

export default function IntegrationShowcase({ className = '' }: IntegrationShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
  { id: 'all', name: 'All Integrations', icon: 'Squares2X2Icon' },
  { id: 'crm', name: 'CRM Systems', icon: 'UserGroupIcon' },
  { id: 'erp', name: 'ERP Platforms', icon: 'CircleStackIcon' },
  { id: 'communication', name: 'Communication', icon: 'ChatBubbleLeftRightIcon' },
  { id: 'analytics', name: 'Analytics', icon: 'ChartBarIcon' }];


  const integrations: Integration[] = [
  {
    id: 'salesforce',
    name: 'Salesforce',
    category: 'crm',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1176553ef-1764664283452.png",
    alt: 'Salesforce cloud CRM platform logo with blue cloud icon',
    description: 'Seamless CRM data synchronization and workflow automation'
  },
  {
    id: 'sap',
    name: 'SAP',
    category: 'erp',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1a19b194e-1766745593296.png",
    alt: 'SAP enterprise resource planning software logo with blue geometric design',
    description: 'Enterprise resource planning integration and process automation'
  },
  {
    id: 'slack',
    name: 'Slack',
    category: 'communication',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_103aa447c-1764658017289.png",
    alt: 'Slack team communication platform logo with colorful hashtag symbol',
    description: 'Real-time notifications and team collaboration workflows'
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    category: 'crm',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1249c84ab-1764648544874.png",
    alt: 'HubSpot marketing automation platform logo with orange sprocket icon',
    description: 'Marketing automation and customer relationship management'
  },
  {
    id: 'tableau',
    name: 'Tableau',
    category: 'analytics',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_148fb42a8-1764658016859.png",
    alt: 'Tableau business intelligence software logo with blue and white design',
    description: 'Advanced data visualization and business intelligence integration'
  },
  {
    id: 'oracle',
    name: 'Oracle',
    category: 'erp',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_16342d379-1769730328648.png",
    alt: 'Oracle enterprise software logo with red geometric pattern',
    description: 'Database management and enterprise application integration'
  },
  {
    id: 'teams',
    name: 'Microsoft Teams',
    category: 'communication',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1038c6a19-1767122924243.png",
    alt: 'Microsoft Teams collaboration platform logo with purple and blue design',
    description: 'Enterprise communication and collaboration automation'
  },
  {
    id: 'powerbi',
    name: 'Power BI',
    category: 'analytics',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_13090511d-1764658017294.png",
    alt: 'Microsoft Power BI analytics platform logo with yellow chart icon',
    description: 'Business analytics and interactive data visualization'
  }];


  const filteredIntegrations = selectedCategory === 'all' ?
  integrations :
  integrations.filter((integration) => integration.category === selectedCategory);

  return (
    <section className={`py-20 px-6 lg:px-12 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">
            Seamless
            <span className="text-primary"> Integration</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with your existing tools and platforms—we build bridges, not silos.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) =>
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            selectedCategory === category.id ?
            'bg-primary text-primary-foreground shadow-interactive' :
            'bg-card text-foreground hover:bg-muted border border-border'}`
            }>

              <Icon name={category.icon as any} size={18} />
              <span>{category.name}</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredIntegrations.map((integration) =>
          <div
            key={integration.id}
            className="glassmorphism rounded-xl p-6 space-y-4 hover:shadow-card-hover transition-all duration-300 group">

              <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-card">
                <AppImage
                src={integration.logo}
                alt={integration.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />

              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{integration.name}</h3>
                <p className="text-sm text-muted-foreground">{integration.description}</p>
              </div>
              <div className="flex items-center space-x-2 text-primary text-sm font-medium">
                <span>Learn more</span>
                <Icon name="ArrowRightIcon" size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}