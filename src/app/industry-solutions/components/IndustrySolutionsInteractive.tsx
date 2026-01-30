'use client';

import IndustryHero from './IndustryHero';
import IndustryCard from './IndustryCard';
import ComplianceSection from './ComplianceSection';
import BenchmarkComparison from './BenchmarkComparison';
import IntegrationShowcase from './IntegrationShowcase';
import CaseStudyGallery from './CaseStudyGallery';
import ROICalculatorSection from './ROICalculatorSection';
import CTASection from './CTASection';

export default function IndustrySolutionsInteractive() {
  const industries = [
  {
    id: 'logistics',
    name: 'Logistics & 3PL',
    icon: 'TruckIcon',
    description: 'Create end-to-end visibility with intelligent routing, predictive maintenance, and automated documentation that keeps goods moving efficiently.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15f63d3ca-1767958639289.png",
    alt: 'Large warehouse with automated conveyor systems and organized shipping containers',
    challenges: [
    'Route optimization requiring manual planning',
    'Shipment tracking gaps causing customer complaints',
    'Documentation errors delaying customs clearance',
    'Fleet maintenance scheduling inefficiencies'],

    solutions: [
    'AI-powered route optimization with real-time adjustments',
    'Automated tracking with proactive customer notifications',
    'Intelligent document generation and validation',
    'Predictive maintenance scheduling and alerts'],

    metrics: [
    { label: 'On-time', value: '96%' },
    { label: 'Fuel Costs', value: '22% less' },
    { label: 'Downtime', value: '65% reduced' }]

  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: 'CogIcon',
    description: 'Optimize production workflows with predictive systems that reduce downtime, minimize waste, and create transparent supply chain visibility.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11ae97432-1764653671385.png",
    alt: 'Automated manufacturing facility with robotic arms assembling products on production line',
    challenges: [
    'Inventory management causing 12% stockout rates',
    'Production scheduling inefficiencies and downtime',
    'Quality control requiring manual inspection processes',
    'Supply chain visibility gaps causing delays'],

    solutions: [
    'Predictive inventory with demand forecasting',
    'Intelligent production scheduling with optimization',
    'Automated quality inspection with computer vision',
    'Real-time supply chain tracking and alerts'],

    metrics: [
    { label: 'Stockouts', value: '85% less' },
    { label: 'Downtime', value: '70% reduced' },
    { label: 'Accuracy', value: '99.2%' }]

  },
  {
    id: 'fintech',
    name: 'Fintech',
    icon: 'BanknotesIcon',
    description: 'Build regulatory-compliant automation infrastructure that scales with your growth while maintaining audit trails and enterprise-grade security standards.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_176a2b52d-1767809879750.png",
    alt: 'Financial analyst reviewing market data on multiple computer screens in modern trading floor',
    challenges: [
    'Manual compliance reporting requiring 160+ hours monthly',
    'Transaction reconciliation errors causing audit issues',
    'Client onboarding delays impacting revenue',
    'Risk assessment processes lacking real-time data'],

    solutions: [
    'Automated compliance monitoring with regulatory updates',
    'Intelligent reconciliation with anomaly detection',
    'Streamlined KYC/AML workflows with document verification',
    'Real-time risk scoring and portfolio analysis'],

    metrics: [
    { label: 'Compliance', value: '100%' },
    { label: 'Processing', value: '90% faster' },
    { label: 'Savings', value: '$180k/yr' }]

  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: 'HeartIcon',
    description: 'Transform patient care with intelligent automation that reduces administrative burden while maintaining HIPAA compliance and improving care delivery outcomes.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14c968347-1764642437513.png",
    alt: 'Modern hospital corridor with medical staff using digital tablets for patient care',
    challenges: [
    'Manual patient intake consuming 45+ minutes per patient',
    'Insurance verification delays causing revenue cycle issues',
    'Compliance documentation requiring excessive staff hours',
    'Appointment scheduling conflicts and no-show rates'],

    solutions: [
    'Automated patient registration with AI-powered validation',
    'Real-time insurance verification and pre-authorization',
    'Intelligent compliance monitoring and audit trail generation',
    'Smart scheduling with predictive no-show prevention'],

    metrics: [
    { label: 'Time Saved', value: '95%' },
    { label: 'Error Rate', value: '0%' },
    { label: 'ROI', value: '340%' }]

  },
  {
    id: 'realestate',
    name: 'Real Estate',
    icon: 'HomeIcon',
    description: 'Streamline property management, tenant communications, and transaction workflows with intelligent automation that scales your portfolio without scaling overhead.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_187872587-1767983990151.png",
    alt: 'Modern real estate office with agents reviewing property listings on digital displays',
    challenges: [
    'Tenant screening requiring manual document review',
    'Maintenance requests overwhelming property managers',
    'Lease management and renewal tracking inefficiencies',
    'Financial reporting across multiple properties'],

    solutions: [
    'Automated tenant screening with credit and background checks',
    'Intelligent maintenance ticketing and vendor dispatch',
    'Automated lease tracking with renewal notifications',
    'Consolidated financial reporting and analytics'],

    metrics: [
    { label: 'Screening Time', value: '80% faster' },
    { label: 'Response Time', value: '2 hours' },
    { label: 'Occupancy', value: '98%' }]

  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    icon: 'ShoppingCartIcon',
    description: 'Scale customer experience without scaling headcount through intelligent order management, inventory optimization, and personalized automation.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18ee94cf0-1768855842453.png",
    alt: 'Modern retail store interior with organized product displays and digital inventory management system',
    challenges: [
    'Order processing delays across multiple channels',
    'Inventory synchronization issues causing overselling',
    'Customer service inquiries overwhelming support teams',
    'Returns processing requiring excessive manual work'],

    solutions: [
    'Unified order management with automated routing',
    'Real-time inventory synchronization across channels',
    'AI-powered customer service automation',
    'Intelligent returns processing and restocking'],

    metrics: [
    { label: 'Fulfillment', value: 'Same-day' },
    { label: 'Satisfaction', value: '94%' },
    { label: 'Cost', value: '$320k saved' }]

  },
  {
    id: 'legal',
    name: 'Legal',
    icon: 'ScaleIcon',
    description: 'Automate document generation, case management, and client communications while maintaining confidentiality and compliance with legal standards.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10220f4cc-1768086989436.png",
    alt: 'Law office with attorneys reviewing legal documents on digital screens',
    challenges: [
    'Contract drafting consuming billable hours',
    'Case research requiring extensive manual review',
    'Client intake and onboarding delays',
    'Document management and version control issues'],

    solutions: [
    'Automated contract generation with clause libraries',
    'AI-powered legal research and case analysis',
    'Streamlined client intake with digital workflows',
    'Intelligent document management with version tracking'],

    metrics: [
    { label: 'Drafting Time', value: '75% faster' },
    { label: 'Billable Hours', value: '+35%' },
    { label: 'Accuracy', value: '99.8%' }]

  },
  {
    id: 'construction',
    name: 'Construction',
    icon: 'WrenchScrewdriverIcon',
    description: 'Optimize project management, resource allocation, and compliance tracking with intelligent systems that keep projects on time and on budget.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_137c3a868-1769200761642.png",
    alt: 'Construction site with project managers using tablets to track progress',
    challenges: [
    'Project scheduling conflicts and delays',
    'Material tracking and procurement inefficiencies',
    'Safety compliance documentation burden',
    'Subcontractor coordination and communication gaps'],

    solutions: [
    'Intelligent project scheduling with resource optimization',
    'Automated material tracking and just-in-time ordering',
    'Digital safety compliance with automated reporting',
    'Centralized subcontractor communication platform'],

    metrics: [
    { label: 'On-time Delivery', value: '92%' },
    { label: 'Cost Overruns', value: '60% reduced' },
    { label: 'Safety Incidents', value: '85% less' }]

  },
  {
    id: 'insurance',
    name: 'Insurance',
    icon: 'ShieldCheckIcon',
    description: 'Accelerate claims processing, underwriting, and policy management with intelligent automation that improves accuracy and customer satisfaction.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1370e02cd-1766487882870.png",
    alt: 'Insurance office with agents processing claims on digital systems',
    challenges: [
    'Claims processing requiring manual document review',
    'Underwriting decisions taking weeks',
    'Policy renewal tracking and customer retention',
    'Fraud detection requiring extensive investigation'],

    solutions: [
    'Automated claims processing with document extraction',
    'AI-powered underwriting with risk assessment',
    'Intelligent policy management with renewal automation',
    'Real-time fraud detection and alert systems'],

    metrics: [
    { label: 'Claims Speed', value: '88% faster' },
    { label: 'Fraud Detection', value: '95%' },
    { label: 'Retention', value: '+42%' }]

  },
  {
    id: 'hr',
    name: 'HR & Recruiting',
    icon: 'UserGroupIcon',
    description: 'Transform talent acquisition and employee management with intelligent screening, onboarding, and performance tracking automation.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18127f02f-1764714866990.png",
    alt: 'HR office with recruiters conducting video interviews on multiple screens',
    challenges: [
    'Resume screening consuming excessive recruiter time',
    'Interview scheduling coordination inefficiencies',
    'Employee onboarding requiring manual paperwork',
    'Performance review tracking and documentation'],

    solutions: [
    'AI-powered resume screening and candidate matching',
    'Automated interview scheduling with calendar integration',
    'Digital onboarding workflows with e-signatures',
    'Intelligent performance tracking and review automation'],

    metrics: [
    { label: 'Time-to-Hire', value: '65% faster' },
    { label: 'Quality of Hire', value: '+38%' },
    { label: 'Admin Time', value: '80% reduced' }]

  },
  {
    id: 'marketing',
    name: 'Marketing Agencies',
    icon: 'MegaphoneIcon',
    description: 'Scale campaign management, client reporting, and content workflows with intelligent automation that maximizes creative time and client satisfaction.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11f1d2f44-1764656055734.png",
    alt: 'Marketing agency with team reviewing campaign analytics on large displays',
    challenges: [
    'Campaign reporting requiring manual data aggregation',
    'Client onboarding and approval workflows',
    'Content scheduling across multiple platforms',
    'Performance tracking and ROI calculation'],

    solutions: [
    'Automated campaign reporting with real-time dashboards',
    'Streamlined client workflows with approval automation',
    'Intelligent content scheduling and distribution',
    'Unified performance tracking with ROI analytics'],

    metrics: [
    { label: 'Reporting Time', value: '90% faster' },
    { label: 'Client Capacity', value: '+55%' },
    { label: 'Campaign ROI', value: '+28%' }]

  },
  {
    id: 'saas',
    name: 'SaaS',
    icon: 'CloudIcon',
    description: 'Optimize customer onboarding, support workflows, and subscription management with intelligent automation that scales with your user base.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c7bdb643-1769739085723.png",
    alt: 'SaaS company office with developers monitoring application dashboards',
    challenges: [
    'Customer onboarding requiring manual setup',
    'Support ticket volume overwhelming teams',
    'Subscription billing and payment reconciliation',
    'User engagement tracking and churn prevention'],

    solutions: [
    'Automated customer onboarding with guided workflows',
    'AI-powered support ticket routing and resolution',
    'Intelligent billing automation with payment retry logic',
    'Predictive churn detection with engagement automation'],

    metrics: [
    { label: 'Onboarding Time', value: '70% faster' },
    { label: 'Support Efficiency', value: '+85%' },
    { label: 'Churn Rate', value: '45% reduced' }]

  },
  {
    id: 'education',
    name: 'Education',
    icon: 'AcademicCapIcon',
    description: 'Streamline student enrollment, course management, and administrative workflows with intelligent automation that enhances educational outcomes.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c4a4336c-1769739082122.png",
    alt: 'Educational institution with administrators managing student records digitally',
    challenges: [
    'Student enrollment requiring extensive paperwork',
    'Course scheduling and resource allocation conflicts',
    'Grading and assessment tracking inefficiencies',
    'Parent communication and progress reporting'],

    solutions: [
    'Digital enrollment with automated document verification',
    'Intelligent course scheduling with resource optimization',
    'Automated grading and progress tracking systems',
    'Unified parent communication with progress dashboards'],

    metrics: [
    { label: 'Enrollment Time', value: '82% faster' },
    { label: 'Admin Workload', value: '75% reduced' },
    { label: 'Parent Satisfaction', value: '93%' }]

  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    icon: 'BuildingOfficeIcon',
    description: 'Enhance guest experiences with intelligent booking, service coordination, and operations management that scales without increasing staff.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d43fb776-1768166069675.png",
    alt: 'Hotel reception with staff managing guest check-ins on digital systems',
    challenges: [
    'Reservation management across multiple channels',
    'Guest service requests requiring manual coordination',
    'Housekeeping and maintenance scheduling inefficiencies',
    'Revenue management and dynamic pricing'],

    solutions: [
    'Unified reservation system with channel synchronization',
    'Automated guest service coordination and tracking',
    'Intelligent housekeeping and maintenance scheduling',
    'AI-powered revenue optimization and pricing'],

    metrics: [
    { label: 'Occupancy Rate', value: '94%' },
    { label: 'Guest Satisfaction', value: '4.8/5' },
    { label: 'Revenue', value: '+32%' }]

  },
  {
    id: 'nonprofit',
    name: 'Non-Profit',
    icon: 'HeartIcon',
    description: 'Maximize mission impact with intelligent donor management, grant tracking, and volunteer coordination that reduces overhead and increases efficiency.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c8bfcbf0-1769739084402.png",
    alt: 'Non-profit office with staff coordinating volunteer activities on digital platforms',
    challenges: [
    'Donor management and communication inefficiencies',
    'Grant application and reporting burden',
    'Volunteer coordination and scheduling',
    'Impact measurement and reporting for stakeholders'],

    solutions: [
    'Automated donor management with engagement tracking',
    'Intelligent grant tracking with deadline alerts',
    'Centralized volunteer scheduling and communication',
    'Real-time impact dashboards with automated reporting'],

    metrics: [
    { label: 'Donor Retention', value: '+48%' },
    { label: 'Admin Costs', value: '68% reduced' },
    { label: 'Volunteer Hours', value: '+125%' }]

  }];


  return (
    <div className="min-h-screen bg-background">
      <IndustryHero />
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr">
            {industries?.map((industry, index) =>
            <IndustryCard key={industry?.id} industry={industry} index={index} />
            )}
          </div>
        </div>
      </section>
      <ComplianceSection />
      <BenchmarkComparison />
      <IntegrationShowcase />
      <CaseStudyGallery />
      <ROICalculatorSection />
      <CTASection />
    </div>);

}