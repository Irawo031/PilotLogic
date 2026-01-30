import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import BackToTop from '@/components/common/BackToTop';
import CTASection from '@/app/expertise/components/CTASection';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Automated Data Entry & OCR Services | Extract PDF to Database',
  description: 'Eliminate manual data entry. We use AI (OCR) to extract data from Bills of Lading, Invoices, and Patient Forms instantly. 99.9% accuracy.',
  keywords: 'Automate Bill of Lading Entry, PDF to Excel Automation, OCR Data Extraction, Document AI Service, 3PL Automation, HIPAA OCR, ERP Integration',
};

export default function IntelligentIngestionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with Document Transformation Visual */}
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
                      href="/architecture-showcase"
                      className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-border rounded-lg font-semibold text-foreground hover:border-primary hover:text-primary transition-all duration-200"
                    >
                      <Icon name="CodeBracketIcon" size={20} />
                      <span>View Architecture</span>
                    </a>
                  </div>
                </div>
                
                {/* Document Transformation Schematic */}
                <div className="relative">
                  <div className="glassmorphism rounded-2xl p-8 space-y-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-mono text-muted-foreground">document_transformer.py</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                        <span className="text-xs text-success font-semibold">PROCESSING</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 items-center">
                      {/* Messy Stack of Files (Left) */}
                      <div className="glassmorphism rounded-lg p-4 space-y-2">
                        <div className="flex items-center space-x-2 mb-3">
                          <Icon name="DocumentIcon" size={16} className="text-muted-foreground" />
                          <span className="text-xs font-semibold text-muted-foreground">INPUT</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 p-2 bg-muted/50 rounded">
                            <Icon name="DocumentTextIcon" size={14} className="text-red-400" />
                            <span className="text-xs text-muted-foreground">PDF</span>
                          </div>
                          <div className="flex items-center space-x-2 p-2 bg-muted/50 rounded">
                            <Icon name="EnvelopeIcon" size={14} className="text-blue-400" />
                            <span className="text-xs text-muted-foreground">Email</span>
                          </div>
                          <div className="flex items-center space-x-2 p-2 bg-muted/50 rounded">
                            <Icon name="PhotoIcon" size={14} className="text-green-400" />
                            <span className="text-xs text-muted-foreground">Scan</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* AI Processor Chip (Middle) */}
                      <div className="flex flex-col items-center space-y-2">
                        <Icon name="ArrowRightIcon" size={20} className="text-primary animate-pulse" />
                        <div className="glassmorphism rounded-lg p-4 bg-primary/10">
                          <Icon name="CpuChipIcon" size={32} className="text-primary" />
                          <div className="text-xs text-center text-primary font-semibold mt-2">AI Processor</div>
                        </div>
                        <Icon name="ArrowRightIcon" size={20} className="text-primary animate-pulse" />
                      </div>
                      
                      {/* Structured Grid (Right) */}
                      <div className="glassmorphism rounded-lg p-4 space-y-2">
                        <div className="flex items-center space-x-2 mb-3">
                          <Icon name="TableCellsIcon" size={16} className="text-success" />
                          <span className="text-xs font-semibold text-success">OUTPUT</span>
                        </div>
                        <div className="space-y-1">
                          <div className="grid grid-cols-2 gap-1">
                            <div className="h-6 bg-success/20 rounded flex items-center justify-center">
                              <span className="text-xs text-success">✓</span>
                            </div>
                            <div className="h-6 bg-success/20 rounded flex items-center justify-center">
                              <span className="text-xs text-success">✓</span>
                            </div>
                            <div className="h-6 bg-success/20 rounded flex items-center justify-center">
                              <span className="text-xs text-success">✓</span>
                            </div>
                            <div className="h-6 bg-success/20 rounded flex items-center justify-center">
                              <span className="text-xs text-success">✓</span>
                            </div>
                          </div>
                          <div className="text-xs text-center text-success font-semibold mt-2">Excel/SQL</div>
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
                  Transform unstructured documents into actionable data across critical industries
                </p>
              </div>

              <div className="space-y-16">
                {/* Section 1: Logistics Pain */}
                <div className="glassmorphism rounded-3xl p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                        <Icon name="TruckIcon" size={28} className="text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">
                        Why 3PLs Lose 20% Margin on Manual Entry
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        Third-party logistics providers hemorrhage profit through Bill of Lading (BOL) errors and Order Processing latency. Manual data entry creates a 48-hour lag between shipment arrival and system visibility.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">BOL Entry Errors</div>
                            <div className="text-sm text-muted-foreground">15% of manual BOL entries contain critical errors (wrong addresses, quantities, or tracking numbers)</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">Order Processing Latency</div>
                            <div className="text-sm text-muted-foreground">Average 6-hour delay from document receipt to system entry causes missed delivery windows</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="CheckCircleIcon" size={24} className="text-success mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-success">Our Solution: 3PL Automation</div>
                            <div className="text-sm text-muted-foreground">Extract BOL data in 12 seconds with 99.7% accuracy. Auto-populate TMS systems and trigger carrier notifications instantly.</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="glassmorphism rounded-xl p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-destructive/10 rounded-lg">
                          <span className="text-sm font-semibold text-foreground">Manual Processing</span>
                          <span className="text-2xl font-bold text-destructive">6 hrs</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <Icon name="ArrowDownIcon" size={32} className="text-primary" />
                        </div>
                        <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg">
                          <span className="text-sm font-semibold text-foreground">AI Processing</span>
                          <span className="text-2xl font-bold text-success">12 sec</span>
                        </div>
                        <div className="text-center mt-6">
                          <div className="text-4xl font-bold text-primary">1800x</div>
                          <div className="text-sm text-muted-foreground">Faster Processing</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Healthcare Pain */}
                <div className="glassmorphism rounded-3xl p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1 glassmorphism rounded-xl p-6">
                      <div className="space-y-4">
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <div className="text-xs text-muted-foreground mb-2">HIPAA-Compliant OCR</div>
                          <div className="font-mono text-sm text-foreground space-y-1">
                            <div>Patient: John Doe</div>
                            <div>DOB: 1985-03-15</div>
                            <div>Insurance: BC/BS #12345</div>
                            <div>Diagnosis: Type 2 Diabetes</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-success">
                          <Icon name="ShieldCheckIcon" size={20} />
                          <span className="text-sm font-semibold">HIPAA Compliant • PHI Protected</span>
                        </div>
                      </div>
                    </div>
                    <div className="order-1 lg:order-2">
                      <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                        <Icon name="HeartIcon" size={28} className="text-secondary" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">
                        Patient Intake Bottlenecks
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        Healthcare providers waste 30% of front-desk staff time on manual form entry. Handwritten patient intake forms create transcription errors that delay treatment and violate HIPAA compliance.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">Handwriting Interpretation</div>
                            <div className="text-sm text-muted-foreground">Staff spend 8 minutes per form deciphering handwritten medical histories and insurance details</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">EHR Entry Delays</div>
                            <div className="text-sm text-muted-foreground">24-hour lag between patient visit and complete EHR record availability</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="CheckCircleIcon" size={24} className="text-success mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-success">Our Solution: HIPAA OCR</div>
                            <div className="text-sm text-muted-foreground">Extract patient data from handwritten forms with 98% accuracy. Direct EHR integration with encrypted PHI handling.</div>
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
                        Application Processing Nightmare
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        Property managers lose qualified tenants to competitors due to 72-hour application processing times. Manual parsing of rental applications into Yardi/AppFolio creates data inconsistencies and compliance risks.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">Slow Approval Cycles</div>
                            <div className="text-sm text-muted-foreground">3-day turnaround from application to approval decision causes 40% applicant drop-off</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="XCircleIcon" size={24} className="text-destructive mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground">Manual Data Entry</div>
                            <div className="text-sm text-muted-foreground">Staff manually type 50+ fields per application into property management systems</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Icon name="CheckCircleIcon" size={24} className="text-success mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-success">Our Solution: Auto-Parsing</div>
                            <div className="text-sm text-muted-foreground">Parse rental applications into Yardi/AppFolio in 30 seconds. Auto-trigger background checks and credit pulls.</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="glassmorphism rounded-xl p-6">
                      <div className="space-y-4">
                        <div className="text-center mb-4">
                          <div className="text-sm text-muted-foreground mb-2">Application Processing Time</div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <span className="text-sm text-foreground">Receive Application</span>
                            <Icon name="DocumentIcon" size={20} className="text-primary" />
                          </div>
                          <div className="flex items-center justify-center">
                            <Icon name="ArrowDownIcon" size={20} className="text-primary" />
                          </div>
                          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <span className="text-sm text-foreground">Extract Data</span>
                            <span className="text-xs text-success font-semibold">30 sec</span>
                          </div>
                          <div className="flex items-center justify-center">
                            <Icon name="ArrowDownIcon" size={20} className="text-primary" />
                          </div>
                          <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                            <span className="text-sm text-foreground">Sync to Yardi/AppFolio</span>
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
        <section className="py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Tech Stack
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Enterprise-grade tools powering intelligent data extraction
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glassmorphism rounded-xl p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <Icon name="CodeBracketIcon" size={32} className="text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Python</h3>
                  <p className="text-sm text-muted-foreground">Core processing engine</p>
                </div>
                <div className="glassmorphism rounded-xl p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <Icon name="EyeIcon" size={32} className="text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">AWS Textract</h3>
                  <p className="text-sm text-muted-foreground">OCR & document analysis</p>
                </div>
                <div className="glassmorphism rounded-xl p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <Icon name="CpuChipIcon" size={32} className="text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">OpenAI Vision</h3>
                  <p className="text-sm text-muted-foreground">Context understanding</p>
                </div>
                <div className="glassmorphism rounded-xl p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <Icon name="CircleStackIcon" size={32} className="text-success mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">Supabase</h3>
                  <p className="text-sm text-muted-foreground">Real-time database sync</p>
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