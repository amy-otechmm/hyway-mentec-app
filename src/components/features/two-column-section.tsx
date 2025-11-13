/** @format */

import React from 'react';
import Image from 'next/image';
import styles from './two-column-section.module.scss';
import { IconStart } from '../icons/icons';

// Define the props the component will accept
type Props = {
  title: string;
  children: React.ReactNode;
  imageUrl: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
};

const TwoColumnSection: React.FC<Props> = ({
  title,
  children,
  imageUrl,
  imageAlt,
  imagePosition = 'right', // Default to image on the right
}) => {
  // Dynamically set the class for layout direction
  const sectionClasses = `${styles.section} ${
    imagePosition === 'left' ? styles.imageLeft : styles.imageRight
  }`;

  return (
    <section className={sectionClasses}>
      <div className={styles.textContainer}>
        <div className={styles.titleWrapper}>
         <IconStart/> {/* Placeholder for the icon */}
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.description}>{children}</div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill // 'fill' will make the image cover the container
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default TwoColumnSection;
