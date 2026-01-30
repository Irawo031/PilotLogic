import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './homepage/components/HeroSection';
import SolutionsShowcase from './homepage/components/SolutionsShowcase';
import TechStackMarquee from './homepage/components/TechStackMarquee';
import CodeTransparency from './homepage/components/CodeTransparency';
import MethodologyTimeline from './homepage/components/MethodologyTimeline';
import ResultsSection from './homepage/components/ResultsSection';
import SocialProofSection from './homepage/components/SocialProofSection';
import ROICalculator from './homepage/components/ROICalculator';
import FAQSection from './homepage/components/FAQSection';
import CTASection from './homepage/components/CTASection';
import Footer from '@/components/common/Footer';
import BackToTop from '@/components/common/BackToTop';

export const metadata: Metadata = {
  title: 'Pilot Logic Systems | Enterprise Automation & Operations Infrastructure',
  description: 'We architect digital infrastructure for Logistics, Finance, and Healthcare. Replace manual data entry with autonomous logic systems (Make.com, Python, API). Book your audit.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SolutionsShowcase />
        <TechStackMarquee />
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
