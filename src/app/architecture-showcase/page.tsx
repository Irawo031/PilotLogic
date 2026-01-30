import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import SystemArchitectureSection from './components/SystemArchitectureSection';
import TechStackSection from './components/TechStackSection';
import IntegrationSection from './components/IntegrationSection';
import SecuritySection from './components/SecuritySection';
import PerformanceSection from './components/PerformanceSection';
import CodeExamplesSection from './components/CodeExamplesSection';
import CTASection from './components/CTASection';
import Footer from '@/components/common/Footer';
import BackToTop from '@/components/common/BackToTop';

export const metadata: Metadata = {
  title: 'Business Systems Architecture | Designing Scalable Logic',
  description: 'We don\'t guess; we engineer. View our blueprints for scalable, self-healing business logic systems.',
};

export default function ArchitectureShowcasePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SystemArchitectureSection />
        <TechStackSection />
        <IntegrationSection />
        <SecuritySection />
        <PerformanceSection />
        <CodeExamplesSection />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}