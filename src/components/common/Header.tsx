'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Image from 'next/image';

interface HeaderProps {
  className?: string;
}

interface SubMenuItem {
  label: string;
  href: string;
  description?: string;
}

interface NavigationItem {
  label: string;
  href?: string;
  icon: string;
  subItems?: SubMenuItem[];
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  const navigationItems: NavigationItem[] = [
    { label: 'Home', href: '/', icon: 'HomeIcon' },
    { label: 'Expertise', href: '/expertise', icon: 'LightBulbIcon' },
    { label: 'Industry Solutions', href: '/industry-solutions', icon: 'BuildingOfficeIcon' },
    { 
      label: 'Solution Hub', 
      icon: 'CubeIcon',
      subItems: [
        { 
          label: 'Intelligent Ingestion', 
          href: '/solutions/data-ingestion',
          description: 'AI-driven data extraction for logistics & healthcare'
        },
        { 
          label: 'Financial Ops', 
          href: '/solutions/financial-ops',
          description: 'Autonomous financial reconciliation'
        },
        { 
          label: 'Onboarding Engine', 
          href: '/solutions/onboarding',
          description: 'Zero-touch client onboarding'
        },
        { 
          label: 'Data Sync Core', 
          href: '/solutions/sync',
          description: 'Unified enterprise architecture'
        },
      ]
    },
    { 
      label: 'Architecture', 
      icon: 'CubeTransparentIcon',
      subItems: [
        { 
          label: 'System Architecture', 
          href: '/architecture-showcase',
          description: 'Explore our technical infrastructure'
        },
        { 
          label: 'Workflows', 
          href: '/automation-architectures',
          description: 'Automation architecture patterns'
        },
        { 
          label: 'Methodology', 
          href: '/methodology',
          description: 'Our proven development process'
        },
      ]
    },
    { label: 'Results', href: '/results', icon: 'ChartBarIcon' },
    { label: 'About Us', href: '/about-us', icon: 'UserGroupIcon' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [closeTimeout]);

  const handleMouseEnter = (label: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
    setCloseTimeout(timeout);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileExpandedMenu(null);
  };

  const toggleMobileSubmenu = (label: string) => {
    setMobileExpandedMenu(mobileExpandedMenu === label ? null : label);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glassmorphism-header shadow-md' : 'bg-card'
        } ${className}`}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className="flex items-center space-x-3 group"
              onClick={closeMobileMenu}
            >
              <div className="relative h-16 w-auto">
                <Image
                  src="/assets/images/Pilot-1769732128759.png"
                  alt="Pilot Logic Systems Logo"
                  width={240}
                  height={64}
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.subItems && handleMouseEnter(item.label)}
                  onMouseLeave={() => item.subItems && handleMouseLeave()}
                >
                  {item.subItems ? (
                    <>
                      <button
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-all duration-200"
                      >
                        <Icon name={item.icon as any} size={18} />
                        <span>{item.label}</span>
                        <Icon name="ChevronDownIcon" size={16} />
                      </button>
                      {openDropdown === item.label && (
                        <div className="absolute top-full left-0 pt-2">
                          <div className="w-80 glassmorphism rounded-xl shadow-xl border border-border overflow-hidden">
                            <div className="py-2">
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="block px-4 py-3 hover:bg-muted transition-colors duration-200"
                                >
                                  <div className="font-medium text-foreground text-sm">{subItem.label}</div>
                                  {subItem.description && (
                                    <div className="text-xs text-muted-foreground mt-1">{subItem.description}</div>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-all duration-200"
                    >
                      <Icon name={item.icon as any} size={18} />
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://calendly.com/pilotlogicsystems/30min"
                className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors duration-200"
              >
                Book System Audit
              </a>
              <a
                href="mailto:chris@pilotlogicsystems.com"
                className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-bold hover:shadow-interactive hover:-translate-y-0.5 transition-all duration-200"
              >
                Contact Us
              </a>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <Icon
                name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
                size={24}
              />
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-background"
            onClick={closeMobileMenu}
          />
          <nav className="absolute top-20 left-0 right-0 bottom-0 bg-card overflow-y-auto">
            <div className="px-6 py-8 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(item.label)}
                        className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-all duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          <Icon name={item.icon as any} size={20} />
                          <span>{item.label}</span>
                        </div>
                        <Icon 
                          name={mobileExpandedMenu === item.label ? 'ChevronUpIcon' : 'ChevronDownIcon'} 
                          size={20} 
                        />
                      </button>
                      {mobileExpandedMenu === item.label && (
                        <div className="ml-8 mt-2 space-y-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={closeMobileMenu}
                              className="block px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-200"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      onClick={closeMobileMenu}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-all duration-200"
                    >
                      <Icon name={item.icon as any} size={20} />
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-6 space-y-3">
                <a
                  href="https://calendly.com/pilotlogicsystems/30min"
                  className="block w-full px-6 py-3 text-center text-base font-semibold text-foreground bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-200"
                >
                  Book System Audit
                </a>
                <a
                  href="mailto:chris@pilotlogicsystems.com"
                  className="block w-full px-6 py-3 text-center bg-primary text-primary-foreground rounded-lg text-base font-bold hover:shadow-interactive transition-all duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;