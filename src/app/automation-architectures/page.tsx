import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import AutomationArchitecturesInteractive from './components/AutomationArchitecturesInteractive';

export const metadata: Metadata = {
  title: 'Automation Workflow Library | Visual Diagrams & Templates',
  description: 'Browse our library of automation schematics. See visual examples of Order-to-Cash, Procure-to-Pay, and Lead-to-Close workflows.',
};

export default function AutomationArchitecturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AutomationArchitecturesInteractive />
    </div>
  );
}