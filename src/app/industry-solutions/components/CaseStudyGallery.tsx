'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface CaseStudy {
  id: string;
  industry: string;
  company: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  alt: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

interface CaseStudyGalleryProps {
  className?: string;
}

export default function CaseStudyGallery({ className = '' }: CaseStudyGalleryProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const industries = [
  { id: 'all', name: 'All Industries' },
  { id: 'healthcare', name: 'Healthcare' },
  { id: 'finance', name: 'Finance' },
  { id: 'manufacturing', name: 'Manufacturing' },
  { id: 'retail', name: 'Retail' }];


  const caseStudies: CaseStudy[] = [
  {
    id: 'healthcare-1',
    industry: 'healthcare',
    company: 'Regional Medical Center',
    challenge: 'Manual patient intake process taking 45 minutes per patient with 8% error rate in data entry',
    solution: 'Automated patient registration system with AI-powered form validation and EHR integration',
    results: ['95% faster intake', '0% error rate', '$240k annual savings'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_169eca111-1764660297970.png",
    alt: 'Modern hospital reception area with digital check-in kiosks and clean white interior',
    testimonial: {
      quote: 'The automation transformed our patient experience. What used to take 45 minutes now takes 2 minutes, and our staff can focus on patient care instead of paperwork.',
      author: 'Dr. Sarah Mitchell',
      role: 'Chief Operations Officer'
    }
  },
  {
    id: 'finance-1',
    industry: 'finance',
    company: 'Capital Investment Group',
    challenge: 'Manual compliance reporting requiring 160 hours monthly with frequent regulatory audit issues',
    solution: 'Automated compliance monitoring system with real-time regulatory updates and audit trail generation',
    results: ['90% time reduction', '100% audit compliance', '$180k saved annually'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ff08559a-1765030143856.png",
    alt: 'Financial analyst reviewing data on multiple computer screens in modern office',
    testimonial: {
      quote: 'Pilot Logic Systems built us an infrastructure that not only saves time but gives us confidence in our compliance posture. Zero audit findings since implementation.',
      author: 'Michael Chen',
      role: 'VP of Compliance'
    }
  },
  {
    id: 'manufacturing-1',
    industry: 'manufacturing',
    company: 'Precision Parts Manufacturing',
    challenge: 'Inventory management chaos with 12% stockout rate and $500k in excess inventory',
    solution: 'Predictive inventory system with demand forecasting and automated reordering workflows',
    results: ['85% fewer stockouts', '$450k inventory reduction', '92% forecast accuracy'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_137c3a868-1769200761642.png",
    alt: 'Automated manufacturing facility with robotic arms and organized inventory shelves',
    testimonial: {
      quote: 'The system pays for itself every quarter. We went from constant firefighting to predictable operations. Our customers notice the difference.',
      author: 'James Rodriguez',
      role: 'Operations Director'
    }
  },
  {
    id: 'retail-1',
    industry: 'retail',
    company: 'Metro Retail Chain',
    challenge: 'Manual order processing across 45 locations causing 3-day fulfillment delays and customer complaints',
    solution: 'Centralized order management system with automated routing and real-time inventory visibility',
    results: ['Same-day fulfillment', '94% customer satisfaction', '$320k cost reduction'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18ee94cf0-1768855842453.png",
    alt: 'Modern retail store interior with organized product displays and digital inventory system',
    testimonial: {
      quote: 'Customer complaints dropped by 87% in the first month. The system handles complexity we could never manage manually across our locations.',
      author: 'Lisa Thompson',
      role: 'Chief Retail Officer'
    }
  }];


  const filteredCaseStudies = selectedIndustry === 'all' ?
  caseStudies :
  caseStudies.filter((study) => study.industry === selectedIndustry);

  return (
    <section className={`py-20 px-6 lg:px-12 bg-card/30 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">
            Real Results
            <span className="text-primary"> Across Industries</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've transformed operations for businesses like yours with quantified outcomes and transparent methodologies.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {industries.map((industry) =>
          <button
            key={industry.id}
            onClick={() => setSelectedIndustry(industry.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            selectedIndustry === industry.id ?
            'bg-primary text-primary-foreground shadow-interactive' :
            'bg-card text-foreground hover:bg-muted border border-border'}`
            }>

              {industry.name}
            </button>
          )}
        </div>

        <div className="space-y-8">
          {filteredCaseStudies.map((study) =>
          <div
            key={study.id}
            className="glassmorphism rounded-2xl overflow-hidden hover:shadow-card-hover transition-all duration-300">

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <AppImage
                  src={study.image}
                  alt={study.alt}
                  className="w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
                </div>

                <div className="p-8 space-y-6">
                  <div>
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{study.company}</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="ExclamationCircleIcon" size={18} className="text-warning" />
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                          Challenge
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="LightBulbIcon" size={18} className="text-primary" />
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                          Solution
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <Icon name="ChartBarIcon" size={18} className="text-success" />
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                          Results
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {study.results.map((result, idx) =>
                      <div
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-success/10 border border-success/20">

                            <span className="text-sm font-semibold text-success">{result}</span>
                          </div>
                      )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <blockquote className="relative">
                      <Icon
                      name="ChatBubbleLeftIcon"
                      size={24}
                      className="text-primary/20 absolute -top-2 -left-2" />

                      <p className="text-sm text-muted-foreground italic pl-6 mb-3">
                        "{study.testimonial.quote}"
                      </p>
                      <footer className="pl-6">
                        <div className="font-semibold text-foreground">{study.testimonial.author}</div>
                        <div className="text-xs text-muted-foreground">{study.testimonial.role}</div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}