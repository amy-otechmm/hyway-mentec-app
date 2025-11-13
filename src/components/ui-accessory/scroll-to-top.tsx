/** @format */
'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // wait for Lenis to exist
    const lenis = (window as any).lenis as Lenis | undefined;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [pathname]);

  return null;
}
