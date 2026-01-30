import Icon from '@/components/ui/AppIcon';
import Image from 'next/image';

const LeadershipSection = ({ className = '' }) => {
  return (
    <section className={`py-20 lg:py-32 bg-muted/20 ${className}`}>
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Icon name="UserCircleIcon" size={20} className="text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">The Team</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 font-heading">Led by Engineering Logic.</h2>
          </div>
          <div className="glassmorphism rounded-2xl p-8 lg:p-12 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1e6234274-1767159265664.png"
                    alt="Chris O. - Lead Automation Architect"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full" />

                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-3xl font-bold text-foreground mb-2 font-heading">Chris O.</h3>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 mb-6">
                  <Icon name="BriefcaseIcon" size={16} className="text-primary" />
                  <span className="text-sm font-semibold text-primary">Lead Automation Architect</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Specialist in high-volume data architecture. Chris leads the architectural strategy for all Pilot Logic deployments, ensuring every system is built for scale and stability.
                </p>
                <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
                  <div className="flex items-center space-x-2 px-4 py-2 bg-muted/50 rounded-lg">
                    <Icon name="CheckCircleIcon" size={20} className="text-success" />
                    <span className="text-sm text-foreground font-medium">Enterprise Architecture</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-muted/50 rounded-lg">
                    <Icon name="CheckCircleIcon" size={20} className="text-success" />
                    <span className="text-sm text-foreground font-medium">Data Systems</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-muted/50 rounded-lg">
                    <Icon name="CheckCircleIcon" size={20} className="text-success" />
                    <span className="text-sm text-foreground font-medium">Scalability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default LeadershipSection;