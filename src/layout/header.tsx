/** @format */
'use client';

import Link from 'next/link';
import styles from './main-layout.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
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
            {navLinks.map((link) => (
              <li key={link.name} className={styles.navItem}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default NavBar;
