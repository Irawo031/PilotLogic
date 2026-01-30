import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import BackToTop from '@/components/common/BackToTop';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Terms of Service - PilotLogicSystems',
  description: 'Terms of Service for Pilot Logic Systems - Legal framework for our automation services.',
};

export default function TermsOfServicePage() {
  const lastUpdated = 'January 30, 2026';

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Icon name="DocumentTextIcon" size={20} className="text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Legal Agreement
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last Updated: {lastUpdated}
            </p>
          </div>

          <div className="glassmorphism rounded-2xl p-8 lg:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                1. Agreement to Terms
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  By accessing or using the services provided by Pilot Logic Systems ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                2. Service Description
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Pilot Logic Systems provides business automation consulting, system design, implementation, and ongoing support services. Our services include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Process analysis and automation opportunity assessment</li>
                  <li>Custom automation system design and architecture</li>
                  <li>Implementation of automation solutions using various technologies</li>
                  <li>Integration with existing business systems and platforms</li>
                  <li>Training and documentation for implemented systems</li>
                  <li>Ongoing maintenance and support services</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                3. User Responsibilities
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>As a client, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information about your business processes and requirements</li>
                  <li>Maintain the confidentiality of any access credentials provided</li>
                  <li>Use our services in compliance with all applicable laws and regulations</li>
                  <li>Provide timely feedback and approvals during project implementation</li>
                  <li>Ensure your team is available for necessary training and knowledge transfer</li>
                  <li>Not use our services for any illegal or unauthorized purposes</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                4. Payment Terms
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Payment terms are specified in individual service agreements or statements of work. General payment terms include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Project-Based:</strong> Payment milestones tied to project phases and deliverables</li>
                  <li><strong>Retainer:</strong> Monthly recurring fees for ongoing support and maintenance</li>
                  <li><strong>Hourly:</strong> Time-based billing for consulting and ad-hoc services</li>
                  <li><strong>Payment Due:</strong> Invoices are due within 30 days of issuance unless otherwise specified</li>
                  <li><strong>Late Payments:</strong> Late payments may incur interest charges and service suspension</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                5. Intellectual Property Rights
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>5.1 Client Data:</strong> You retain all rights to your business data, processes, and proprietary information.
                </p>
                <p>
                  <strong>5.2 Custom Deliverables:</strong> Upon full payment, you receive ownership of custom code and systems developed specifically for your project, excluding our proprietary methodologies and frameworks.
                </p>
                <p>
                  <strong>5.3 Company Property:</strong> Our methodologies, frameworks, templates, and general-purpose tools remain our intellectual property.
                </p>
                <p>
                  <strong>5.4 Third-Party Components:</strong> Some solutions may incorporate third-party software subject to separate licensing terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                6. Confidentiality
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Business processes, strategies, and operational details</li>
                  <li>Technical specifications and system architectures</li>
                  <li>Financial information and pricing details</li>
                  <li>Customer data and business relationships</li>
                </ul>
                <p>
                  Confidentiality obligations survive the termination of services and remain in effect indefinitely.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                7. Warranties and Disclaimers
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>7.1 Service Warranty:</strong> We warrant that services will be performed in a professional and workmanlike manner consistent with industry standards.
                </p>
                <p>
                  <strong>7.2 Disclaimer:</strong> EXCEPT AS EXPRESSLY PROVIDED, SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
                <p>
                  <strong>7.3 No Guarantee:</strong> While we strive for optimal results, we do not guarantee specific business outcomes, ROI, or performance metrics.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                8. Limitation of Liability
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim</li>
                  <li>We are not liable for indirect, incidental, consequential, or punitive damages</li>
                  <li>We are not liable for losses resulting from your failure to implement recommended security measures</li>
                  <li>We are not liable for third-party service failures or data breaches</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                9. Termination
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>9.1 By Client:</strong> You may terminate services with 30 days written notice. You remain responsible for payment of services rendered through the termination date.
                </p>
                <p>
                  <strong>9.2 By Company:</strong> We may terminate services immediately if you breach these Terms, fail to make timely payments, or engage in conduct that damages our reputation.
                </p>
                <p>
                  <strong>9.3 Effect of Termination:</strong> Upon termination, we will provide you with final deliverables and documentation for work completed and paid for.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                10. Indemnification
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  You agree to indemnify and hold harmless Pilot Logic Systems from claims arising from:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your use of our services in violation of these Terms</li>
                  <li>Your violation of applicable laws or regulations</li>
                  <li>Infringement of third-party rights by your content or data</li>
                  <li>Your failure to maintain adequate security measures</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                11. Dispute Resolution
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>11.1 Negotiation:</strong> Parties agree to attempt to resolve disputes through good-faith negotiation.
                </p>
                <p>
                  <strong>11.2 Mediation:</strong> If negotiation fails, disputes will be submitted to mediation before pursuing litigation.
                </p>
                <p>
                  <strong>11.3 Governing Law:</strong> These Terms are governed by the laws of the jurisdiction where our company is registered.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                12. Changes to Terms
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We reserve the right to modify these Terms at any time. We will notify clients of material changes via email or through our website. Continued use of services after changes constitutes acceptance of modified Terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                13. General Provisions
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>13.1 Entire Agreement:</strong> These Terms, together with any service agreements, constitute the entire agreement between parties.
                </p>
                <p>
                  <strong>13.2 Severability:</strong> If any provision is found unenforceable, remaining provisions remain in effect.
                </p>
                <p>
                  <strong>13.3 No Waiver:</strong> Failure to enforce any provision does not constitute a waiver of that provision.
                </p>
                <p>
                  <strong>13.4 Assignment:</strong> You may not assign these Terms without our written consent.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                14. Contact Information
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  For questions about these Terms of Service, please contact:
                </p>
                <div className="glassmorphism rounded-lg p-6 mt-4">
                  <p className="font-semibold text-foreground mb-2">Pilot Logic Systems</p>
                  <p>Email: <a href="mailto:chris@pilotlogicsystems.com" className="text-primary hover:underline">chris@pilotlogicsystems.com</a></p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
