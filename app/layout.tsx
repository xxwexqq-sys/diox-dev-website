import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config';
import { Navbar } from '@/components/Navbar';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
});

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
      <body className={spaceGrotesk.variable}>
        <div className="relative min-h-screen bg-bg text-white antialiased">
          <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.09),_transparent_24%)]" />
          <div className="pointer-events-none fixed inset-0 z-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:36px_36px]" />
          <div className="relative z-10">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
