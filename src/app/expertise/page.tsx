import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import TechStackSection from './components/TechStackSection';
import ArchitectureSection from './components/ArchitectureSection';
import ProcessSection from './components/ProcessSection';
import CodeTransparencySection from './components/CodeTransparencySection';
import CTASection from './components/CTASection';
import Footer from '@/components/common/Footer';
import BackToTop from '@/components/common/BackToTop';

export const metadata: Metadata = {
  title: 'Automation Consulting & Workflow Automation Expertise',
  description: 'Tool-agnostic automation consulting: workflow design, integrations, approvals, reporting, and reliability. Built for operators and executives. Book Us Now.',
};

export default function ExpertisePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CapabilitiesSection />
        <TechStackSection />
        <ArchitectureSection />
        <ProcessSection />
        <CodeTransparencySection />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}