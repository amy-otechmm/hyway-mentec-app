/** @format */

import Image from 'next/image';
import styles from './product-card.module.scss'; // We will create this file next

// Define the structure for a feature
interface Feature {
  label: string;
  description: string;
}

// Define the props for the card
interface ProductCardProps {
  title: string;
  company: string;
  imageUrl: string;
  imageAlt: string;
  features: Feature[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  company,
  imageUrl,
  imageAlt,
  features,
}) => {
  return (
    <div className={styles.card}>
      {/* 1. Image */}
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          style={{ objectFit: 'cover' }}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>

      {/* 2. Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.company}>{company}</p>

        {/* 3. Features List */}
        <ul className={styles.featuresList}>
          {features.map((feature, index) => (
            <li key={index} className={styles.featureItem}>
              <strong className={styles.featureLabel}>{feature.label}</strong>
              <p className={styles.featureDescription}>{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
