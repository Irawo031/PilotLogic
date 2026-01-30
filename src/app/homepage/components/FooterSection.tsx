import Icon from '@/components/ui/AppIcon';
import Image from 'next/image';

interface FooterSectionProps {
  className?: string;
}

const FooterSection = ({ className = '' }: FooterSectionProps) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { label: 'Expertise', href: '/expertise' },
      { label: 'Industry Solutions', href: '/industry-solutions' },
      { label: 'Methodology', href: '/methodology' },
      { label: 'Results', href: '/results' },
    ],
    company: [
      { label: 'Architecture Showcase', href: '/architecture-showcase' },
      { label: 'Book System Audit', href: 'https://calendly.com/pilotlogicsystems/30min' },
    ],
    contact: [
      { label: 'chris@pilotlogicsystems.com', href: 'mailto:chris@pilotlogicsystems.com', icon: 'EnvelopeIcon' },
    ],
  };

  return (
    <footer className={`py-16 border-t border-border ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/assets/images/Pilot-1769732128759.png"
                alt="Pilot Logic Systems Logo"
                width={200}
                height={53}
                className="h-auto w-48 object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building intelligent automation infrastructure that transforms how businesses operate. Enterprise-grade precision, complete transparency.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Solutions
            </h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon name={link.icon as any} size={16} />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} PilotLogicSystems. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;