/** @format */

'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './floation-section.module.scss';

const FloatingSection = ({ children })=>{
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], // smooth timing
  });

  // Y-axis floating motion
  const y = useTransform(scrollYProgress, [0, 1], ['50px', '-50px']);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.5]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity, scale }}
      className={styles.floating_section}>
      {children}
    </motion.section>
  );
}

export default FloatingSection;
