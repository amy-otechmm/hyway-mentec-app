/** @format */
'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

type LenisProviderProps = {
  children: React.ReactNode;
};

export default function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
     
    });

    // ✅ expose globally
    (window as any).lenis = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      (window as any).lenis = null;
    };
  }, []);

  return <>{children}</>;
}
