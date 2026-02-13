import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BeatSync - AI-powered music production tool for lyric-to-beat alignment',
  description: 'Value Proposition: Automatically syncs lyrics to instrumental sections with timestamp tracking, eliminating manual work for producers and rappers in song creation workflow.

Target Customer: Independent music producers, rappers, home studio owners, music production teams

---
Category: Micro-SaaS
Target Market: Independent music producers, rappers, home studio owners, music production teams
Source Hypothesis ID: bebf35f2-838d-47a9-9d5e-0adee3a5df89
Promotion Type: automatic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">BeatSync - AI-powered music production tool for lyric-to-beat alignment</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
