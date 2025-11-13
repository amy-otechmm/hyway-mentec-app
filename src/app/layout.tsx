/** @format */

import './globals.scss';
import type { Metadata } from 'next';
import MainLayout from '@/layout/main-layout';
import { Suspense } from 'react';
import LenisProvider from '@/stores/lenis-provider';
import ScrollToTop from '@/components/ui-accessory/scroll-to-top';

export const metadata: Metadata = {
  title: 'Hyway Mentec Inc.',
  description: 'Advanced construction solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja' className='light'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        />
        <link rel='shortcut icon' href='/favicon.ico' sizes='32x32' />
      </head>
      <body suppressHydrationWarning={true}>
        <LenisProvider>
          <ScrollToTop />
          <Suspense>
            <MainLayout>{children}</MainLayout>
          </Suspense>
        </LenisProvider>
      </body>
    </html>
  );
}
