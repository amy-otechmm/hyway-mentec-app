/** @format */
'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import DotGrid from '../ui-accessory/ui-accessory';
import SideMenu from '@/layout/side-menu';
import styles from './about-us.module.scss';
import { IconDotsGrid } from '../icons/icons';

const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Use springs for smoother, damped motion
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    mass: 0.3,
  });

  // Parallax values
  const yHero = useTransform(smoothScroll, [0, 1], [0, 150]);
  const yDotsTop = useTransform(smoothScroll, [0, 1], [0, -100]);
  const yDotsBottom = useTransform(smoothScroll, [0, 1], [0, 80]);
  const yImage = useTransform(smoothScroll, [0, 1], [0, -50]);

  const profileData = [
    { key: '商号', value: 'ハイウェイメンテック株式会社' },
    {
      key: '所在地',
      value:
        '〒454-0826 名古屋市中川区小本本町一丁目70番地<br />TEL 052-364-7280 FAX 052-364-7281',
    },
    { key: '設立', value: '平成4年7月17日' },
    { key: '資本金', value: '4,920万円' },
    { key: '代表者', value: '代表取締役社長 川尻 洋二' },
    {
      key: '事業内容',
      value: `
      パーフェクト工法 (仮設工業会承認の特殊工法) をもちいた足場工事<br />
      土木工事、とび、土工、コンクリート工事、鋼構造物工事および舗装工事の企画、設計、請負および管理<br />
      土木建築工事用機械器具および資材の販売および賃貸<br />
      土木建築工事用の仮設建物の販売および賃貸<br />
      電子計算機・複写機等事務用機器の販売および賃貸<br />
      不動産の売買・仲介・賃貸および管理<br />
      上記に付帯する一切の業務
    `,
    },
    {
      key: '許可登録番号',
      value: `
      土木 とび・土工事業 愛知県知事 (般-24) 第36577号<br />
      鋼構造物 ほ装工事業 愛知県知事 (般-24) 第36577号
    `,
    },
  ];

  const historyData = [
    {
      date: '平成4年7月',
      event:
        '先品建設(株)の軌道工事を引き継ぎ、「地元密着企業」を目指して日進建設(株)がハイウェイメンテック(株)を資本金2,000万円で設立。',
    },
    {
      date: '平成10年2月',
      event: '先品建設株式会社を吸収合併、増資。',
    },
    {
      date: '平成15年7月',
      event:
        '日進建設(株)とりんかい建設(株)が合併し、りんかい日産建設(株)となり、当社の株主を得る。',
    },
    {
      date: '平成20年2月',
      event: 'りんかい日産建設(株)から株式を全額取得・独立。',
    },
    {
      date: '平成24年8月',
      event: '現住所に移転。',
    },
  ];

  const [activeSection, setActiveSection] = useState('speech');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% visible
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <div ref={containerRef}>
      {/* === Hero Section === */}
      <section className={styles.hero}>
        <motion.div className={styles.topRightDots} style={{ y: yDotsTop }}>
          <IconDotsGrid className={styles.right_dots} />
        </motion.div>

        <motion.div
          className={styles.bottomLeftDots}
          style={{ y: yDotsBottom }}>
          <DotGrid rows={4} cols={2} className={styles.bottomLeftDots} />
        </motion.div>

        <p className={styles.heroTitle}>ABOUT US</p>
      </section>

      {/* === Main Layout === */}
      <div className={styles.pageWrapper}>
        <div className={styles.mainLayout}>
          {/* Sticky Sidebar */}
          <aside className={styles.leftColumn}>
            <SideMenu />
          </aside>

          {/* Scrollable Content */}
          <main className={styles.rightColumn}>
            {/* --- Speech Section --- */}
            <section id='speech' className={styles.speechSection}>
              <motion.h1
                className={styles.mainTitle}
                style={{ y: yHero }}
                transition={{ type: 'spring', stiffness: 40 }}>
                スピーチ
              </motion.h1>
              {/* <h1 className={styles.mainTitle}>スピーチ</h1> */}
              <h2 className={styles.subtitle}>
                「責任ある技術と施工」を合言葉に、地元密着型企業を目指して
              </h2>

              <div className={styles.contentGrid}>
                <motion.div
                  className={styles.imageWrapper}
                  style={{ y: yImage }}
                  transition={{ damping: 25 }}>
                  <Image
                    src='/images/about/img_company_01.jpg'
                    alt='会社イメージ'
                    width={300}
                    height={420}
                    priority
                  />
                </motion.div>

                <div className={styles.textWrapper}>
                  <p>
                    拝啓
                    貴社益々ご隆盛の段、大慶に存じ上げます。弊社は、長年にわたって東海地方各方面の方々からご愛顧を賜りました名晶建設の足場工事を担うべく、平成4年7月17日に設立創業した会社でございます。
                  </p>
                  <p>
                    各界のご支援を賜り、技術と信用を育んで参りました技術陣で、地元皆様方のご要望に迅速に対応し、「小回りのきく企業」を目指すものでございます。
                  </p>
                </div>
              </div>

              <p className={styles.closingParagraph}>
                責任ある技術・施工・誠意迅速・低廉な工事費をモットーに努力いたして参ります。今後ともご指導ご支援を賜りますようお願い申し上げます。
              </p>

              <div className={styles.signature}>
                <p>代表取締役社長</p>
                <p>川尻 洋二</p>
              </div>
            </section>

            {/* --- Company Profile --- */}
            <section id='profile' className={styles.profile_section}>
              <h1 className={styles.title}>会社概要</h1>
              <div className={styles.infoBox}>
                <dl className={styles.infoList}>
                  {profileData.map((item, index) => (
                    <div key={index} className={styles.infoItem}>
                      <dt className={styles.key}>{item.key}</dt>
                      <dd
                        className={styles.value}
                        dangerouslySetInnerHTML={{ __html: item.value }}></dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>

            {/* --- History --- */}
            <section id='history' className={styles.history_section}>
              <h1 className={styles.title}>当社の歴史</h1>
              <ul className={styles.timeline}>
                {historyData.map((item, index) => (
                  <motion.li
                    key={index}
                    className={styles.timelineItem}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true }}>
                    <div className={styles.date}>{item.date}</div>
                    <div className={styles.event}>{item.event}</div>
                  </motion.li>
                ))}
              </ul>
            </section>

            {/* --- Access --- */}
            <section id='access' className={styles.access_section}>
              <h1 className={styles.title}>アクセス方法</h1>
              <div className={styles.mapWrapper}>
                <iframe
                  className={styles.mapFrame}
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.083395171788!2d136.8524450763268!3d35.15444855907471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003774616231d69%3A0xe5469f06915f0135!2z44OP44K444Km44Ko44Kk44Oz44OG44OD44KvKOOCpiki!5e0!3m2!1sen!2sjp!4v1696317789123!5m2!1sen!2sjp'
                  width='600'
                  height='450'
                  allowFullScreen={false}
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'></iframe>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
