/** @format */
'use client';

import { useEffect, useRef } from 'react';
import Footer from './footer';
import NavBar from './header';

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        element.classList.add('visible');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavBar />
      <div ref={ref} className='floating'>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
