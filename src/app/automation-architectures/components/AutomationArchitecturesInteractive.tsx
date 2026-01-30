'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface WorkflowStep {
  id: string;
  label: string;
  icon: string;
  description: string;
}

interface WorkflowArchitecture {
  id: string;
  sector: string;
  title: string;
  description: string;
  steps: WorkflowStep[];
  outcomes: string[];
}

const AutomationArchitecturesInteractive = () => {
  const [selectedSector, setSelectedSector] = useState('finance');

  const architectures: WorkflowArchitecture[] = [
    {
      id: 'finance',
      sector: 'Finance',
      title: 'Financial Reconciliation Automation',
      description: 'Automated transaction matching and reconciliation workflow that processes thousands of transactions with zero manual intervention.',
      steps: [
        {
          id: 'input',
          label: 'Input',
          icon: 'DocumentTextIcon',
          description: 'Bank statements, invoices, and transaction data from multiple sources'
        },
        {
          id: 'extraction',
          label: 'Data Extraction',
          icon: 'CircleStackIcon',
          description: 'AI-powered extraction of transaction details, amounts, dates, and references'
        },
        {
          id: 'matching',
          label: 'Intelligent Matching',
          icon: 'MagnifyingGlassIcon',
          description: 'Machine learning algorithms match transactions across systems'
        },
        {
          id: 'validation',
          label: 'Validation',
          icon: 'ShieldCheckIcon',
          description: 'Automated validation rules check for discrepancies and anomalies'
        },
        {
          id: 'database',
          label: 'Database Update',
          icon: 'ServerIcon',
          description: 'Reconciled data written to accounting system with audit trail'
        },
        {
          id: 'notification',
          label: 'Notification',
          icon: 'BellAlertIcon',
          description: 'Slack alerts for exceptions, summary reports via email'
        }
      ],
      outcomes: [
        '96% reduction in reconciliation time',
        '99.9% matching accuracy',
        'Real-time exception handling',
        'Complete audit trail for compliance'
      ]
    },
    {
      id: 'logistics',
      sector: 'Logistics',
      title: 'Fleet Dispatch & Route Optimization',
      description: 'Intelligent dispatch system that optimizes routes in real-time based on traffic, weather, and delivery priorities.',
      steps: [
        {
          id: 'input',
          label: 'Input',
          icon: 'TruckIcon',
          description: 'Delivery orders, vehicle availability, driver schedules'
        },
        {
          id: 'optimization',
          label: 'Route Optimization',
          icon: 'MapIcon',
          description: 'AI algorithms calculate optimal routes considering traffic and constraints'
        },
        {
          id: 'assignment',
          label: 'Driver Assignment',
          icon: 'UserGroupIcon',
          description: 'Automated assignment based on location, capacity, and hours'
        },
        {
          id: 'dispatch',
          label: 'Dispatch',
          icon: 'PaperAirplaneIcon',
          description: 'Routes sent to driver mobile apps with turn-by-turn navigation'
        },
        {
          id: 'tracking',
          label: 'Real-time Tracking',
          icon: 'MapPinIcon',
          description: 'GPS tracking with automatic ETA updates and exception alerts'
        },
        {
          id: 'notification',
          label: 'Customer Updates',
          icon: 'ChatBubbleLeftRightIcon',
          description: 'Automated SMS/email notifications with delivery status'
        }
      ],
      outcomes: [
        '28% improvement in route efficiency',
        '97% on-time delivery rate',
        '$340K annual fuel savings',
        'Real-time customer visibility'
      ]
    },
    {
      id: 'sales',
      sector: 'Sales',
      title: 'Lead Qualification & Nurturing Pipeline',
      description: 'Automated lead scoring and nurturing system that identifies high-value prospects and engages them with personalized content.',
      steps: [
        {
          id: 'input',
          label: 'Input',
          icon: 'UserPlusIcon',
          description: 'Lead forms, website behavior, email engagement data'
        },
        {
          id: 'scoring',
          label: 'AI Scoring',
          icon: 'ChartBarIcon',
          description: 'Machine learning model scores leads based on conversion probability'
        },
        {
          id: 'segmentation',
          label: 'Segmentation',
          icon: 'FunnelIcon',
          description: 'Automatic segmentation into hot, warm, cold categories'
        },
        {
          id: 'enrichment',
          label: 'Data Enrichment',
          icon: 'SparklesIcon',
          description: 'Automated lookup of company data, social profiles, and firmographics'
        },
        {
          id: 'nurturing',
          label: 'Automated Nurturing',
          icon: 'EnvelopeIcon',
          description: 'Personalized email sequences based on behavior and segment'
        },
        {
          id: 'assignment',
          label: 'Sales Assignment',
          icon: 'UserCircleIcon',
          description: 'Hot leads automatically assigned to sales reps with Slack notification'
        }
      ],
      outcomes: [
        '3x increase in qualified leads',
        '45% higher conversion rate',
        '80% reduction in manual qualification',
        'Instant lead response time'
      ]
    },
    {
      id: 'healthcare',
      sector: 'Healthcare',
      title: 'Patient Intake & Insurance Verification',
      description: 'Streamlined patient onboarding with automated insurance verification and eligibility checking.',
      steps: [
        {
          id: 'input',
          label: 'Input',
          icon: 'ClipboardDocumentListIcon',
          description: 'Digital intake forms submitted via patient portal'
        },
        {
          id: 'extraction',
          label: 'Data Extraction',
          icon: 'DocumentMagnifyingGlassIcon',
          description: 'AI extracts patient information and insurance details'
        },
        {
          id: 'verification',
          label: 'Insurance Verification',
          icon: 'ShieldCheckIcon',
          description: 'Real-time API calls to insurance providers for eligibility'
        },
        {
          id: 'validation',
          label: 'Validation',
          icon: 'CheckCircleIcon',
          description: 'Automated validation of required fields and document completeness'
        },
        {
          id: 'ehr',
          label: 'EHR Integration',
          icon: 'CircleStackIcon',
          description: 'Patient data automatically written to electronic health records'
        },
        {
          id: 'notification',
          label: 'Confirmation',
          icon: 'DevicePhoneMobileIcon',
          description: 'SMS confirmation to patient with appointment details'
        }
      ],
      outcomes: [
        '87% reduction in intake time',
        '100% insurance verification accuracy',
        '65% decrease in no-show rates',
        'Enhanced patient experience'
      ]
    },
    {
      id: 'ecommerce',
      sector: 'E-commerce',
      title: 'Order Fulfillment & Inventory Sync',
      description: 'Multi-channel order processing with real-time inventory synchronization across all sales platforms.',
      steps: [
        {
          id: 'input',
          label: 'Input',
          icon: 'ShoppingCartIcon',
          description: 'Orders from website, Amazon, eBay, and retail stores'
        },
        {
          id: 'aggregation',
          label: 'Order Aggregation',
          icon: 'RectangleStackIcon',
          description: 'All orders consolidated into unified fulfillment queue'
        },
        {
          id: 'inventory',
          label: 'Inventory Check',
          icon: 'CubeIcon',
          description: 'Real-time inventory verification across all warehouses'
        },
        {
          id: 'routing',
          label: 'Smart Routing',
          icon: 'ArrowPathIcon',
          description: 'Orders routed to optimal warehouse based on location and stock'
        },
        {
          id: 'fulfillment',
          label: 'Fulfillment',
          icon: 'TruckIcon',
          description: 'Pick, pack, and ship instructions sent to warehouse system'
        },
        {
          id: 'sync',
          label: 'Multi-Channel Sync',
          icon: 'ArrowsRightLeftIcon',
          description: 'Inventory levels updated across all platforms in real-time'
        }
      ],
      outcomes: [
        'Same-day fulfillment capability',
        'Zero overselling incidents',
        '94% customer satisfaction',
        '$320K annual cost savings'
      ]
    },
    {
      id: 'legal',
      sector: 'Legal',
      title: 'Contract Generation & Review Pipeline',
      description: 'Automated contract drafting and AI-powered review system that accelerates legal document processing.',
      steps: [
        {
          id: 'input',
          label: 'Input',
          icon: 'DocumentTextIcon',
          description: 'Contract request form with client details and requirements'
        },
        {
          id: 'generation',
          label: 'Auto-Generation',
          icon: 'SparklesIcon',
          description: 'AI assembles contract from clause library based on requirements'
        },
        {
          id: 'review',
          label: 'AI Review',
          icon: 'MagnifyingGlassIcon',
          description: 'Machine learning identifies potential issues and missing clauses'
        },
        {
          id: 'approval',
          label: 'Approval Workflow',
          icon: 'CheckBadgeIcon',
          description: 'Automated routing to appropriate attorneys for review'
        },
        {
          id: 'execution',
          label: 'E-Signature',
          icon: 'PencilSquareIcon',
          description: 'Digital signature workflow with automatic reminders'
        },
        {
          id: 'storage',
          label: 'Document Management',
          icon: 'FolderIcon',
          description: 'Executed contracts stored with metadata and version control'
        }
      ],
      outcomes: [
        '82% faster contract generation',
        '+$450K billable hours recovered',
        '99.5% accuracy rate',
        'Complete audit trail'
      ]
    }
  ];

  const selectedArchitecture = architectures.find(arch => arch.id === selectedSector) || architectures[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        <div className="relative w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Icon name="CubeTransparentIcon" size={20} className="text-primary" />
              <span className="text-sm font-semibold text-primary">Automation Workflows</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Automation Workflow Library
              <span className="block text-primary mt-2">Visual Diagrams & Templates</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Browse our library of automation schematics. See visual examples of Order-to-Cash, Procure-to-Pay, and Lead-to-Close workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Sector Selection */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {architectures.map((arch) => (
              <button
                key={arch.id}
                onClick={() => setSelectedSector(arch.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedSector === arch.id
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-card border border-border text-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {arch.sector}
              </button>
            ))}
          </div>

          {/* Selected Architecture */}
          <div className="glassmorphism rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {selectedArchitecture.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {selectedArchitecture.description}
              </p>
            </div>

            {/* Workflow Diagram */}
            <div className="space-y-8">
              {selectedArchitecture.steps.map((step, index) => (
                <div key={step.id}>
                  <div className="flex items-start gap-6">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-xl bg-primary/10 border-2 border-primary flex items-center justify-center">
                          <Icon name={step.icon as any} size={28} className="text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                          {index + 1}
                        </div>
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{step.label}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Arrow Connector */}
                  {index < selectedArchitecture.steps.length - 1 && (
                    <div className="flex justify-center my-4">
                      <Icon name="ArrowDownIcon" size={24} className="text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Outcomes */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Measurable Outcomes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedArchitecture.outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-lg bg-success/10 border border-success/20"
                  >
                    <Icon name="CheckCircleIcon" size={24} className="text-success flex-shrink-0" />
                    <span className="text-foreground font-medium">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glassmorphism rounded-2xl p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Build Your Custom Architecture?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a system audit to discover how intelligent automation can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/pilotlogicsystems/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-bold hover:shadow-interactive hover:-translate-y-0.5 transition-all duration-200"
              >
                <Icon name="CalendarIcon" size={20} />
                <span>Book System Audit</span>
              </a>
              <a
                href="mailto:chris@pilotlogicsystems.com"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-primary text-primary rounded-lg text-lg font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Icon name="EnvelopeIcon" size={20} />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomationArchitecturesInteractive;