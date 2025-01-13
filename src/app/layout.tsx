import * as React from 'react';

import { Metadata } from 'next';

import Footer from '@/components/layout/Footer';
import { Navigation } from '@/components/layout/Navigation';
import { ThemeProvider } from '@/lib/theme-context';

export const metadata: Metadata = {
  title: "Aaron's Florida Solar",
  description: "Professional solar solutions in Florida",
  icons: {
    icon: '/favicon.ico',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('darkMode');
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = savedTheme ? JSON.parse(savedTheme) : systemPrefersDark;
                if (isDark) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased transition-colors duration-200">
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
