import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import BackToTop from '@/components/common/BackToTop';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'AI-Driven Data Extraction & Entry - Intelligent Ingestion | PilotLogicSystems',
  description: 'Eliminate manual data entry for Logistics, Healthcare, and Real Estate. AI-powered OCR and Computer Vision turn PDFs into structured database records instantly with 99.7% accuracy.',
};

export default function IntelligentIngestionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          
          <div className="relative w-full px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                    <Icon name="DocumentTextIcon" size={20} className="text-primary" />
                    <span className="text-sm font-semibold text-primary">Intelligent Ingestion</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    AI-Driven Data Extraction & Entry.
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Eliminate manual data entry for Logistics (Bills of Lading), Healthcare (Patient Forms), and Real Estate (Applications). We use Computer Vision to turn PDFs into structured database records instantly.
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
                      href="#technical-specs"
                      className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-border rounded-lg font-semibold text-foreground hover:border-primary hover:text-primary transition-all duration-200"
                    >
                      <Icon name="CodeBracketIcon" size={20} />
                      <span>View Technical Specs</span>
                    </a>
                  </div>
                </div>
                
                {/* Visual: Split Screen - PDF to JSON */}
                <div className="relative">
                  <div className="glassmorphism rounded-2xl p-8 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="text-xs font-mono text-muted-foreground">INPUT: Messy PDF</div>
                        <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                          <div className="h-2 bg-foreground/20 rounded w-full" />
                          <div className="h-2 bg-foreground/20 rounded w-3/4" />
                          <div className="h-2 bg-foreground/20 rounded w-5/6" />
                          <div className="h-8 bg-foreground/10 rounded" />
                          <div className="h-2 bg-foreground/20 rounded w-2/3" />
                          <div className="h-2 bg-foreground/20 rounded w-4/5" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="text-xs font-mono text-primary">OUTPUT: Clean JSON</div>
                        <div className="bg-primary/10 rounded-lg p-4 font-mono text-xs space-y-1">
                          <div className="text-foreground">{'{'}</div>
                          <div className="text-muted-foreground ml-2">"patient": "John Doe",</div>
                          <div className="text-muted-foreground ml-2">"dob": "1985-03-15",</div>
                          <div className="text-muted-foreground ml-2">"diagnosis": "...",</div>
                          <div className="text-muted-foreground ml-2">"insurance": "..."</div>
                          <div className="text-foreground">{'}'}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="flex items-center space-x-2 text-success">
                        <Icon name="CheckCircleIcon" size={20} />
                        <span className="text-sm font-semibold">Processed in &lt;1 second</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Use Cases - Bento Grid */}
        <section className="py-24 lg:py-32">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Industry-Specific Solutions
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Tailored AI extraction for your industry's unique document types
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: 'TruckIcon',
                    title: 'Logistics Manifests',
                    description: 'Bills of Lading, shipping manifests, customs forms',
                    color: 'text-orange-500',
                  },
                  {
                    icon: 'HeartIcon',
                    title: 'Healthcare Forms',
                    description: 'Patient intake, medical records, insurance claims',
                    color: 'text-blue-500',
                  },
                  {
                    icon: 'HomeIcon',
                    title: 'Real Estate Applications',
                    description: 'Rental applications, lease agreements, property docs',
                    color: 'text-green-500',
                  },
                  {
                    icon: 'DocumentCheckIcon',
                    title: 'Insurance Claims',
                    description: 'Claim forms, policy documents, adjuster reports',
                    color: 'text-purple-500',
                  },
                  {
                    icon: 'ShieldCheckIcon',
                    title: 'Compliance Documents',
                    description: 'Regulatory filings, audit reports, certifications',
                    color: 'text-red-500',
                  },
                  {
                    icon: 'BanknotesIcon',
                    title: 'Financial Records',
                    description: 'Invoices, receipts, bank statements, tax forms',
                    color: 'text-yellow-500',
                  },
                ].map((item, index) => (
                  <div key={index} className="glassmorphism rounded-xl p-6 hover:shadow-card-hover transition-all duration-300">
                    <Icon name={item.icon as any} size={32} className={`${item.color} mb-4`} />
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section id="technical-specs" className="py-24 lg:py-32 bg-muted/30">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Technical Architecture
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Enterprise-grade integration with your existing systems
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'ERP Systems',
                    items: ['SAP', 'Oracle', 'Microsoft Dynamics', 'NetSuite'],
                  },
                  {
                    title: 'EMR Platforms',
                    items: ['Epic', 'Cerner', 'Allscripts', 'Meditech'],
                  },
                  {
                    title: 'Warehouse Management',
                    items: ['Manhattan', 'Blue Yonder', 'Infor', 'HighJump'],
                  },
                ].map((category, index) => (
                  <div key={index} className="glassmorphism rounded-xl p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-muted-foreground">
                          <Icon name="CheckCircleIcon" size={16} className="text-success" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-24 lg:py-32">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="glassmorphism rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
                  Performance Metrics
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { label: 'Accuracy Rate', value: '99.7%' },
                    { label: 'Time Reduction', value: '85%' },
                    { label: 'Processing Speed', value: '<1s' },
                  ].map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-5xl font-bold text-primary mb-2">{metric.value}</div>
                      <div className="text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-24 lg:py-32 bg-muted/30">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Regulatory Compliance
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Built to meet industry-specific regulatory requirements
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { standard: 'HIPAA', description: 'Healthcare data protection' },
                  { standard: 'SOX', description: 'Financial compliance' },
                  { standard: 'GDPR', description: 'Data privacy regulations' },
                ].map((item, index) => (
                  <div key={index} className="glassmorphism rounded-xl p-6 text-center">
                    <Icon name="ShieldCheckIcon" size={48} className="text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">{item.standard}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-8">
                    <Icon name="RocketLaunchIcon" size={20} className="text-primary" />
                    <span className="text-sm font-semibold text-primary">Ready to Automate?</span>
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Book Your System Audit
                  </h2>
                  
                  <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Discover how AI-driven data extraction can eliminate manual entry and transform your document processing workflows.
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
