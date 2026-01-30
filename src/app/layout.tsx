import React from 'react';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script'; // Import Script for Analytics
import '../styles/index.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

// --- YOUR SEO METADATA ---
export const metadata: Metadata = {
  title: 'Pilot Logic Systems | Enterprise Automation Agency',
  description: 'We architect digital infrastructure for Logistics & Finance. Replace manual data entry with autonomous logic systems. Book your audit.',
  
  // Google Search Console Verification
  verification: {
    google: "UzQkAKHfB0hShhY2KqhLQN7kTRUV47wMgC9U2_nZ1bk",
  },

  // Social Media Previews
  openGraph: {
    title: 'Pilot Logic Systems | Enterprise Automation',
    description: 'We replace manual workflows with autonomous logic. Book your system audit.',
    url: 'https://www.pilotlogicsystems.com',
    siteName: 'Pilot Logic Systems',
    type: 'website',
  },

  // SEO Keywords
  keywords: [
    'Pilot Logic Systems', 'Automation Agency', 'Workflow Automation Consultant', 
    'Logistics Automation', '3PL Integration', 'Warehouse Management System',
    'Zapier Expert', 'Make.com Consultant', 'Python Automation',
    'Financial Operations Automation', 'Invoice Processing', 'QuickBooks Integration',
    'Client Onboarding Automation', 'Contract Generation', 'Data Sync',
    'Healthcare Automation', 'Real Estate Automation'
  ],

  // Your Favicon
  icons: {
    icon: [
      { url: '/assets/images/Favicon-1769758091653.png', type: 'image/png' }
    ],
  },
};

// --- YOUR LAYOUT + ANALYTICS ---
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HW86B43Z6X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-HW86B43Z6X');
          `}
        </Script>

        {/* The Website Content */}
        {children}
      </body>
    </html>
  );
}