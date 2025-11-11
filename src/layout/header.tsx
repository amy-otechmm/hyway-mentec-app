/** @format */
'use client';

import Link from 'next/link';
import styles from './main-layout.module.scss';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const NavBar = () => {
  const navLinks = [
    { name: 'ホームページ', href: '/' },
    { name: 'サービス', href: '/service' },
    { name: '会社', href: '/about-us' },
    { name: '連絡先', href: '/contact' },
  ];

  const [isShow, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down past 100px → hide navbar
        setShow(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up → show navbar
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const [activeIndex, setActiveIndex] = useState(0);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  const moveIndicator = (index: number) => {
    const currentItem = itemsRef.current[index];
    if (currentItem && indicatorRef.current) {
      const { offsetLeft, offsetWidth } = currentItem;
      indicatorRef.current.style.left = `${offsetLeft}px`;
      indicatorRef.current.style.width = `${offsetWidth}px`;
    }
  };

  useEffect(() => {
    moveIndicator(activeIndex);
    window.addEventListener('resize', () => moveIndicator(activeIndex));
    return () =>
      window.removeEventListener('resize', () => moveIndicator(activeIndex));
  }, [activeIndex]);

  useEffect(() => {
    if (isShow) moveIndicator(activeIndex);
  }, [isShow]);

  return (
    <AnimatePresence>
      {isShow && (
        <motion.nav
          key='navbar'
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={styles.navWrapper}>
          <div className={styles.companyName}>
            <Image
              src='/images/common/LOGO.png'
              alt='Logo'
              width={50}
              height={50}
              className={styles.logo}
            />
            <Link href='/'>ハイウェイメンテック株式会社</Link>
          </div>

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
            <span className={styles.indicator} ref={indicatorRef}></span>
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default NavBar;
