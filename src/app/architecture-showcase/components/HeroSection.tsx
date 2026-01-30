'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="relative min-h-[60vh] flex items-center justify-center bg-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-muted/50 rounded-full mb-6">
            <Icon name="CodeBracketIcon" size={20} className="text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Technical Architecture</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 font-heading">
            Built on <span className="text-primary">Engineering Precision</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore the systematic thinking and intelligent infrastructure that powers autonomous business operations. Transparency by default.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-background overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 glassmorphism rounded-full mb-6">
          <Icon name="CodeBracketIcon" size={20} className="text-primary" />
          <span className="text-sm font-medium text-muted-foreground">Technical Architecture</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 font-heading">
          Business Systems <span className="text-primary">Architecture</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          We don't guess; we engineer. View our blueprints for scalable, self-healing business logic systems.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#tech-stack"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-interactive hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Explore Tech Stack</span>
            <Icon name="ArrowDownIcon" size={20} />
          </a>
          <a
            href="#code-examples"
            className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            <Icon name="CommandLineIcon" size={20} />
            <span>View Code Examples</span>
          </a>
        </div>
      </div>
    </section>
  );
}