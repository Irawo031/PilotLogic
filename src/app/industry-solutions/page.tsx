import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import IndustrySolutionsInteractive from './components/IndustrySolutionsInteractive';
import Footer from '@/components/common/Footer';
import BackToTop from '@/components/common/BackToTop';

export const metadata: Metadata = {
  title: 'Automation Solutions for Logistics, Fintech, & Healthcare',
  description: 'Industry-specific automation workflows. From 3PL Warehouse Management to HIPAA-compliant patient intake. See how we solve your sector\'s bottlenecks.',
};

export default function IndustrySolutionsPage() {
  return (
    <>
      <Header />
      <IndustrySolutionsInteractive />
      <Footer />
      <BackToTop />
    </>
  );
}