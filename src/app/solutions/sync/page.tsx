import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import BackToTop from '@/components/common/BackToTop';
import CTASection from '@/app/expertise/components/CTASection';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Enterprise Data Sync & API Integration Services',
  description: 'Break down data silos. We build two-way syncs between Salesforce, HubSpot, and your Data Warehouse. Single source of truth for your enterprise.',
  keywords: 'Salesforce API Integration, Two-Way Data Sync, Data Warehouse Architecture, Custom ERP Connectors, Salesforce Sync, ERP Integration',
};

export default function DataSyncCorePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with Hub & Spoke Visual */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-primary/5" />
          
          <div className="relative w-full px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                    <Icon name="CircleStackIcon" size={20} className="text-blue-400" />
                    <span className="text-sm font-semibold text-blue-400">Data Sync Core</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    Unified Enterprise Architecture.
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Break down data silos. We build two-way sync pipelines for Manufacturing (ERP to Shop Floor) and Enterprise (CRM to Data Warehouse). Ensure your Salesforce and SQL database are always identical.
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
                
                {/* Hub & Spoke System Visual */}
                <div className="relative">
                  <div className="glassmorphism rounded-2xl p-8">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-mono text-muted-foreground">hub_spoke_sync.py</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                        <span className="text-xs text-success font-semibold">SYNCING</span>
                      </div>
                    </div>
                    
                    {/* Hub and Spoke Visual */}
                    <div className="relative h-96 flex items-center justify-center">
                      {/* Center Hub - The Truth */}
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="glassmorphism w-28 h-28 rounded-full flex flex-col items-center justify-center border-4 border-primary bg-primary/20">
                          <Icon name="ServerIcon" size={36} className="text-primary mb-1" />
                          <span className="text-xs font-bold text-primary">The Truth</span>
                        </div>
                      </div>
                      
                      {/* Orbiting Satellites */}
                      {/* Salesforce - Top */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2">
                        <div className="glassmorphism w-20 h-20 rounded-lg flex flex-col items-center justify-center">
                          <Icon name="BuildingOfficeIcon" size={24} className="text-secondary mb-1" />
                          <span className="text-xs font-semibold text-foreground">Salesforce</span>
                        </div>
                        <div className="absolute top-full left-1/2 w-0.5 h-24 bg-gradient-to-b from-secondary/50 to-transparent" />
                      </div>
                      
                      {/* Shopify - Top Right */}
                      <div className="absolute top-8 right-4">
                        <div className="glassmorphism w-20 h-20 rounded-lg flex flex-col items-center justify-center">
                          <Icon name="ShoppingCartIcon" size={24} className="text-success mb-1" />
                          <span className="text-xs font-semibold text-foreground">Shopify</span>
                        </div>
                        <div className="absolute top-1/2 right-full w-24 h-0.5 bg-gradient-to-l from-success/50 to-transparent origin-right" style={{transform: 'rotate(-30deg)'}} />
                      </div>
                      
                      {/* Zendesk - Bottom Right */}
                      <div className="absolute bottom-8 right-4">
                        <div className="glassmorphism w-20 h-20 rounded-lg flex flex-col items-center justify-center">
                          <Icon name="ChatBubbleLeftIcon" size={24} className="text-accent mb-1" />
                          <span className="text-xs font-semibold text-foreground">Zendesk</span>
                        </div>
                        <div className="absolute bottom-1/2 right-full w-24 h-0.5 bg-gradient-to-l from-accent/50 to-transparent origin-right" style={{transform: 'rotate(30deg)'}} />
                      </div>
                      
                      {/* PostgreSQL - Bottom */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                        <div className="glassmorphism w-20 h-20 rounded-lg flex flex-col items-center justify-center">
                          <Icon name="CircleStackIcon" size={24} className="text-blue-400 mb-1" />
                          <span className="text-xs font-semibold text-foreground">PostgreSQL</span>
                        </div>
                        <div className="absolute bottom-full left-1/2 w-0.5 h-24 bg-gradient-to-t from-blue-400/50 to-transparent" />
                      </div>
                      
                      {/* NetSuite - Bottom Left */}
                      <div className="absolute bottom-8 left-4">
                        <div className="glassmorphism w-20 h-20 rounded-lg flex flex-col items-center justify-center">
                          <Icon name="CubeIcon" size={24} className="text-purple-400 mb-1" />
                          <span className="text-xs font-semibold text-foreground">NetSuite</span>
                        </div>
                        <div className="absolute bottom-1/2 left-full w-24 h-0.5 bg-gradient-to-r from-purple-400/50 to-transparent origin-left" style={{transform: 'rotate(-30deg)'}} />
                      </div>
                      
                      {/* HubSpot - Top Left */}
                      <div className="absolute top-8 left-4">
                        <div className="glassmorphism w-20 h-20 rounded-lg flex flex-col items-center justify-center">
                          <Icon name="ChartBarIcon" size={24} className="text-orange-400 mb-1" />
                          <span className="text-xs font-semibold text-foreground">HubSpot</span>
                        </div>
                        <div className="absolute top-1/2 left-full w-24 h-0.5 bg-gradient-to-r from-orange-400/50 to-transparent origin-left" style={{transform: 'rotate(30deg)'}} />
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <p className="text-sm text-muted-foreground">Real-time bidirectional sync • 6 systems unified</p>
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
                  Eliminate data silos that cripple enterprise operations
                </p>
              </div>

              <div className="space-y-16">
                {/* Section 1: Enterprise Pain */}
                <div className="glassmorphism rounded-3xl p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                        <Icon name="BuildingOffice2Icon" size={28} className="text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">
                        Data Silos Cost Enterprises Millions
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        Enterprise organizations lose $15M annually due to data silos. When Marketing data doesn't match Sales data, executives make decisions on incomplete information that leads to missed revenue targets and failed product launches.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">Conflicting Data Sources</div>
                            <div className="text-sm text-muted-foreground">Marketing reports 10,000 leads while Sales CRM shows 7,500 - which is truth?</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">Manual Data Transfers</div>
                            <div className="text-sm text-muted-foreground">Teams export CSVs from one system and import to another, creating 48-hour data lag</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="CheckCircleIcon" size={24} className="text-success mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-success">Our Solution: Salesforce Sync</div>
                            <div className="text-sm text-muted-foreground">Build two-way sync between Salesforce CRM and data warehouse. Ensure Marketing and Sales see identical data in real-time.</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="glassmorphism rounded-xl p-6">
                      <div className="space-y-4">
                        <div className="text-center mb-4">
                          <div className="text-sm text-muted-foreground mb-2">Data Consistency</div>
                        </div>
                        <div className="p-4 bg-destructive/10 rounded-lg">
                          <div className="text-xs text-muted-foreground mb-2">Before Sync</div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-foreground">Salesforce</span>
                              <span className="text-sm text-destructive">7,500 leads</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-foreground">Marketing DB</span>
                              <span className="text-sm text-destructive">10,000 leads</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-center">
                          <Icon name="ArrowDownIcon" size={32} className="text-primary" />
                        </div>
                        <div className="p-4 bg-success/10 rounded-lg">
                          <div className="text-xs text-muted-foreground mb-2">After Sync</div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-foreground">All Systems</span>
                              <span className="text-sm text-success font-bold">10,000 leads ✓</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Manufacturing Pain */}
                <div className="glassmorphism rounded-3xl p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1 glassmorphism rounded-xl p-6">
                      <div className="space-y-4">
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <div className="text-xs text-muted-foreground mb-3">Inventory Sync Status</div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-2 bg-success/10 rounded">
                              <span className="text-xs text-foreground">ERP System</span>
                              <span className="text-xs text-success font-semibold">500 units</span>
                            </div>
                            <div className="flex items-center justify-center py-1">
                              <Icon name="ArrowsRightLeftIcon" size={16} className="text-primary" />
                            </div>
                            <div className="flex items-center justify-between p-2 bg-success/10 rounded">
                              <span className="text-xs text-foreground">E-commerce Store</span>
                              <span className="text-xs text-success font-semibold">500 units</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-success">
                          <Icon name="CheckCircleIcon" size={20} />
                          <span className="text-sm font-semibold">Real-time Inventory Sync</span>
                        </div>
                      </div>
                    </div>
                    <div className="order-1 lg:order-2">
                      <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                        <Icon name="CogIcon" size={28} className="text-blue-400" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">
                        Inventory Ghosting Kills Sales
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        Manufacturing companies lose 18% of online sales due to inventory ghosting. When warehouse stock levels don't sync to e-commerce stores in real-time, customers order products that are actually out of stock, creating fulfillment nightmares and refund requests.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">Overselling Products</div>
                            <div className="text-sm text-muted-foreground">E-commerce shows 100 units available while warehouse has 0, leading to angry customers</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">Manual Stock Updates</div>
                            <div className="text-sm text-muted-foreground">Staff manually update e-commerce inventory twice daily, creating 12-hour data lag</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="CheckCircleIcon" size={24} className="text-success mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-success">Our Solution: ERP Integration</div>
                            <div className="text-sm text-muted-foreground">Sync warehouse stock levels to e-commerce store in real-time. Prevent overselling with instant inventory updates.</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 3: Retail Pain */}
                <div className="glassmorphism rounded-3xl p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                        <Icon name="ShoppingCartIcon" size={28} className="text-accent" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">
                        Omnichannel Chaos
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        Retail companies lose 30% customer lifetime value due to fragmented customer profiles. When in-store and online customer data live in separate systems, marketing campaigns target the wrong segments and loyalty programs fail to recognize cross-channel purchases.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">Fragmented Customer Profiles</div>
                            <div className="text-sm text-muted-foreground">Customer who spends $10K in-store appears as "new customer" online</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">Loyalty Program Failures</div>
                            <div className="text-sm text-muted-foreground">Points earned in-store don't show up online, frustrating customers</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="CheckCircleIcon" size={24} className="text-success mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-success">Our Solution: Unified Profiles</div>
                            <div className="text-sm text-muted-foreground">Unify in-store POS and online customer profiles. Create single source of truth for purchase history and loyalty points.</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="glassmorphism rounded-xl p-6">
                      <div className="space-y-4">
                        <div className="text-center mb-4">
                          <div className="text-sm text-muted-foreground mb-2">Customer Profile Unification</div>
                        </div>
                        <div className="space-y-3">
                          <div className="p-3 bg-muted/50 rounded-lg">
                            <div className="flex items-center space-x-2 mb-2">
                              <Icon name="BuildingStorefrontIcon" size={16} className="text-primary" />
                              <span className="text-xs text-foreground font-semibold">In-Store</span>
                            </div>
                            <div className="text-xs text-muted-foreground">$10,000 lifetime value</div>
                          </div>
                          <div className="flex items-center justify-center">
                            <Icon name="PlusIcon" size={20} className="text-primary" />
                          </div>
                          <div className="p-3 bg-muted/50 rounded-lg">
                            <div className="flex items-center space-x-2 mb-2">
                              <Icon name="GlobeAltIcon" size={16} className="text-secondary" />
                              <span className="text-xs text-foreground font-semibold">Online</span>
                            </div>
                            <div className="text-xs text-muted-foreground">$5,000 lifetime value</div>
                          </div>
                          <div className="flex items-center justify-center">
                            <Icon name="ArrowDownIcon" size={20} className="text-primary" />
                          </div>
                          <div className="p-3 bg-success/10 rounded-lg">
                            <div className="flex items-center space-x-2 mb-2">
                              <Icon name="UserIcon" size={16} className="text-success" />
                              <span className="text-xs text-success font-semibold">Unified Profile</span>
                            </div>
                            <div className="text-xs text-foreground font-bold">$15,000 lifetime value</div>
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
        <section className="py-24 lg:py-32 bg-gradient-to-br from-blue-500/5 via-transparent to-primary/5">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Tech Stack
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Enterprise-grade data synchronization infrastructure
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glassmorphism rounded-xl p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <Icon name="CircleStackIcon" size={32} className="text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">PostgreSQL</h3>
                  <p className="text-sm text-muted-foreground">Central data warehouse</p>
                </div>
                <div className="glassmorphism rounded-xl p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <Icon name="BoltIcon" size={32} className="text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">AWS Lambda</h3>
                  <p className="text-sm text-muted-foreground">Real-time sync triggers</p>
                </div>
                <div className="glassmorphism rounded-xl p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <Icon name="WindowIcon" size={32} className="text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Retool</h3>
                  <p className="text-sm text-muted-foreground">Admin dashboards</p>
                </div>
                <div className="glassmorphism rounded-xl p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <Icon name="ChartBarIcon" size={32} className="text-success mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Segment</h3>
                  <p className="text-sm text-muted-foreground">Event streaming</p>
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