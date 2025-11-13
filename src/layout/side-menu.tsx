/** @format */

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './main-layout.module.scss';

const sections = ['speech', 'profile', 'history', 'access'];

const SideMenu = () => {
  const [activeSection, setActiveSection] = useState('');

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

  return (
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
                  access: 'アクセス方法',
                }[id]
              }
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideMenu;
