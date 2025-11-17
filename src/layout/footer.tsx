/** @format */
'use client';

import Link from 'next/link';
import styles from './main-layout.module.scss';
import {
  IconArrowRight,
  IconEmail,
  IconLocation,
  IconPhone,
} from '@/components/icons/icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* ===== Top Contact Section ===== */}
      <div className={styles.topSection}>
        <div className={styles.topContent}>
          <div className={styles.contactInfo}>
            <h2 className={styles.contactTitle}>CONTACT</h2>
            <p className={styles.contactSubtitle}>お問い合わせ</p>
            <p className={styles.contactDescription}>
              当社へのご意見、お取引に関するご相談等、お問い合わせページよりお気軽にご連絡ください。
            </p>
          </div>
          <div className={styles.contactButton}>
            <span>査定面談</span> <IconArrowRight className={styles.arrow} />
          </div>
        </div>
      </div>

      {/* ===== Middle Info Section ===== */}
      <div className={styles.middleSection}>
        <div className={styles.quickLinks}>
          <h3>クイックリンク</h3>
          <ul className={styles.linksList}>
            <li>
              <Link href='/'>ホーム</Link>
            </li>
            <li>
              <Link href='/about-us'>会社概要</Link>
            </li>
            <li>
              <Link href='/service'>サービス</Link>
            </li>
            <li>
              <Link href='/about-us'>実績紹介</Link>
            </li>
            <li>
              <Link href='/contact'>お問い合わせ</Link>
            </li>
          </ul>
        </div>
        <div className={styles.addressInfo}>
          {/* This empty h3 is for alignment, you can remove if not needed */}
          <h3>&nbsp;</h3>
          <div className={styles.addressList}>
            <div className={styles.addressItem}>
              <span className={styles.addressIcon}>
                <IconLocation />
              </span>
              <span>〒454-0826 名古屋市中川区小本本町一丁目70番地</span>
            </div>
            <div className={styles.addressItem}>
              <span className={styles.addressIcon}>
                <IconPhone />
              </span>
              <span>TEL: 052-364-7280 FAX: 052-364-7281</span>
            </div>
            <div className={styles.addressItem}>
              <span className={styles.addressIcon}>
                <IconEmail />
              </span>
              <a href='mailto:goto@hyway-mentec.com'>
                goto@hyway-mentec.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Bottom Copyright Section ===== */}
      <div className={styles.bottomSection}>
        © 2025 Highway-Mentec Co., Ltd. All Rights Reserved |
        <Link href='/privacy-policy'>Privacy Policy</Link> |
        <Link href='/sitemap'>Sitemap</Link>
      </div>
    </footer>
  );
};

export default Footer;
