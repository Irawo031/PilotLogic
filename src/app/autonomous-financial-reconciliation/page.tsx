import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import BackToTop from '@/components/common/BackToTop';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Autonomous Financial Reconciliation - Financial Ops Automation | PilotLogicSystems',
  description: 'Close your books in minutes, not days. Automate invoice matching for Fintech, Construction, and E-commerce. Sync Stripe, Bank Feeds, and QuickBooks without human intervention.',
};

export default function FinancialOpsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-primary/5" />
          
          <div className="relative w-full px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                    <Icon name="BanknotesIcon" size={20} className="text-green-500" />
                    <span className="text-sm font-semibold text-green-500">Financial Ops Automation</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    Autonomous Financial Reconciliation.
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Close your books in minutes, not days. We automate invoice matching for Fintech, Construction, and E-commerce. Sync Stripe, Bank Feeds, and QuickBooks without human intervention.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://calendly.com/pilotlogicsystems/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <Icon name="CalendarIcon" size={20} />
                      <span>Book System Audit</span>
                    </a>
                    <a
                      href="#integrations"
                      className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-border rounded-lg font-semibold text-foreground hover:border-primary hover:text-primary transition-all duration-200"
                    >
                      <Icon name="LinkIcon" size={20} />
                      <span>View Integrations</span>
                    </a>
                  </div>
                </div>
                
                {/* Visual: Flow Chart */}
                <div className="relative">
                  <div className="glassmorphism rounded-2xl p-8 space-y-6">
                    <div className="text-center mb-6">
                      <div className="text-sm font-mono text-muted-foreground">Reconciliation Flow</div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 text-center">
                          <Icon name="CreditCardIcon" size={24} className="text-blue-500 mx-auto mb-2" />
                          <div className="text-sm font-semibold text-foreground">Transaction</div>
                        </div>
                        <Icon name="ArrowRightIcon" size={20} className="text-muted-foreground" />
                        <div className="flex-1 bg-purple-500/20 border border-purple-500/30 rounded-lg p-4 text-center">
                          <Icon name="CpuChipIcon" size={24} className="text-purple-500 mx-auto mb-2" />
                          <div className="text-sm font-semibold text-foreground">Match Logic</div>
                        </div>
                      </div>
                      
                      <div className="flex justify-center">
                        <Icon name="ArrowDownIcon" size={20} className="text-muted-foreground" />
                      </div>
                      
                      <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center">
                        <Icon name="CheckCircleIcon" size={24} className="text-green-500 mx-auto mb-2" />
                        <div className="text-sm font-semibold text-foreground">Auto-Approval</div>
                        <div className="text-xs text-muted-foreground mt-1">Books closed in &lt;5 minutes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry-Specific Features */}
        <section className="py-24 lg:py-32">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Industry-Specific Features
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Tailored automation for your financial operations
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: 'BuildingLibraryIcon',
                    title: 'Fintech',
                    features: ['Subscription billing automation', 'Payment gateway reconciliation', 'Multi-currency processing', 'Regulatory reporting'],
                  },
                  {
                    icon: 'ShoppingCartIcon',
                    title: 'E-commerce',
                    features: ['Order-to-cash automation', 'Marketplace reconciliation', 'Refund processing', 'Sales tax calculation'],
                  },
                  {
                    icon: 'WrenchScrewdriverIcon',
                    title: 'Construction',
                    features: ['Project cost tracking', 'Vendor invoice matching', 'Progress billing', 'Change order management'],
                  },
                ].map((industry, index) => (
                  <div key={index} className="glassmorphism rounded-xl p-6 hover:shadow-card-hover transition-all duration-300">
                    <Icon name={industry.icon as any} size={40} className="text-primary mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-4">{industry.title}</h3>
                    <ul className="space-y-2">
                      {industry.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-muted-foreground">
                          <Icon name="CheckCircleIcon" size={16} className="text-success mt-1 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Integrations */}
        <section id="integrations" className="py-24 lg:py-32 bg-muted/30">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Seamless Integrations
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Connect with your existing financial systems via API
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'QuickBooks', category: 'Accounting' },
                  { name: 'Stripe', category: 'Payments' },
                  { name: 'PayPal', category: 'Payments' },
                  { name: 'Xero', category: 'Accounting' },
                  { name: 'Bank Feeds', category: 'Banking' },
                  { name: 'NetSuite', category: 'ERP' },
                  { name: 'Sage', category: 'Accounting' },
                  { name: 'Square', category: 'Payments' },
                ].map((integration, index) => (
                  <div key={index} className="glassmorphism rounded-xl p-6 text-center hover:shadow-card-hover transition-all duration-300">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="LinkIcon" size={32} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{integration.name}</h3>
                    <p className="text-xs text-muted-foreground">{integration.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Financial Accuracy Metrics */}
        <section className="py-24 lg:py-32">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="glassmorphism rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
                  Financial Accuracy Metrics
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { label: 'Reconciliation Accuracy', value: '100%' },
                    { label: 'Close Process Time', value: 'Same-Day' },
                    { label: 'Audit Trail', value: 'Automated' },
                  ].map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-5xl font-bold text-green-500 mb-2">{metric.value}</div>
                      <div className="text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Framework */}
        <section className="py-24 lg:py-32 bg-muted/30">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Compliance & Security
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Built to meet financial industry standards
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { standard: 'SOX', description: 'Sarbanes-Oxley compliance', icon: 'DocumentCheckIcon' },
                  { standard: 'PCI-DSS', description: 'Payment card security', icon: 'ShieldCheckIcon' },
                  { standard: 'SOC 2', description: 'Security certifications', icon: 'LockClosedIcon' },
                ].map((item, index) => (
                  <div key={index} className="glassmorphism rounded-xl p-6 text-center">
                    <Icon name={item.icon as any} size={48} className="text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">{item.standard}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Risk Management */}
        <section className="py-24 lg:py-32">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Risk Management
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Advanced fraud detection and anomaly identification
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Fraud Detection',
                    description: 'AI-powered pattern recognition identifies suspicious transactions in real-time',
                    icon: 'ExclamationTriangleIcon',
                  },
                  {
                    title: 'Anomaly Identification',
                    description: 'Automatic flagging of unusual financial patterns for review',
                    icon: 'MagnifyingGlassIcon',
                  },
                ].map((feature, index) => (
                  <div key={index} className="glassmorphism rounded-xl p-8">
                    <Icon name={feature.icon as any} size={40} className="text-primary mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Book System Audit CTA */}
        <section className="py-24 lg:py-32">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="glassmorphism rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-primary/10" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full mb-8">
                    <Icon name="RocketLaunchIcon" size={20} className="text-green-500" />
                    <span className="text-sm font-semibold text-green-500">Ready to Automate?</span>
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Book Your System Audit
                  </h2>
                  
                  <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Discover how autonomous financial reconciliation can transform your financial operations and close your books in minutes.
                  </p>

                  <a
                    href="https://calendly.com/pilotlogicsystems/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <Icon name="CalendarIcon" size={20} />
                    <span>Book System Audit</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
