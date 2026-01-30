'use client';

import { useState } from 'react';
import CaseStudyCard from './CaseStudyCard';
import IndustryFilter from './IndustryFilter';
import ROICalculator from './ROICalculator';
import TestimonialCard from './TestimonialCard';

interface CaseStudy {
  industry: string;
  companySize: string;
  challenge: string;
  solution: string;
  metrics: Array<{label: string;value: string;improvement: string;}>;
  timeline: string;
  automationType: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  metrics: string[];
}

const ResultsInteractive = () => {
  const [filters, setFilters] = useState({
    industry: 'all',
    size: 'all',
    type: 'all'
  });

  const caseStudies: CaseStudy[] = [
  {
    industry: 'Healthcare',
    companySize: 'Medium (51-500)',
    challenge: 'Manual patient data entry consuming 200+ hours weekly across multiple departments. High error rates in insurance claims processing leading to delayed reimbursements and revenue loss. Disconnected systems requiring duplicate data entry.',
    solution: 'Implemented intelligent data extraction system with automated validation and cross-system synchronization. Built custom workflow automation for claims processing with real-time error detection. Integrated electronic health records with billing systems for seamless data flow.',
    metrics: [
    { label: 'Processing Time', value: '92%', improvement: '92% faster' },
    { label: 'Annual Savings', value: '$145K', improvement: '$145K saved' },
    { label: 'Error Rate', value: '0.2%', improvement: '98% reduction' }],

    timeline: '8 weeks',
    automationType: 'data'
  },
  {
    industry: 'Finance',
    companySize: 'Large (500+)',
    challenge: 'Compliance reporting requiring manual data aggregation from 15+ systems. Month-end close process taking 12 days with multiple reconciliation cycles. Risk of regulatory violations due to manual oversight gaps.',
    solution: 'Developed automated compliance reporting infrastructure with real-time data aggregation. Created intelligent reconciliation system with anomaly detection and automated corrections. Built audit trail system with complete transaction visibility and regulatory compliance.',
    metrics: [
    { label: 'Close Time', value: '85%', improvement: '85% faster' },
    { label: 'Cost Reduction', value: '$280K', improvement: '$280K annually' },
    { label: 'Compliance', value: '100%', improvement: 'Zero violations' }],

    timeline: '12 weeks',
    automationType: 'workflow'
  },
  {
    industry: 'Manufacturing',
    companySize: 'Medium (51-500)',
    challenge: 'Inventory management requiring daily manual counts and spreadsheet updates. Production scheduling based on outdated information causing material shortages. Supply chain visibility limited to manual phone calls and email chains.',
    solution: 'Implemented real-time inventory tracking with automated reorder triggers. Built predictive production scheduling system using historical data and demand forecasting. Created integrated supply chain dashboard with automated vendor communication.',
    metrics: [
    { label: 'Inventory Accuracy', value: '99.8%', improvement: '99.8% accurate' },
    { label: 'Carrying Costs', value: '$95K', improvement: '$95K reduced' },
    { label: 'Stockouts', value: '0', improvement: 'Zero incidents' }],

    timeline: '10 weeks',
    automationType: 'integration'
  },
  {
    industry: 'Retail',
    companySize: 'Small (1-50)',
    challenge: 'Manual order processing across multiple sales channels causing fulfillment delays. Inventory synchronization requiring daily manual updates across platforms. Customer service overwhelmed with order status inquiries.',
    solution: 'Built unified order management system with automated channel synchronization. Implemented real-time inventory updates across all platforms. Created customer self-service portal with automated status notifications.',
    metrics: [
    { label: 'Order Processing', value: '88%', improvement: '88% faster' },
    { label: 'Labor Costs', value: '$65K', improvement: '$65K saved' },
    { label: 'Customer Satisfaction', value: '96%', improvement: '96% rating' }],

    timeline: '6 weeks',
    automationType: 'workflow'
  },
  {
    industry: 'Technology',
    companySize: 'Medium (51-500)',
    challenge: 'Customer onboarding requiring 40+ manual steps across multiple teams. Data migration from legacy systems taking weeks per client. Support ticket routing based on manual review causing response delays.',
    solution: 'Developed automated onboarding workflow with intelligent task routing. Built data migration pipeline with validation and error handling. Implemented AI-powered ticket classification and routing system.',
    metrics: [
    { label: 'Onboarding Time', value: '75%', improvement: '75% reduction' },
    { label: 'Support Efficiency', value: '$110K', improvement: '$110K saved' },
    { label: 'Customer NPS', value: '+42', improvement: '+42 points' }],

    timeline: '9 weeks',
    automationType: 'integration'
  },
  {
    industry: 'Finance',
    companySize: 'Small (1-50)',
    challenge: 'Invoice processing requiring manual data entry and approval routing. Payment reconciliation consuming 15+ hours weekly. Expense report review and approval taking 5-7 days.',
    solution: 'Implemented intelligent invoice processing with automated data extraction. Built automated payment reconciliation with bank feed integration. Created mobile expense approval system with policy enforcement.',
    metrics: [
    { label: 'Processing Speed', value: '94%', improvement: '94% faster' },
    { label: 'Annual Savings', value: '$78K', improvement: '$78K saved' },
    { label: 'Approval Time', value: '24hrs', improvement: 'Same day' }],

    timeline: '7 weeks',
    automationType: 'data'
  },
  {
    industry: 'Logistics',
    companySize: 'Large (500+)',
    challenge: 'Trucking fleet dispatch requiring manual route planning for 200+ daily shipments. Driver communication via phone calls causing delays. Fuel costs and maintenance tracking in spreadsheets leading to budget overruns.',
    solution: 'Built intelligent dispatch system with AI-powered route optimization and real-time traffic integration. Implemented automated driver communication with mobile app integration. Created predictive maintenance system with fuel efficiency tracking.',
    metrics: [
    { label: 'Route Efficiency', value: '94%', improvement: '28% improvement' },
    { label: 'Fuel Savings', value: '$340K', improvement: '$340K annually' },
    { label: 'On-time Delivery', value: '97%', improvement: '97% rate' }],

    timeline: '11 weeks',
    automationType: 'integration'
  },
  {
    industry: 'Finance',
    companySize: 'Medium (51-500)',
    challenge: 'Crypto fund reconciliation requiring manual matching of transactions across 15+ exchanges. Daily position reporting taking 6+ hours with high error risk. Regulatory reporting requiring extensive manual data compilation.',
    solution: 'Developed automated reconciliation engine with multi-exchange API integration. Built real-time position tracking with automated reporting dashboards. Created compliance reporting system with audit trail generation.',
    metrics: [
    { label: 'Reconciliation Time', value: '96%', improvement: '96% faster' },
    { label: 'Accuracy', value: '99.9%', improvement: '99.9% accurate' },
    { label: 'Cost Savings', value: '$185K', improvement: '$185K annually' }],

    timeline: '10 weeks',
    automationType: 'data'
  },
  {
    industry: 'Healthcare',
    companySize: 'Large (500+)',
    challenge: 'Patient intake forms requiring manual data entry from paper documents. Insurance verification taking 20+ minutes per patient. Appointment reminders sent manually causing high no-show rates.',
    solution: 'Implemented digital intake forms with automated data extraction and validation. Built real-time insurance verification with eligibility checking. Created automated appointment reminder system with SMS and email integration.',
    metrics: [
    { label: 'Intake Time', value: '87%', improvement: '87% reduction' },
    { label: 'No-show Rate', value: '65%', improvement: '65% decrease' },
    { label: 'Staff Hours', value: '$220K', improvement: '$220K saved' }],

    timeline: '9 weeks',
    automationType: 'workflow'
  },
  {
    industry: 'Legal',
    companySize: 'Medium (51-500)',
    challenge: 'Contract generation requiring manual drafting from templates. Document review consuming 40+ billable hours per case. Client billing requiring manual time entry and invoice creation.',
    solution: 'Built intelligent contract generation system with clause library and conditional logic. Implemented AI-powered document review with key term extraction. Created automated time tracking with integrated billing system.',
    metrics: [
    { label: 'Contract Speed', value: '82%', improvement: '82% faster' },
    { label: 'Billable Hours', value: '+$450K', improvement: '+$450K revenue' },
    { label: 'Billing Accuracy', value: '99.5%', improvement: '99.5% accurate' }],

    timeline: '12 weeks',
    automationType: 'workflow'
  },
  {
    industry: 'E-commerce',
    companySize: 'Medium (51-500)',
    challenge: 'Shopify returns processing requiring manual inspection and restocking decisions. Customer refund requests taking 5-7 days to process. Return fraud detection relying on manual review.',
    solution: 'Developed automated returns processing with intelligent routing based on product condition. Built instant refund approval system with fraud detection algorithms. Created automated restocking workflow with inventory synchronization.',
    metrics: [
    { label: 'Processing Time', value: '91%', improvement: '91% faster' },
    { label: 'Customer Satisfaction', value: '4.8/5', improvement: '4.8/5 rating' },
    { label: 'Fraud Prevention', value: '$125K', improvement: '$125K saved' }],

    timeline: '8 weeks',
    automationType: 'integration'
  },
  {
    industry: 'Real Estate',
    companySize: 'Small (1-50)',
    challenge: 'Property listing management across multiple platforms requiring manual updates. Lead follow-up relying on manual tracking. Showing scheduling via phone tag causing delays.',
    solution: 'Built unified listing management system with automated multi-platform syndication. Implemented intelligent lead nurturing with automated follow-up sequences. Created self-service showing scheduler with calendar integration.',
    metrics: [
    { label: 'Listing Time', value: '85%', improvement: '85% reduction' },
    { label: 'Lead Response', value: '5 min', improvement: '5 min average' },
    { label: 'Conversions', value: '+38%', improvement: '+38% increase' }],

    timeline: '7 weeks',
    automationType: 'workflow'
  },
  {
    industry: 'Insurance',
    companySize: 'Large (500+)',
    challenge: 'Claims processing requiring manual document review and data entry. Fraud detection relying on random sampling. Policy renewal notifications sent manually causing lapses.',
    solution: 'Implemented AI-powered claims processing with document extraction and validation. Built real-time fraud detection system with pattern recognition. Created automated renewal system with personalized communications.',
    metrics: [
    { label: 'Claims Speed', value: '89%', improvement: '89% faster' },
    { label: 'Fraud Detection', value: '94%', improvement: '94% accuracy' },
    { label: 'Retention', value: '+45%', improvement: '+45% improvement' }],

    timeline: '13 weeks',
    automationType: 'data'
  },
  {
    industry: 'Construction',
    companySize: 'Medium (51-500)',
    challenge: 'Project documentation requiring manual photo uploads and reports. Subcontractor invoicing causing payment delays. Safety incident reporting relying on paper forms.',
    solution: 'Built mobile-first documentation system with automated photo organization and tagging. Implemented automated invoice processing with approval workflows. Created digital safety reporting with real-time alerts.',
    metrics: [
    { label: 'Documentation Time', value: '78%', improvement: '78% reduction' },
    { label: 'Payment Speed', value: '92%', improvement: '92% faster' },
    { label: 'Safety Compliance', value: '100%', improvement: '100% rate' }],

    timeline: '10 weeks',
    automationType: 'workflow'
  },
  {
    industry: 'Marketing',
    companySize: 'Small (1-50)',
    challenge: 'Client reporting requiring manual data aggregation from 10+ platforms. Campaign performance tracking in spreadsheets. Social media scheduling requiring daily manual posts.',
    solution: 'Developed unified reporting dashboard with automated data integration from all platforms. Built real-time campaign tracking with automated alerts. Created intelligent social media scheduler with content optimization.',
    metrics: [
    { label: 'Reporting Time', value: '93%', improvement: '93% reduction' },
    { label: 'Client Capacity', value: '+60%', improvement: '+60% increase' },
    { label: 'Campaign ROI', value: '+35%', improvement: '+35% improvement' }],

    timeline: '8 weeks',
    automationType: 'integration'
  },
  {
    industry: 'Education',
    companySize: 'Medium (51-500)',
    challenge: 'Student enrollment requiring paper applications and manual data entry. Grade tracking in disconnected systems. Parent communication via individual emails causing delays.',
    solution: 'Implemented digital enrollment system with automated document verification. Built unified grade tracking with real-time parent portal access. Created automated parent communication system with progress alerts.',
    metrics: [
    { label: 'Enrollment Time', value: '84%', improvement: '84% faster' },
    { label: 'Admin Workload', value: '72%', improvement: '72% reduction' },
    { label: 'Parent Satisfaction', value: '4.7/5', improvement: '4.7/5 rating' }],

    timeline: '11 weeks',
    automationType: 'workflow'
  }];


  const testimonials: Testimonial[] = [
  {
    quote: 'The automation infrastructure transformed our operations completely. What used to take our team 200 hours per week now runs autonomously with zero errors. The ROI was evident within the first quarter.',
    author: 'Dr. Sarah Mitchell',
    role: 'Chief Operations Officer',
    company: 'Regional Healthcare Network',
    industry: 'Healthcare',
    metrics: ['92% time saved', '$145K annual savings', '0.2% error rate'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_146fd9d8f-1764670824732.png"
  },
  {
    quote: 'We went from 12-day month-end closes to completing everything in under 2 days. The compliance reporting that used to keep our team working weekends now generates automatically with complete accuracy.',
    author: 'Michael Chen',
    role: 'VP of Finance',
    company: 'Global Financial Services',
    industry: 'Finance',
    metrics: ['85% faster close', '$280K cost reduction', '100% compliance'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_17564f8da-1765267891534.png"
  },
  {
    quote: 'The real-time inventory system eliminated our stockout problems entirely. We reduced carrying costs by $95K annually while maintaining 99.8% inventory accuracy. Production scheduling is now predictive instead of reactive.',
    author: 'Jennifer Rodriguez',
    role: 'Director of Operations',
    company: 'Advanced Manufacturing Corp',
    industry: 'Manufacturing',
    metrics: ['99.8% accuracy', '$95K savings', 'Zero stockouts'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_146339571-1767118492411.png"
  },
  {
    quote: 'Order processing that used to take hours now happens in minutes. Our customers love the real-time updates, and our team can focus on growth instead of manual data entry. Best investment we have made.',
    author: 'David Thompson',
    role: 'Founder & CEO',
    company: 'Multi-Channel Retail Co',
    industry: 'Retail',
    metrics: ['88% faster processing', '$65K labor savings', '96% satisfaction'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1cc5ff52a-1765914997611.png"
  },
  {
    quote: 'Fleet dispatch automation saved us $340K in fuel costs alone. Route optimization happens in seconds instead of hours, and our on-time delivery rate jumped to 97%. This system paid for itself in 4 months.',
    author: 'Marcus Williams',
    role: 'Operations Manager',
    company: 'National Logistics Group',
    industry: 'Logistics',
    metrics: ['28% route efficiency', '$340K fuel savings', '97% on-time'],
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces"
  },
  {
    quote: 'Crypto reconciliation that took our team 6 hours daily now completes in 15 minutes with 99.9% accuracy. We can finally focus on trading strategy instead of manual data matching.',
    author: 'Alexandra Kim',
    role: 'CFO',
    company: 'Digital Asset Fund',
    industry: 'Fintech',
    metrics: ['96% faster reconciliation', '99.9% accuracy', '$185K saved'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1a7faa8af-1768193479865.png"
  },
  {
    quote: 'Patient intake automation reduced our administrative burden by 87%. No-show rates dropped 65% with automated reminders. Our staff can now focus on patient care instead of paperwork.',
    author: 'Dr. Robert Martinez',
    role: 'Medical Director',
    company: 'Community Health Center',
    industry: 'Healthcare',
    metrics: ['87% intake reduction', '65% fewer no-shows', '$220K saved'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1adef8319-1766589453137.png"
  },
  {
    quote: 'Contract generation that used to take 8 hours now takes 90 minutes. We increased billable hours by $450K annually while improving accuracy. This automation made our firm more competitive.',
    author: 'Patricia O\'Connor',
    role: 'Managing Partner',
    company: 'Corporate Law Associates',
    industry: 'Legal',
    metrics: ['82% faster contracts', '+$450K revenue', '99.5% accuracy'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1a7faa8af-1768193479865.png"
  },
  {
    quote: 'Returns processing went from 5-7 days to same-day resolution. Customer satisfaction jumped to 4.8/5, and we prevented $125K in fraud. The system transformed our customer experience.',
    author: 'James Park',
    role: 'Director of Operations',
    company: 'E-commerce Fashion Brand',
    industry: 'E-commerce',
    metrics: ['91% faster processing', '4.8/5 satisfaction', '$125K fraud prevention'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_198aabfbe-1767265264777.png"
  },
  {
    quote: 'Lead response time dropped from hours to 5 minutes. Listing management across platforms became effortless. Our conversion rate increased 38% while reducing admin time by 85%.',
    author: 'Linda Foster',
    role: 'Broker/Owner',
    company: 'Premier Realty Group',
    industry: 'Real Estate',
    metrics: ['5 min response time', '+38% conversions', '85% time saved'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_198aabfbe-1767265264777.png"
  },
  {
    quote: 'Claims processing speed increased 89% while fraud detection accuracy hit 94%. Policy retention improved 45%. This automation infrastructure revolutionized our operations.',
    author: 'Thomas Anderson',
    role: 'VP of Claims',
    company: 'National Insurance Corp',
    industry: 'Insurance',
    metrics: ['89% faster claims', '94% fraud detection', '+45% retention'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_158cc0cec-1767858678193.png"
  },
  {
    quote: 'Project documentation time dropped 78%. Subcontractor payments that took weeks now process in days. Safety compliance reached 100%. Our projects consistently finish on time and under budget.',
    author: 'Carlos Ramirez',
    role: 'Project Manager',
    company: 'Commercial Builders Inc',
    industry: 'Construction',
    metrics: ['78% documentation reduction', '92% faster payments', '100% compliance'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1c5c134c8-1764637735329.png"
  },
  {
    quote: 'Client reporting that consumed 20 hours weekly now takes 90 minutes. We increased client capacity by 60% without hiring. Campaign ROI improved 35% with better insights.',
    author: 'Emily Watson',
    role: 'Agency Owner',
    company: 'Digital Marketing Solutions',
    industry: 'Marketing',
    metrics: ['93% reporting reduction', '+60% client capacity', '+35% campaign ROI'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1a994f05e-1768243104941.png"
  },
  {
    quote: 'Student enrollment went from 3 weeks to 3 days. Administrative workload decreased 72%. Parents love the real-time grade portal. This system modernized our entire institution.',
    author: 'Dr. William Chang',
    role: 'Dean of Admissions',
    company: 'Metropolitan Academy',
    industry: 'Education',
    metrics: ['84% faster enrollment', '72% admin reduction', '4.7/5 parent rating'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_19ad87461-1766776051860.png"
  },
  {
    quote: 'The intelligent automation handles our entire order fulfillment pipeline. Same-day shipping became standard. Customer satisfaction reached 94% while we saved $320K annually.',
    author: 'Rachel Green',
    role: 'COO',
    company: 'Online Marketplace',
    industry: 'E-commerce',
    metrics: ['Same-day fulfillment', '94% satisfaction', '$320K saved'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f6da5eda-1766958863086.png"
  },
  {
    quote: 'Invoice processing automation saved us 94% of processing time. Payment reconciliation is now real-time instead of weekly. We recovered 15 hours per week for strategic work.',
    author: 'Kevin Patel',
    role: 'Finance Director',
    company: 'Tech Startup',
    industry: 'Technology',
    metrics: ['94% faster processing', '$78K saved', 'Same-day approvals'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1a7faa8af-1768193479865.png"
  },
  {
    quote: 'Customer onboarding time dropped 75%. Support ticket resolution improved 85%. Churn rate decreased 45%. This automation infrastructure scaled our SaaS business efficiently.',
    author: 'Sophia Lee',
    role: 'VP of Customer Success',
    company: 'Cloud Software Company',
    industry: 'SaaS',
    metrics: ['70% faster onboarding', '+85% support efficiency', '45% churn reduction'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_198aabfbe-1767265264777.png"
  },
  {
    quote: 'Resume screening that took 40 hours weekly now takes 6 hours. Time-to-hire decreased 65%. Quality of hire improved 38%. Our recruiting team can finally focus on candidate relationships.',
    author: 'Amanda Brooks',
    role: 'Head of Talent',
    company: 'Enterprise Corporation',
    industry: 'HR & Recruiting',
    metrics: ['65% faster hiring', '+38% quality', '80% admin reduction'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f993c86f-1765003275610.png"
  },
  {
    quote: 'Guest service coordination became seamless. Occupancy rate reached 94% with dynamic pricing. Revenue increased 32% while maintaining 4.8/5 guest satisfaction. Outstanding results.',
    author: 'Richard Taylor',
    role: 'General Manager',
    company: 'Boutique Hotel Group',
    industry: 'Hospitality',
    metrics: ['94% occupancy', '4.8/5 satisfaction', '+32% revenue'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_135b3d5e4-1768326793216.png"
  },
  {
    quote: 'Donor retention increased 48%. Administrative costs dropped 68%. Volunteer coordination became effortless. We can now focus on our mission instead of paperwork.',
    author: 'Maria Santos',
    role: 'Executive Director',
    company: 'Community Foundation',
    industry: 'Non-Profit',
    metrics: ['+48% donor retention', '68% cost reduction', '+125% volunteer hours'],
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_106ce6402-1768242950053.png"
  }];


  const filteredCaseStudies = caseStudies.filter((study) => {
    const industryMatch = filters.industry === 'all' || study.industry.toLowerCase() === filters.industry;
    const sizeMatch = filters.size === 'all' || study.companySize.toLowerCase().includes(filters.size);
    const typeMatch = filters.type === 'all' || study.automationType === filters.type;
    return industryMatch && sizeMatch && typeMatch;
  });

  return (
    <div className="space-y-20">
      <section className="py-12">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
                Filter Results by Your Needs
              </h2>
              <p className="text-lg text-muted-foreground">
                Find case studies relevant to your industry and company size
              </p>
            </div>
            
            <IndustryFilter onFilterChange={setFilters} />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
                Case Studies
              </h2>
              <p className="text-lg text-muted-foreground">
                {filteredCaseStudies.length} {filteredCaseStudies.length === 1 ? 'result' : 'results'} found
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCaseStudies.map((study, index) =>
              <CaseStudyCard key={index} {...study} featured={index === 0} />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
                Calculate Your Potential ROI
              </h2>
              <p className="text-lg text-muted-foreground">
                See what automation could mean for your business
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <ROICalculator />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f172a]">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-300">
                Real feedback from businesses we&apos;ve transformed
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) =>
              <TestimonialCard key={index} {...testimonial} />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>);

};

export default ResultsInteractive;