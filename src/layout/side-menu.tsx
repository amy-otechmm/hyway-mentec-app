/** @format */
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './main-layout.module.scss';
import { IconSideMenu } from '@/components/icons/icons';

const sections = ['speech', 'profile', 'history', 'access'];

const SideMenu = () => {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu state
  const [isMobile, setIsMobile] = useState(false);

  // Detect scroll for active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect mobile/tablet screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991); // tablet breakpoint
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Menu variants for framer motion
  const menuVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  return (
    <>
      {isMobile ? (
        <>
          {/* Icon button */}

          {/* Slide menu */}
          <motion.nav
            className={styles.menuMobile}
            initial='closed'
            animate={menuOpen ? 'open' : 'closed'}
            variants={menuVariants}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
            <button
              className={styles.menuIcon}
              onClick={() => setMenuOpen(!menuOpen)}>
              <IconSideMenu />
            </button>
            <ul>
              {sections.map((id) => (
                <li key={id}>
                  <Link
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)} // close menu on click
                    className={
                      activeSection === id ? styles.activeCompany : ''
                    }>
                    {
                      {
                        speech: 'スピーチ',
                        profile: '会社概要',
                        history: '沿革',
                        access: 'アクセス',
                      }[id]
                    }
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        </>
      ) : (
        // Desktop menu
        <nav className={styles.menu}>
          <ul>
            {sections.map((id) => (
              <li key={id}>
                <Link
                  href={`#${id}`}
                  className={activeSection === id ? styles.activeCompany : ''}>
                  {
                    {
                      speech: 'スピーチ',
                      profile: '会社概要',
                      history: '沿革',
                      access: 'アクセス',
                    }[id]
                  }
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default SideMenu;
