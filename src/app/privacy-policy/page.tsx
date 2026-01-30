import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import BackToTop from '@/components/common/BackToTop';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Privacy Policy - PilotLogicSystems',
  description: 'Privacy Policy for Pilot Logic Systems - Learn how we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 30, 2026';

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Icon name="ShieldCheckIcon" size={20} className="text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Legal Information
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last Updated: {lastUpdated}
            </p>
          </div>

          <div className="glassmorphism rounded-2xl p-8 lg:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                1. Information We Collect
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Pilot Logic Systems ("we," "our," or "us") collects information to provide and improve our automation services. The types of information we collect include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, and company details when you schedule consultations or request information.</li>
                  <li><strong>Business Information:</strong> Details about your operations, processes, and automation needs shared during consultations and project engagements.</li>
                  <li><strong>Technical Information:</strong> System configurations, integration requirements, and technical specifications necessary for automation implementation.</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.</li>
                  <li><strong>Communication Records:</strong> Correspondence via email, phone, or other communication channels related to our services.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                2. How We Use Your Information
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We use the collected information for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Service Delivery:</strong> To provide automation consulting, system implementation, and ongoing support services.</li>
                  <li><strong>Communication:</strong> To respond to inquiries, schedule consultations, and provide updates about our services.</li>
                  <li><strong>System Development:</strong> To design, build, and deploy custom automation solutions tailored to your business needs.</li>
                  <li><strong>Service Improvement:</strong> To analyze usage patterns and improve our methodologies, tools, and service offerings.</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.</li>
                  <li><strong>Security:</strong> To protect against fraud, unauthorized access, and other security threats.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                3. Data Storage and Security
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We implement enterprise-grade security measures to protect your information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Encryption:</strong> All data transmitted between your systems and ours is encrypted using industry-standard SSL/TLS protocols.</li>
                  <li><strong>Access Controls:</strong> Strict access controls ensure only authorized personnel can access your information.</li>
                  <li><strong>Secure Infrastructure:</strong> We utilize secure cloud infrastructure with regular security audits and monitoring.</li>
                  <li><strong>Data Retention:</strong> We retain your information only as long as necessary to provide services and comply with legal obligations.</li>
                  <li><strong>Backup Systems:</strong> Regular backups ensure data availability and disaster recovery capabilities.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                4. Third-Party Services
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We may use third-party services to support our operations, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Cloud Hosting:</strong> AWS and other cloud providers for secure infrastructure hosting.</li>
                  <li><strong>Communication Tools:</strong> Email services and scheduling platforms (e.g., Calendly) for client communication.</li>
                  <li><strong>Analytics:</strong> Website analytics tools to understand user behavior and improve our services.</li>
                  <li><strong>AI Services:</strong> OpenAI and similar platforms for automation processing when explicitly agreed upon in project scope.</li>
                </ul>
                <p>
                  These third parties are contractually obligated to protect your information and use it only for the purposes we specify.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                5. Your Rights
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request access to the personal information we hold about you.</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal retention requirements.</li>
                  <li><strong>Data Portability:</strong> Request a copy of your data in a structured, machine-readable format.</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time.</li>
                  <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances.</li>
                </ul>
                <p>
                  To exercise these rights, contact us at <a href="mailto:chris@pilotlogicsystems.com" className="text-primary hover:underline">chris@pilotlogicsystems.com</a>.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                6. Cookies and Tracking
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our website uses cookies and similar tracking technologies to enhance user experience and analyze website performance. You can control cookie preferences through your browser settings.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                7. Data Sharing and Disclosure
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We do not sell, rent, or trade your personal information. We may share information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>To protect our rights, property, or safety, or that of others</li>
                  <li>In connection with a business transfer, merger, or acquisition</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                8. International Data Transfers
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If you are located outside the United States, please note that we may transfer your information to and process it in the United States. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                9. Children's Privacy
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                10. Changes to This Policy
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We may update this Privacy Policy periodically. We will notify you of significant changes by posting the updated policy on our website with a new "Last Updated" date.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                11. Contact Us
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
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
