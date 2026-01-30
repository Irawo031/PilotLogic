'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CalculatorInputs {
  employees: number;
  hourlyRate: number;
  hoursPerWeek: number;
  errorRate: number;
}

interface CalculatorResults {
  timeSaved: number;
  costSavings: number;
  errorReduction: number;
  roi: number;
}

const ROICalculator = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [inputs, setInputs] = useState<CalculatorInputs>({
    employees: 10,
    hourlyRate: 50,
    hoursPerWeek: 20,
    errorRate: 5
  });
  const [results, setResults] = useState<CalculatorResults>({
    timeSaved: 0,
    costSavings: 0,
    errorReduction: 0,
    roi: 0
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const weeklyHours = inputs.employees * inputs.hoursPerWeek;
    const timeSavedPercentage = 0.75;
    const hoursSaved = weeklyHours * timeSavedPercentage;
    const annualHoursSaved = hoursSaved * 52;
    const annualCostSavings = annualHoursSaved * inputs.hourlyRate;
    const errorReductionPercentage = 0.95;
    const implementationCost = 50000;
    const roiPercentage = ((annualCostSavings - implementationCost) / implementationCost) * 100;

    setResults({
      timeSaved: Math.round(annualHoursSaved),
      costSavings: Math.round(annualCostSavings),
      errorReduction: Math.round(inputs.errorRate * errorReductionPercentage * 10) / 10,
      roi: Math.round(roiPercentage)
    });
  }, [inputs, isHydrated]);

  const handleInputChange = (field: keyof CalculatorInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  if (!isHydrated) {
    return (
      <div className="glassmorphism rounded-2xl p-8">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-muted rounded w-1/2" />
          <div className="space-y-4">
            <div className="h-20 bg-muted rounded" />
            <div className="h-20 bg-muted rounded" />
            <div className="h-20 bg-muted rounded" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glassmorphism rounded-2xl p-8">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-3 rounded-xl bg-primary/10">
          <Icon name="CalculatorIcon" size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-foreground font-heading">ROI Calculator</h3>
          <p className="text-sm text-muted-foreground">Calculate your potential savings</p>
        </div>
      </div>

      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Number of Employees
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value={inputs.employees}
            onChange={(e) => handleInputChange('employees', parseInt(e.target.value))}
            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between mt-2">
            <span className="text-sm text-muted-foreground">1</span>
            <span className="text-lg font-bold text-primary">{inputs.employees}</span>
            <span className="text-sm text-muted-foreground">100</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Average Hourly Rate ($)
          </label>
          <input
            type="range"
            min="20"
            max="200"
            step="5"
            value={inputs.hourlyRate}
            onChange={(e) => handleInputChange('hourlyRate', parseInt(e.target.value))}
            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between mt-2">
            <span className="text-sm text-muted-foreground">$20</span>
            <span className="text-lg font-bold text-primary">${inputs.hourlyRate}</span>
            <span className="text-sm text-muted-foreground">$200</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Manual Hours Per Week
          </label>
          <input
            type="range"
            min="5"
            max="40"
            value={inputs.hoursPerWeek}
            onChange={(e) => handleInputChange('hoursPerWeek', parseInt(e.target.value))}
            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between mt-2">
            <span className="text-sm text-muted-foreground">5h</span>
            <span className="text-lg font-bold text-primary">{inputs.hoursPerWeek}h</span>
            <span className="text-sm text-muted-foreground">40h</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Current Error Rate (%)
          </label>
          <input
            type="range"
            min="1"
            max="20"
            value={inputs.errorRate}
            onChange={(e) => handleInputChange('errorRate', parseInt(e.target.value))}
            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between mt-2">
            <span className="text-sm text-muted-foreground">1%</span>
            <span className="text-lg font-bold text-primary">{inputs.errorRate}%</span>
            <span className="text-sm text-muted-foreground">20%</span>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-border">
        <h4 className="text-lg font-semibold text-foreground mb-4">Projected Annual Results</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-muted/50 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="ClockIcon" size={20} className="text-primary" />
              <span className="text-sm text-muted-foreground">Time Saved</span>
            </div>
            <div className="text-3xl font-bold text-primary font-heading">
              {results.timeSaved.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">hours per year</div>
          </div>

          <div className="bg-muted/50 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="BanknotesIcon" size={20} className="text-success" />
              <span className="text-sm text-muted-foreground">Cost Savings</span>
            </div>
            <div className="text-3xl font-bold text-success font-heading">
              ${results.costSavings.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">annual savings</div>
          </div>

          <div className="bg-muted/50 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="ShieldCheckIcon" size={20} className="text-warning" />
              <span className="text-sm text-muted-foreground">Error Reduction</span>
            </div>
            <div className="text-3xl font-bold text-warning font-heading">
              {results.errorReduction}%
            </div>
            <div className="text-sm text-muted-foreground">fewer errors</div>
          </div>

          <div className="bg-muted/50 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="ArrowTrendingUpIcon" size={20} className="text-secondary" />
              <span className="text-sm text-muted-foreground">ROI</span>
            </div>
            <div className="text-3xl font-bold text-secondary font-heading">
              {results.roi}%
            </div>
            <div className="text-sm text-muted-foreground">first year</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;