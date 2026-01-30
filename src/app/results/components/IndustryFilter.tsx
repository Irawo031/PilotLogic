'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterOption {
  id: string;
  label: string;
  icon: string;
}

interface IndustryFilterProps {
  onFilterChange: (filters: { industry: string; size: string; type: string }) => void;
}

const IndustryFilter = ({ onFilterChange }: IndustryFilterProps) => {
  const [activeIndustry, setActiveIndustry] = useState<string>('all');
  const [activeSize, setActiveSize] = useState<string>('all');
  const [activeType, setActiveType] = useState<string>('all');

  const industries: FilterOption[] = [
    { id: 'all', label: 'All Industries', icon: 'BuildingOfficeIcon' },
    { id: 'healthcare', label: 'Healthcare', icon: 'HeartIcon' },
    { id: 'finance', label: 'Finance', icon: 'BanknotesIcon' },
    { id: 'manufacturing', label: 'Manufacturing', icon: 'CogIcon' },
    { id: 'retail', label: 'Retail', icon: 'ShoppingCartIcon' },
    { id: 'technology', label: 'Technology', icon: 'ComputerDesktopIcon' }
  ];

  const sizes: FilterOption[] = [
    { id: 'all', label: 'All Sizes', icon: 'BuildingOffice2Icon' },
    { id: 'small', label: 'Small (1-50)', icon: 'UserGroupIcon' },
    { id: 'medium', label: 'Medium (51-500)', icon: 'UsersIcon' },
    { id: 'large', label: 'Large (500+)', icon: 'BuildingOfficeIcon' }
  ];

  const types: FilterOption[] = [
    { id: 'all', label: 'All Types', icon: 'Squares2X2Icon' },
    { id: 'workflow', label: 'Workflow', icon: 'ArrowPathIcon' },
    { id: 'data', label: 'Data Processing', icon: 'CircleStackIcon' },
    { id: 'integration', label: 'Integration', icon: 'LinkIcon' },
    { id: 'analytics', label: 'Analytics', icon: 'ChartBarIcon' }
  ];

  const handleFilterChange = (category: 'industry' | 'size' | 'type', value: string) => {
    let newIndustry = activeIndustry;
    let newSize = activeSize;
    let newType = activeType;

    if (category === 'industry') {
      newIndustry = value;
      setActiveIndustry(value);
    } else if (category === 'size') {
      newSize = value;
      setActiveSize(value);
    } else {
      newType = value;
      setActiveType(value);
    }

    onFilterChange({ industry: newIndustry, size: newSize, type: newType });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Industry
        </h3>
        <div className="flex flex-wrap gap-2">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => handleFilterChange('industry', industry.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeIndustry === industry.id
                  ? 'bg-primary text-primary-foreground shadow-interactive'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              <Icon name={industry.icon as any} size={16} />
              <span>{industry.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Company Size
        </h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size.id}
              onClick={() => handleFilterChange('size', size.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSize === size.id
                  ? 'bg-primary text-primary-foreground shadow-interactive'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              <Icon name={size.icon as any} size={16} />
              <span>{size.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Automation Type
        </h3>
        <div className="flex flex-wrap gap-2">
          {types.map((type) => (
            <button
              key={type.id}
              onClick={() => handleFilterChange('type', type.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeType === type.id
                  ? 'bg-primary text-primary-foreground shadow-interactive'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              <Icon name={type.icon as any} size={16} />
              <span>{type.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryFilter;