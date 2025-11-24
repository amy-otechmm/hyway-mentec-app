/** @format */

import Image from 'next/image';
import styles from './product-card.module.scss';
import { motion } from 'framer-motion';

interface Feature {
  label: string;
  description: string;
}

interface ProductCardProps {
  title: string;
  company: string;
  imageUrl: string;
  imageAlt: string;
  features: Feature[];
  index: number; // 👈 NEW
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  company,
  imageUrl,
  imageAlt,
  features,
  index,
}) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.3, // 👈 appears one by one
        ease: 'easeOut',
      }}
      viewport={{ once: true, amount: 0.3 }} // animate only once
    >
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          style={{ objectFit: 'cover' }}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.company}>{company}</p>

        <ul className={styles.featuresList}>
          {features.map((feature, idx) => (
            <li key={idx} className={styles.featureItem}>
              <strong className={styles.featureLabel}>{feature.label}</strong>
              <p className={styles.featureDescription}>{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ProductCard;
