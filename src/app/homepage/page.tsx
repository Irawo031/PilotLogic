import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import TechStackMarquee from './components/TechStackMarquee';
import SolutionsShowcase from './components/SolutionsShowcase';
import CodeTransparency from './components/CodeTransparency';
import MethodologyTimeline from './components/MethodologyTimeline';
import ResultsSection from './components/ResultsSection';
import SocialProofSection from './components/SocialProofSection';
import ROICalculator from './components/ROICalculator';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from '@/components/common/Footer';
import BackToTop from '@/components/common/BackToTop';

export const metadata: Metadata = {
  title: 'PilotLogic Systems | Workflow Automation & Operations Systems',
  description: 'We design, build, and run automation systems that standardize intake, approvals, onboarding, financial ops, and reporting—across your existing tools. Book a consultation.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TechStackMarquee />
        <SolutionsShowcase />
        <CodeTransparency />
        <MethodologyTimeline />
        <ResultsSection />
        <SocialProofSection />
        <ROICalculator />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}