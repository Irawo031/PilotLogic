import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import BackToTop from '@/components/common/BackToTop';
import CTASection from '@/app/expertise/components/CTASection';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Client Onboarding Automation | Contract to Kickoff in Seconds',
  description: 'Zero-touch onboarding. Auto-generate contracts (DocuSign), provision user accounts, and trigger welcome sequences instantly.',
  keywords: 'Automate Client Onboarding, DocuSign API Integration, HR Provisioning Automation, Legal Workflow Automation, ERP Integration',
};

export default function OnboardingEnginePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with Velocity Timeline Visual */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-primary/5" />
          
          <div className="relative w-full px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
                    <Icon name="UserPlusIcon" size={20} className="text-purple-400" />
                    <span className="text-sm font-semibold text-purple-400">Onboarding Engine</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    Zero-Touch Client Onboarding.
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    From contract to kickoff in 0 seconds. Perfect for Legal Firms, Marketing Agencies, and HR Departments. Auto-generate NDAs, provision accounts, and schedule kickoffs.
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
                
                {/* Velocity Timeline - Single Trigger Exploding into 5 Actions */}
                <div className="relative">
                  <div className="glassmorphism rounded-2xl p-8 space-y-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-mono text-muted-foreground">onboarding_velocity.py</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                        <span className="text-xs text-success font-semibold">EXECUTING</span>
                      </div>
                    </div>
                    
                    {/* Single Trigger Point */}
                    <div className="flex justify-center mb-6">
                      <div className="glassmorphism rounded-lg p-4 bg-primary/20 border-2 border-primary">
                        <div className="flex items-center space-x-3">
                          <Icon name="BoltIcon" size={24} className="text-primary" />
                          <div>
                            <div className="text-sm font-bold text-foreground">TRIGGER</div>
                            <div className="text-xs text-muted-foreground">Form Submit</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Explosion Lines */}
                    <div className="relative h-4 flex items-center justify-center">
                      <div className="absolute w-full flex justify-center">
                        <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent" />
                      </div>
                    </div>
                    
                    {/* 5 Simultaneous Actions */}
                    <div className="grid grid-cols-1 gap-2">
                      <div className="glassmorphism rounded-lg p-3 bg-success/10 flex items-center space-x-3">
                        <Icon name="DocumentTextIcon" size={20} className="text-success" />
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-foreground">Contract Gen</div>
                          <div className="text-xs text-muted-foreground">DocuSign sent</div>
                        </div>
                        <span className="text-xs text-success font-mono">0ms</span>
                      </div>
                      
                      <div className="glassmorphism rounded-lg p-3 bg-success/10 flex items-center space-x-3">
                        <Icon name="ChatBubbleLeftIcon" size={20} className="text-success" />
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-foreground">Slack Alert</div>
                          <div className="text-xs text-muted-foreground">Team notified</div>
                        </div>
                        <span className="text-xs text-success font-mono">0ms</span>
                      </div>
                      
                      <div className="glassmorphism rounded-lg p-3 bg-success/10 flex items-center space-x-3">
                        <Icon name="EnvelopeIcon" size={20} className="text-success" />
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-foreground">Email Send</div>
                          <div className="text-xs text-muted-foreground">Welcome sent</div>
                        </div>
                        <span className="text-xs text-success font-mono">0ms</span>
                      </div>
                      
                      <div className="glassmorphism rounded-lg p-3 bg-success/10 flex items-center space-x-3">
                        <Icon name="CircleStackIcon" size={20} className="text-success" />
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-foreground">DB Create</div>
                          <div className="text-xs text-muted-foreground">Record added</div>
                        </div>
                        <span className="text-xs text-success font-mono">0ms</span>
                      </div>
                      
                      <div className="glassmorphism rounded-lg p-3 bg-success/10 flex items-center space-x-3">
                        <Icon name="FolderIcon" size={20} className="text-success" />
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-foreground">Folder Make</div>
                          <div className="text-xs text-muted-foreground">Drive created</div>
                        </div>
                        <span className="text-xs text-success font-mono">0ms</span>
                      </div>
                    </div>
                    
                    <div className="text-center pt-4 border-t border-border">
                      <div className="text-2xl font-bold text-primary">5 Actions</div>
                      <div className="text-xs text-muted-foreground">Executed Simultaneously</div>
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
                  Eliminate onboarding friction across professional services
                </p>
              </div>

              <div className="space-y-16">
                {/* Section 1: HR Pain */}
                <div className="glassmorphism rounded-3xl p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                        <Icon name="UserGroupIcon" size={28} className="text-secondary" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">
                        The First Day Friction
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        HR departments lose 40% of new hire productivity in Week 1 due to access provisioning delays. Manual setup of email accounts, software licenses, and system permissions creates 3-day onboarding lags that frustrate employees and delay project starts.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">Access Provisioning Delays</div>
                            <div className="text-sm text-muted-foreground">3-day wait for email, Slack, and software access after hire date</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">Manual Account Creation</div>
                            <div className="text-sm text-muted-foreground">IT spends 4 hours per employee setting up 12+ system accounts</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="CheckCircleIcon" size={24} className="text-success mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-success">Our Solution: Instant Provisioning</div>
                            <div className="text-sm text-muted-foreground">Provision email accounts, software access, and system permissions instantly via Google Workspace API and Slack API.</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="glassmorphism rounded-xl p-6">
                      <div className="space-y-4">
                        <div className="text-center mb-4">
                          <div className="text-sm text-muted-foreground mb-2">Employee Onboarding Time</div>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-destructive/10 rounded-lg">
                          <span className="text-sm font-semibold text-foreground">Manual Setup</span>
                          <span className="text-2xl font-bold text-destructive">3 days</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <Icon name="ArrowDownIcon" size={32} className="text-primary" />
                        </div>
                        <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg">
                          <span className="text-sm font-semibold text-foreground">Automated Setup</span>
                          <span className="text-2xl font-bold text-success">0 sec</span>
                        </div>
                        <div className="text-center mt-6">
                          <div className="text-4xl font-bold text-primary">Instant</div>
                          <div className="text-sm text-muted-foreground">Day 1 Productivity</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Agency Pain */}
                <div className="glassmorphism rounded-3xl p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1 glassmorphism rounded-xl p-6">
                      <div className="space-y-4">
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <div className="text-xs text-muted-foreground mb-3">Client Momentum Timeline</div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-2 bg-success/10 rounded">
                              <span className="text-xs text-foreground">Sales Call Ends</span>
                              <span className="text-xs text-success font-mono">0:00</span>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-success/10 rounded">
                              <span className="text-xs text-foreground">Contract Sent</span>
                              <span className="text-xs text-success font-mono">0:02</span>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-success/10 rounded">
                              <span className="text-xs text-foreground">Invoice Generated</span>
                              <span className="text-xs text-success font-mono">0:03</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-success">
                          <Icon name="BoltIcon" size={20} />
                          <span className="text-sm font-semibold">Strike While Iron is Hot</span>
                        </div>
                      </div>
                    </div>
                    <div className="order-1 lg:order-2">
                      <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                        <Icon name="MegaphoneIcon" size={28} className="text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">
                        Client Momentum Loss
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        Marketing agencies lose 25% of closed deals due to onboarding delays. The 48-hour gap between sales call and contract delivery kills client excitement and creates buyer's remorse that leads to cancellations.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">Contract Delivery Lag</div>
                            <div className="text-sm text-muted-foreground">48-hour delay between sales call and contract delivery creates buyer's remorse</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">Manual Document Prep</div>
                            <div className="text-sm text-muted-foreground">Staff manually create SOWs, contracts, and invoices for each new client</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="CheckCircleIcon" size={24} className="text-success mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-success">Our Solution: Instant Delivery</div>
                            <div className="text-sm text-muted-foreground">Send contracts (DocuSign) and invoices seconds after sales call. Auto-populate client data from CRM.</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 3: Real Estate Pain */}
                <div className="glassmorphism rounded-3xl p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                        <Icon name="HomeIcon" size={28} className="text-accent" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">
                        Tenant Turnaround Delays
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        Property managers lose $2,000 per unit in vacancy costs due to slow lease generation. Manual creation of lease agreements from application data creates 5-day turnaround times that extend vacancy periods and reduce NOI.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">Lease Generation Lag</div>
                            <div className="text-sm text-muted-foreground">5-day turnaround from approved application to signed lease</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">Manual Data Transfer</div>
                            <div className="text-sm text-muted-foreground">Staff manually copy application data into lease templates</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="CheckCircleIcon" size={24} className="text-success mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-success">Our Solution: Auto-Generation</div>
                            <div className="text-sm text-muted-foreground">Auto-generate lease agreements based on application data. Send to DocuSign instantly upon approval.</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="glassmorphism rounded-xl p-6">
                      <div className="space-y-4">
                        <div className="text-center mb-4">
                          <div className="text-sm text-muted-foreground mb-2">Lease Generation Time</div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <span className="text-sm text-foreground">Application Approved</span>
                            <Icon name="CheckCircleIcon" size={20} className="text-success" />
                          </div>
                          <div className="flex items-center justify-center">
                            <Icon name="ArrowDownIcon" size={20} className="text-primary" />
                          </div>
                          <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                            <span className="text-sm text-foreground">Auto-Generate Lease</span>
                            <Icon name="DocumentTextIcon" size={20} className="text-success" />
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
        <section className="py-24 lg:py-32 bg-gradient-to-br from-purple-500/5 via-transparent to-primary/5">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Tech Stack
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Enterprise-grade onboarding automation infrastructure
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="glassmorphism rounded-xl p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <Icon name="DocumentTextIcon" size={32} className="text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">DocuSign API</h3>
                  <p className="text-sm text-muted-foreground">Contract automation</p>
                </div>
                <div className="glassmorphism rounded-xl p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <Icon name="ChatBubbleLeftIcon" size={32} className="text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Slack API</h3>
                  <p className="text-sm text-muted-foreground">Team notifications</p>
                </div>
                <div className="glassmorphism rounded-xl p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <Icon name="EnvelopeIcon" size={32} className="text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Google Workspace API</h3>
                  <p className="text-sm text-muted-foreground">Account provisioning</p>
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