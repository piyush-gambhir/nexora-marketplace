import type React from 'react';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Inter_Tight, JetBrains_Mono } from 'next/font/google';

import { Analytics } from '@vercel/analytics/next';

import './globals.css';

const instrumentSans = Inter_Tight({
  variable: '--font-sans',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Nexora',
  description:
    'The marketplace platform for everything - physical goods, digital products, on-demand food, carbon credits, and more',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
    >
      <body
        className={`font-sans ${instrumentSans.variable} ${jetbrainsMono.variable}`}
        suppressHydrationWarning
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
