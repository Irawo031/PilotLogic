'use client';

import { useState, useEffect } from 'react';

import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHydrated]);

  const demoSteps = [
    { label: 'Manual Process', icon: 'UserIcon', color: 'text-destructive' },
    { label: 'Automation Layer', icon: 'CogIcon', color: 'text-warning' },
    { label: 'Autonomous System', icon: 'CheckCircleIcon', color: 'text-success' },
  ];

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 glassmorphism rounded-full">
              <Icon name="SparklesIcon" size={16} className="text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Enterprise Automation Infrastructure
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-tight">
              The Operating System for Your Business Infrastructure.
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Replace manual operations with intelligent automation infrastructure. Scale without scaling headcount. Built with enterprise-grade precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/pilotlogicsystems/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg text-base font-bold hover:shadow-interactive hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Book System Audit</span>
                <Icon name="ArrowRightIcon" size={20} />
              </a>
              <a
                href="mailto:chris@pilotlogicsystems.com"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 glassmorphism text-foreground rounded-lg text-base font-semibold hover:border-primary transition-all duration-200"
              >
                <span>Contact Us</span>
                <Icon name="EnvelopeIcon" size={20} />
              </a>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Icon name="ShieldCheckIcon" size={24} className="text-success" />
                <span className="text-sm text-muted-foreground">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="ClockIcon" size={24} className="text-primary" />
                <span className="text-sm text-muted-foreground">90% Time Saved</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glassmorphism rounded-2xl p-8 space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">System Transformation</h3>
                <div className="flex items-center space-x-2">
                  {demoSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 w-8 rounded-full transition-all duration-300 ${
                        index === activeDemo ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {demoSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-500 ${
                      index === activeDemo
                        ? 'glassmorphism border-primary scale-105' :'bg-card/50 opacity-50'
                    }`}
                  >
                    <div className={`p-3 rounded-lg bg-card ${step.color}`}>
                      <Icon name={step.icon as any} size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{step.label}</p>
                      <p className="text-sm text-muted-foreground">
                        {index === 0 && 'Time-consuming manual workflows'}
                        {index === 1 && 'Intelligent process automation'}
                        {index === 2 && 'Self-optimizing infrastructure'}
                      </p>
                    </div>
                    {index === activeDemo && (
                      <Icon name="CheckCircleIcon" size={24} className="text-success" />
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">90%</p>
                    <p className="text-xs text-muted-foreground">Time Reduction</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-success">$120k</p>
                    <p className="text-xs text-muted-foreground">Annual Savings</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-warning">0%</p>
                    <p className="text-xs text-muted-foreground">Error Rate</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;