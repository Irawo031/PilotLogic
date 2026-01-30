'use client';

import React from 'react';

const TechStackMarquee = () => {
  const tools = [
    'Make.com',
    'Zapier',
    'Python',
    'AWS',
    'OpenAI',
    'Airtable',
    'HubSpot',
    'Supabase',
    'PostgreSQL',
    'GoHighLevel'
  ];

  // Duplicate the array for seamless loop
  const duplicatedTools = [...tools, ...tools];

  return (
    <section className="py-16 overflow-hidden">
      {/* Heading Block */}
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
          OUR TECH STACK TOOLS
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Powered by Modern Infrastructure
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We deploy code-native tools you own. No rip-and-replace. We integrate and systemize your existing stack.
        </p>
      </div>

      {/* Marquee Container - No background, no borders */}
      <div className="relative">
        {/* Scrolling Content */}
        <div 
          className="flex"
          style={{
            animation: 'scroll 30s linear infinite',
            width: 'fit-content'
          }}
        >
          {duplicatedTools?.map((tool, index) => (
            <span
              key={`${tool}-${index}`}
              className="whitespace-nowrap"
              style={{
                fontFamily: "'Space Grotesk', monospace",
                fontWeight: 700,
                fontSize: '20px',
                color: '#64748b',
                marginRight: '80px'
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default TechStackMarquee;