import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ResultsHero from './components/ResultsHero';
import MetricsOverview from './components/MetricsOverview';
import ResultsInteractive from './components/ResultsInteractive';
import CTASection from './components/CTASection';
import Footer from '@/components/common/Footer';
import BackToTop from '@/components/common/BackToTop';

export const metadata: Metadata = {
  title: 'Automation Case Studies & ROI | Pilot Logic Results',
  description: 'See how we saved 10,000+ hours for Logistics and Finance firms. Real numbers, real ROI, real efficiency.',
};

export default function ResultsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ResultsHero />
        <MetricsOverview />
        <ResultsInteractive />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}