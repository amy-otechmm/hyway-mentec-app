/** @format */
'use client';

import Link from 'next/link';
import styles from './main-layout.module.scss';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const navLinks = [
    { name: 'ホーム', href: '/' },
    { name: 'サービス', href: '/service' },
    { name: '会社概要', href: '/about-us' },
    { name: 'お問い合わせ', href: '/contact' },
  ];

  const pathname = usePathname();
  const [isShow, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [menuOpen, setMenuOpen] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const currentIndex = navLinks.findIndex((link) => link.href === pathname);
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    } else {
      setActiveIndex(-1);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false);
        setMenuOpen(false); // auto-close mobile menu
      } else if (currentScrollY < lastScrollY) {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const moveIndicator = (index: number) => {
    if (index === -1) return;
    const currentItem = itemsRef.current[index];
    const indicator = indicatorRef.current;
    if (!currentItem || !indicator) return;

    indicator.style.left = `${currentItem.offsetLeft}px`;
    indicator.style.width = `${currentItem.offsetWidth}px`;
  };

  useEffect(() => {
    const handleResize = () => moveIndicator(activeIndex);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex]);

  useEffect(() => {
    if (isShow) moveIndicator(activeIndex);
  }, [isShow, activeIndex]);

  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          key='navbar'
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={styles.navContainer}>
          <nav className={styles.navWrapper}>
            <div className={styles.companyName}>
              <Image
                src='/images/common/LOGO.png'
                alt='Logo'
                width={45}
                height={45}
                priority
              />
              <Link href='/'>ハイウェイメンテック株式会社</Link>
            </div>

            {/* HAMBURGER BUTTON */}
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* DESKTOP NAV */}
            <ul className={styles.navList}>
              {navLinks.map((link, i) => (
                <li
                  key={link.name}
                  ref={(el: any) => (itemsRef.current[i] = el)}
                  className={`${styles.navItem} ${
                    activeIndex === i ? styles.active : ''
                  }`}
                  onClick={() => setActiveIndex(i)}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
              <span
                className={`${styles.indicator} ${
                  activeIndex === -1 ? styles.hidden : ''
                }`}
                ref={indicatorRef}></span>
            </ul>

            {/* MOBILE MENU */}
            <AnimatePresence>
              {menuOpen && (
                <motion.ul
                  className={styles.mobileMenu}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}>
                  {navLinks.map((link, i) => (
                    <li
                      key={link.name}
                      onClick={() => {
                        setActiveIndex(i);
                        setMenuOpen(false);
                      }}>
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavBar;
