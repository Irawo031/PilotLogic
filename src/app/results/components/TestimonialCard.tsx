import React from 'react';
import Icon from '@/components/ui/AppIcon';
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  metrics: string[];
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  metrics,
  avatar
}) => {
  return (
    <div className="glassmorphism rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
          <Image
            src={avatar}
            alt={`${author} - ${role}`}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-white text-lg">{author}</h4>
          <p className="text-gray-300 text-sm">{role}</p>
          <p className="text-gray-400 text-sm">{company}</p>
        </div>
      </div>

      <blockquote className="text-gray-200 text-base leading-relaxed mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="pt-4 border-t border-gray-200">
        <div className="flex flex-wrap gap-2">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex items-center space-x-1 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold"
            >
              <Icon name="CheckCircleIcon" size={14} />
              <span>{metric}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;