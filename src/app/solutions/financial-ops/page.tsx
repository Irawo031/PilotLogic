import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import BackToTop from '@/components/common/BackToTop';
import CTASection from '@/app/expertise/components/CTASection';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Automated Invoice Reconciliation & Financial Operations',
  description: 'Automate your month-end close. We build systems that match bank feeds to ERP data, auto-approve invoices, and sync Stripe to QuickBooks.',
  keywords: 'Automate QuickBooks Reconciliation, NetSuite Integration, Fintech Back Office Automation, Stripe to Xero Sync, Fintech Reconciliation, ERP Integration',
};

export default function FinancialOpsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with Reconciliation Flow Visual */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
          
          <div className="relative w-full px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
                    <Icon name="CurrencyDollarIcon" size={20} className="text-secondary" />
                    <span className="text-sm font-semibold text-secondary">Financial Ops</span>
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
                      href="/architecture-showcase"
                      className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-border rounded-lg font-semibold text-foreground hover:border-primary hover:text-primary transition-all duration-200"
                    >
                      <Icon name="CodeBracketIcon" size={20} />
                      <span>View Architecture</span>
                    </a>
                  </div>
                </div>
                
                {/* Reconciliation Flow Schematic */}
                <div className="relative">
                  <div className="glassmorphism rounded-2xl p-8 space-y-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-mono text-muted-foreground">reconciliation_flow.py</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                        <span className="text-xs text-success font-semibold">MATCHING</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {/* Two Parallel Lines */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="glassmorphism rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-3">
                            <Icon name="BuildingLibraryIcon" size={16} className="text-secondary" />
                            <span className="text-xs font-semibold text-foreground">Bank Feed</span>
                          </div>
                          <div className="space-y-2">
                            <div className="p-2 bg-secondary/10 rounded text-xs">
                              <div className="font-mono">$1,250.00</div>
                              <div className="text-muted-foreground">Acme Corp</div>
                            </div>
                            <div className="p-2 bg-secondary/10 rounded text-xs">
                              <div className="font-mono">$3,400.00</div>
                              <div className="text-muted-foreground">Tech Inc</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="glassmorphism rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-3">
                            <Icon name="CubeIcon" size={16} className="text-primary" />
                            <span className="text-xs font-semibold text-foreground">ERP System</span>
                          </div>
                          <div className="space-y-2">
                            <div className="p-2 bg-primary/10 rounded text-xs">
                              <div className="font-mono">INV-1234</div>
                              <div className="text-muted-foreground">$1,250.00</div>
                            </div>
                            <div className="p-2 bg-primary/10 rounded text-xs">
                              <div className="font-mono">INV-5678</div>
                              <div className="text-muted-foreground">$3,400.00</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Converging Arrow */}
                      <div className="flex justify-center">
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-0.5 bg-gradient-to-r from-secondary to-primary" />
                          <Icon name="ArrowDownIcon" size={24} className="text-primary" />
                          <div className="w-16 h-0.5 bg-gradient-to-l from-primary to-secondary" />
                        </div>
                      </div>
                      
                      {/* Match Logic Node */}
                      <div className="glassmorphism rounded-lg p-4 bg-primary/10">
                        <div className="flex items-center space-x-3 mb-3">
                          <Icon name="CpuChipIcon" size={20} className="text-primary" />
                          <span className="text-sm font-semibold text-foreground">Match Logic</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Icon name="CheckCircleIcon" size={16} className="text-success" />
                            <span className="text-xs text-foreground">Amount verified</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="CheckCircleIcon" size={16} className="text-success" />
                            <span className="text-xs text-foreground">Vendor matched</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="CheckCircleIcon" size={16} className="text-success" />
                            <span className="text-xs text-foreground">Date confirmed</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Green Status */}
                      <div className="glassmorphism rounded-lg p-4 bg-success/20 border-2 border-success">
                        <div className="flex items-center justify-center space-x-3">
                          <Icon name="CheckBadgeIcon" size={24} className="text-success" />
                          <span className="text-lg font-bold text-success">RECONCILED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Pain Points - 3 Sections */}
        <section className="py-24 lg:py-32">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Industry Pain Points We Solve
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Automated financial operations that eliminate month-end chaos
                </p>
              </div>

              <div className="space-y-16">
                {/* Section 1: Fintech Pain */}
                <div className="glassmorphism rounded-3xl p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                        <Icon name="BanknotesIcon" size={28} className="text-secondary" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">
                        The Month-End Close Nightmare
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        Fintech companies processing thousands of micro-transactions face 5-day month-end close cycles. Manual reconciliation of Stripe payments, bank feeds, and accounting systems creates bottlenecks that delay financial reporting and investor updates.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">Micro-Transaction Hell</div>
                            <div className="text-sm text-muted-foreground">Manually matching 10,000+ transactions per month across Stripe, bank accounts, and QuickBooks</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">Delayed Reporting</div>
                            <div className="text-sm text-muted-foreground">5-day close cycle delays board reporting and investor communications</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="CheckCircleIcon" size={24} className="text-success mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-success">Our Solution: Fintech Reconciliation</div>
                            <div className="text-sm text-muted-foreground">Auto-match 10,000+ transactions in 2 minutes. Real-time Stripe-to-QuickBooks sync with variance alerts.</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="glassmorphism rounded-xl p-6">
                      <div className="space-y-4">
                        <div className="text-center mb-4">
                          <div className="text-sm text-muted-foreground mb-2">Month-End Close Time</div>
                        </div>
                        <div className="flex items-center space-x-2 text-success">
                          <Icon name="CheckCircleIcon" size={20} />
                          <span className="text-sm font-semibold">Manual Process</span>
                        </div>
                        <div className="flex items-center space-x-2 text-destructive">
                          <Icon name="ArrowDownIcon" size={20} />
                          <span className="text-sm font-semibold">Automated Process</span>
                        </div>
                        <div className="text-center mt-6">
                          <div className="text-4xl font-bold text-primary">3600x</div>
                          <div className="text-sm text-muted-foreground">Faster Close</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Construction Pain */}
                <div className="glassmorphism rounded-3xl p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1 glassmorphism rounded-xl p-6">
                      <div className="space-y-4">
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <div className="text-xs text-muted-foreground mb-3">Job Costing Accuracy</div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-2 bg-success/10 rounded">
                              <span className="text-xs text-foreground">Project A</span>
                              <span className="text-xs text-success font-semibold">✓ Matched</span>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-success/10 rounded">
                              <span className="text-xs text-foreground">Project B</span>
                              <span className="text-xs text-success font-semibold">✓ Matched</span>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-success/10 rounded">
                              <span className="text-xs text-foreground">Project C</span>
                              <span className="text-xs text-success font-semibold">✓ Matched</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-success">
                          <Icon name="CheckCircleIcon" size={20} />
                          <span className="text-sm font-semibold">Real-time Project Profitability</span>
                        </div>
                      </div>
                    </div>
                    <div className="order-1 lg:order-2">
                      <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                        <Icon name="WrenchScrewdriverIcon" size={28} className="text-accent" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">
                        Job Costing Accuracy
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        Construction firms lose 12% profit margin due to inaccurate job costing. Manual matching of supplier invoices to specific project codes creates allocation errors that hide unprofitable projects until it's too late.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">Invoice Allocation Errors</div>
                            <div className="text-sm text-muted-foreground">20% of supplier invoices get charged to wrong project codes, distorting profitability</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">Delayed Cost Visibility</div>
                            <div className="text-sm text-muted-foreground">30-day lag between expense and project cost recognition</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="CheckCircleIcon" size={24} className="text-success mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-success">Our Solution: Auto-Matching</div>
                            <div className="text-sm text-muted-foreground">Match supplier invoices to project codes automatically using PO numbers and vendor history. Real-time job costing.</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 3: SaaS Pain */}
                <div className="glassmorphism rounded-3xl p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                        <Icon name="CloudIcon" size={28} className="text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">
                        Revenue Recognition Chaos
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        SaaS companies struggle with ASC 606 compliance due to manual revenue recognition processes. Syncing Stripe billing data to NetSuite/QuickBooks creates timing mismatches that trigger audit flags and delay financial closes.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">ASC 606 Compliance</div>
                            <div className="text-sm text-muted-foreground">Manual revenue recognition schedules for 1,000+ subscriptions create audit risk</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">Stripe-to-ERP Lag</div>
                            <div className="text-sm text-muted-foreground">48-hour delay between Stripe charge and NetSuite/QuickBooks entry</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="CheckCircleIcon" size={24} className="text-success mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-success">Our Solution: Real-Time Sync</div>
                            <div className="text-sm text-muted-foreground">Sync Stripe billing to NetSuite/QuickBooks in real-time. Auto-generate revenue recognition schedules per ASC 606.</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="glassmorphism rounded-xl p-6">
                      <div className="space-y-4">
                        <div className="text-center mb-4">
                          <div className="text-sm text-muted-foreground mb-2">Revenue Recognition Flow</div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <span className="text-sm text-foreground">Stripe Charge</span>
                            <Icon name="CreditCardIcon" size={20} className="text-primary" />
                          </div>
                          <div className="flex items-center justify-center">
                            <Icon name="ArrowDownIcon" size={20} className="text-primary" />
                          </div>
                          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <span className="text-sm text-foreground">Auto-Sync</span>
                            <span className="text-xs text-success font-semibold">Real-time</span>
                          </div>
                          <div className="flex items-center justify-center">
                            <Icon name="ArrowDownIcon" size={20} className="text-primary" />
                          </div>
                          <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                            <span className="text-sm text-foreground">NetSuite/QuickBooks</span>
                            <Icon name="CheckCircleIcon" size={20} className="text-success" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Tech Stack
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Enterprise-grade financial automation infrastructure
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glassmorphism rounded-xl p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <Icon name="CreditCardIcon" size={32} className="text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Stripe API</h3>
                  <p className="text-sm text-muted-foreground">Payment processing</p>
                </div>
                <div className="glassmorphism rounded-xl p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <Icon name="BuildingLibraryIcon" size={32} className="text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Plaid</h3>
                  <p className="text-sm text-muted-foreground">Bank feed integration</p>
                </div>
                <div className="glassmorphism rounded-xl p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <Icon name="CalculatorIcon" size={32} className="text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Xero/QuickBooks</h3>
                  <p className="text-sm text-muted-foreground">Accounting sync</p>
                </div>
                <div className="glassmorphism rounded-xl p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <Icon name="CircleStackIcon" size={32} className="text-success mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">SQL</h3>
                  <p className="text-sm text-muted-foreground">Data warehouse</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}