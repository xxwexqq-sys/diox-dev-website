import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config';
import { Navbar } from '@/components/Navbar';
import { CustomCursor } from '@/components/CustomCursor';

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'DIOX DEV — Discord-боты для Majestic RP и GTA 5 RP',
  description: siteConfig.description,
  openGraph: {
    title: 'DIOX DEV — Discord-боты для Majestic RP и GTA 5 RP',
    description: siteConfig.description,
    type: 'website',
  },
  metadataBase: new URL('https://example.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.variable}>
        <CustomCursor />
        <div className="relative min-h-screen bg-bg text-white antialiased">
          <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.16),_transparent_35%)]" />
          <div className="pointer-events-none fixed inset-0 z-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="relative z-10">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
