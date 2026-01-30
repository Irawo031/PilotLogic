'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ROICalculatorProps {
  className?: string;
}

const ROICalculator = ({ className = '' }: ROICalculatorProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [employees, setEmployees] = useState(10);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(50);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const calculateSavings = () => {
    if (!isHydrated) {
      return { weekly: 0, monthly: 0, annual: 0, timeReduction: 0 };
    }

    const automationEfficiency = 0.9;
    const weeklyHoursSaved = employees * hoursPerWeek * automationEfficiency;
    const weeklySavings = weeklyHoursSaved * hourlyRate;
    const monthlySavings = weeklySavings * 4.33;
    const annualSavings = monthlySavings * 12;

    return {
      weekly: Math.round(weeklySavings),
      monthly: Math.round(monthlySavings),
      annual: Math.round(annualSavings),
      timeReduction: Math.round(weeklyHoursSaved),
    };
  };

  const savings = calculateSavings();

  return (
    <section className={`py-20 ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Calculate Your Potential
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-4">
            ROI Calculator
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how much time and money your business could save with intelligent automation infrastructure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glassmorphism rounded-2xl p-8 space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Your Current Operations</h3>

            <div className="space-y-6">
              <div>
                <label className="flex items-center justify-between text-sm font-medium text-foreground mb-3">
                  <span>Number of Employees</span>
                  <span className="text-primary">{employees}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>1</span>
                  <span>100</span>
                </div>
              </div>

              <div>
                <label className="flex items-center justify-between text-sm font-medium text-foreground mb-3">
                  <span>Manual Hours Per Week (per employee)</span>
                  <span className="text-primary">{hoursPerWeek}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>1h</span>
                  <span>40h</span>
                </div>
              </div>

              <div>
                <label className="flex items-center justify-between text-sm font-medium text-foreground mb-3">
                  <span>Average Hourly Rate ($)</span>
                  <span className="text-primary">${hourlyRate}</span>
                </label>
                <input
                  type="range"
                  min="20"
                  max="200"
                  step="10"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>$20</span>
                  <span>$200</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="InformationCircleIcon" size={16} />
                <span>Calculations based on 90% automation efficiency</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Projected Savings</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="ClockIcon" size={24} className="text-primary" />
                    <span className="text-sm text-muted-foreground">Weekly Time Saved</span>
                  </div>
                  <span className="text-2xl font-bold text-foreground">
                    {isHydrated ? savings.timeReduction : 0}h
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="CurrencyDollarIcon" size={24} className="text-success" />
                    <span className="text-sm text-muted-foreground">Weekly Savings</span>
                  </div>
                  <span className="text-2xl font-bold text-foreground">
                    ${isHydrated ? savings.weekly.toLocaleString() : 0}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="CalendarIcon" size={24} className="text-warning" />
                    <span className="text-sm text-muted-foreground">Monthly Savings</span>
                  </div>
                  <span className="text-2xl font-bold text-foreground">
                    ${isHydrated ? savings.monthly.toLocaleString() : 0}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-primary/10 border border-primary rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="ChartBarIcon" size={24} className="text-primary" />
                    <span className="text-sm font-semibold text-foreground">Annual Savings</span>
                  </div>
                  <span className="text-3xl font-bold text-primary">
                    ${isHydrated ? savings.annual.toLocaleString() : 0}
                  </span>
                </div>
              </div>
            </div>

            <div className="glassmorphism rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <Icon name="LightBulbIcon" size={24} className="text-warning flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Ready to realize these savings?</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Book a free system audit to discover your automation opportunities
                  </p>
                  <a
                    href="/methodology"
                    className="inline-flex items-center space-x-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    <span>Schedule Audit</span>
                    <Icon name="ArrowRightIcon" size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;