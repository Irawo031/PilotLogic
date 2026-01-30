import React from 'react';
import type { Metadata, Viewport } from 'next';
import Analytics from '../components/Analytics'; // We import the new file here
import '../styles/index.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

// --- SEO METADATA (Server Side - Stays Here) ---
export const metadata: Metadata = {
  title: 'Pilot Logic Systems | Enterprise Automation Agency',
  description: 'We architect digital infrastructure for Logistics & Finance. Replace manual data entry with autonomous logic systems. Book your audit.',
  
  verification: {
    google: "UzQkAKHfB0hShhY2KqhLQN7kTRUV47wMgC9U2_nZ1bk",
  },

  openGraph: {
    title: 'Pilot Logic Systems | Enterprise Automation',
    description: 'We replace manual workflows with autonomous logic. Book your system audit.',
    url: 'https://www.pilotlogicsystems.com',
    siteName: 'Pilot Logic Systems',
    type: 'website',
  },

  keywords: [
    'Pilot Logic Systems', 'Automation Agency', 'Workflow Automation Consultant', 
    'Logistics Automation', '3PL Integration', 'Warehouse Management System',
    'Zapier Expert', 'Make.com Consultant', 'Python Automation',
    'Financial Operations Automation', 'Invoice Processing', 'QuickBooks Integration',
    'Client Onboarding Automation', 'Contract Generation', 'Data Sync',
    'Healthcare Automation', 'Real Estate Automation'
  ],

  icons: {
    icon: [
      { url: '/assets/images/Favicon-1769758091653.png', type: 'image/png' }
    ],
  },
};

// --- ROOT LAYOUT ---
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* We drop the Analytics component here */}
        <Analytics />
        
        {children}
      </body>
    </html>
  );
}