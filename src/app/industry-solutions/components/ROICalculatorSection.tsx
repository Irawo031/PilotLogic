'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ROICalculatorSectionProps {
  className?: string;
}

export default function ROICalculatorSection({ className = '' }: ROICalculatorSectionProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [employees, setEmployees] = useState(10);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(50);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className={`py-20 px-6 lg:px-12 ${className}`}>
        <div className="max-w-5xl mx-auto">
          <div className="glassmorphism rounded-2xl p-8 lg:p-12">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-muted rounded w-3/4 mx-auto" />
              <div className="h-4 bg-muted rounded w-1/2 mx-auto" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="h-32 bg-muted rounded" />
                <div className="h-32 bg-muted rounded" />
                <div className="h-32 bg-muted rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const weeklyHours = employees * hoursPerWeek;
  const annualHours = weeklyHours * 52;
  const currentAnnualCost = annualHours * hourlyRate;
  const automationReduction = 0.9;
  const savedHours = annualHours * automationReduction;
  const annualSavings = savedHours * hourlyRate;
  const implementationCost = 60000;
  const roi = ((annualSavings - implementationCost) / implementationCost) * 100;
  const paybackMonths = (implementationCost / (annualSavings / 12)).toFixed(1);

  return (
    <section className={`py-20 px-6 lg:px-12 ${className}`}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">
            Calculate Your
            <span className="text-primary"> ROI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the quantified impact of automation on your operations—transparency by default.
          </p>
        </div>

        <div className="glassmorphism rounded-2xl p-8 lg:p-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <label className="flex items-center space-x-2 text-sm font-semibold text-foreground">
                <Icon name="UsersIcon" size={18} className="text-primary" />
                <span>Number of Employees</span>
              </label>
              <input
                type="number"
                value={employees}
                onChange={(e) => setEmployees(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                min="1"
              />
            </div>

            <div className="space-y-3">
              <label className="flex items-center space-x-2 text-sm font-semibold text-foreground">
                <Icon name="ClockIcon" size={18} className="text-primary" />
                <span>Hours/Week on Manual Tasks</span>
              </label>
              <input
                type="number"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                min="1"
              />
            </div>

            <div className="space-y-3">
              <label className="flex items-center space-x-2 text-sm font-semibold text-foreground">
                <Icon name="CurrencyDollarIcon" size={18} className="text-primary" />
                <span>Average Hourly Rate ($)</span>
              </label>
              <input
                type="number"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                min="1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-border">
            <div className="text-center space-y-2">
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Current Annual Cost
              </div>
              <div className="text-3xl font-bold text-destructive">
                ${currentAnnualCost.toLocaleString()}
              </div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Annual Savings
              </div>
              <div className="text-3xl font-bold text-success">
                ${annualSavings.toLocaleString()}
              </div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                First Year ROI
              </div>
              <div className="text-3xl font-bold text-primary">
                {roi.toFixed(0)}%
              </div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Payback Period
              </div>
              <div className="text-3xl font-bold text-primary">
                {paybackMonths} months
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <div className="flex items-start space-x-3 p-4 rounded-lg bg-primary/10 border border-primary/20">
              <Icon name="InformationCircleIcon" size={20} className="text-primary mt-0.5 flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <strong className="text-foreground">Based on 90% automation efficiency:</strong> This calculation assumes typical automation results from our implementations. Your actual savings may vary based on process complexity and current efficiency levels. Book a system audit for a customized analysis.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}