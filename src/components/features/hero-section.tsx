/** @format */
'use client';

import Image from 'next/image';
import styles from './hero-section.module.scss';
import { useRef } from 'react';
import {
  IconCrane,
  IconDelivery,
  IconDotsGrid,
  IconStart,
  IconWorker,
} from '../icons/icons';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import CircularText from '../ui-accessory/circular-text';
import Card from '../ui-accessory/card';
import SplitText from '../motion/split-text';
import classNames from 'classnames';

const HeroSection = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  // Function to handle smooth scrolling
  // const handleStartClick = () => {
  //   contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  // };
  const containertest = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containertest,
    offset: ['start start', 'end start'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: '/images/hero/gallery-img-1.jpg',
      scale: scale4,
    },
    {
      src: '/images/hero/gallery-img-2.jpg',
      scale: scale5,
    },
    {
      src: '/images/hero/gallery-img-3.jpg',
      scale: scale6,
    },
    {
      src: '/images/hero/gallery-img-4.png',
      scale: scale5,
    },
    {
      src: '/images/hero/gallery-img-5.png',
      scale: scale6,
    },
    {
      src: '/images/hero/gallery-img-2.jpg',
      scale: scale8,
    },
    {
      src: '/images/hero/gallery-img-2.jpg',
      scale: scale9,
    },
  ];

  return (
    <main className={styles.heroContainer}>
      <section
        className={classNames([styles.bridgeContainer, styles.heroSticky])}>
        <IconDotsGrid className='right_dots' />
        <IconDotsGrid className='left_dots' />

        <div className={styles.bridgeContent}>
          <p className={styles.bridgeLogo}>ハイウェイメンテックは</p>
          <div className={styles.bridgeTitle}>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                style={{ height: '0em' }}
                exit={{ opacity: 0 }}>
                <SplitText
                  initial={{ y: '100%' }}
                  animate='visible'
                  size={36}
                  variants={{
                    visible: (i: number) => ({
                      y: 0,
                      transition: {
                        delay: i * 0.04,
                      },
                    }),
                  }}>
                  橋梁建設、高速道路保守、
                </SplitText>
              </motion.div>
            </AnimatePresence>
            <br />
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                // style={{ height: '0em' }}
                exit={{ opacity: 0 }}>
                <SplitText
                  initial={{ y: '100%' }}
                  animate='visible'
                  size={36}
                  variants={{
                    visible: (i: number) => ({
                      y: 0,
                      transition: {
                        delay: i * 0.04,
                      },
                    }),
                  }}>
                  足場ソリューションにおける信頼さるパートナーです。
                </SplitText>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className={styles.break_line}></div>
          <p className={styles.bridgeSubtitle}>
            長年の専門知識を活かし、安全第一の実践、最新技術、そして熟練の職人技を融合させ、長期にわたるプロジェクトを実施します。
          </p>
        </div>
      </section>

      <div className={styles.scrollWrapper}>
        <motion.section
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-100%']) }}
          className={styles.whatWeDoContainer}>
          <div className={styles.whatWeDoContent}>
            <div className={styles.whatWeDoSubheading}>
              <IconStart className={styles.icon_star} />
              What We Do
            </div>
            <h2 className={styles.whatWeDoHeading}>私たちの目標は何ですか？</h2>
          </div>
          <div className={styles.servicesLayout}>
            <div className={styles.servicesCard}>
              <div>
                {/* Service Item 1 */}
                <div className={styles.serviceItem}>
                  <h3 className={styles.serviceTitle}>橋梁建設・維持管理</h3>
                  <p className={styles.serviceDescription}>
                    新設橋梁から既存橋梁まで、耐久性に優れた高水準のソリューションをご提供します。
                  </p>
                </div>

                {/* Service Item 2 */}
                <div className={styles.serviceItem}>
                  <h3 className={styles.serviceTitle}>足場ソリューション</h3>
                  <p className={styles.serviceDescription}>
                    大規模建設プロジェクトに対応した、安全でカスタマイズ可能な足場をご用意しております。
                  </p>
                </div>

                {/* Service Item 3 */}
                <div className={styles.serviceItem}>
                  <h3 className={styles.serviceTitle}>
                    高速道路の補修・安全対策
                  </h3>
                  <p className={styles.serviceDescription}>
                    高速道路を常に安全・強固・効率的に保つための補修・安全対策を実施いたします。
                  </p>
                </div>

                {/* Service Item 4 */}
                <div className={styles.serviceItem}>
                  <h3 className={styles.serviceTitle}>
                    コンサルティング・プロジェクト管理
                  </h3>
                  <p className={styles.serviceDescription}>
                    企画立案から監督、完成まで、一貫した専門的なサポートをご提供いたします。
                  </p>
                </div>
              </div>
              <div className={styles.verticalTextContainer}>
                <div className={styles.verticalText}>
                  建設ソリュ|ションのご案内
                </div>
                <div className={styles.verticalText}>高品質な</div>
              </div>
            </div>
          </div>
          <CircularText
            text='大規模建設プロジェクトに対応した、安全でカスタマイズ可能な足場をご用意しております。'
            onHover='slowDown'
            spinDuration={50}
            className={styles.customCircularText}
          />
        </motion.section>

        {/* <div className={styles.galleryGrid}>
          
          <div className={styles.galleryItem1}>
            <Image
              src='/images/hero/gallery-img-1.png'
              alt='Construction project 1'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className={styles.galleryItem2}>
            <Image
              src='/images/hero/gallery-img-2.png'
              alt='Construction project 2'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className={styles.galleryItem3}>
            <Image
              src='/images/hero/gallery-img-3.png'
              alt='Construction project 3'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className={styles.galleryItem4}>
            <Image
              src='/images/hero/gallery-img-4.png'
              alt='Construction project 4'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className={styles.galleryItem5}>
            <Image
              src='/images/hero/gallery-img-5.png'
              alt='Construction project 5'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div> */}
        <div className={styles.testMain}>
          <div ref={containertest} className={styles.gallery_container}>
            <div className={styles.sticky}>
              {pictures.map(({ src, scale }, index) => {
                return (
                  <motion.div
                    key={index}
                    style={{ scale }}
                    className={styles.el}>
                    <div className={styles.imageContainer}>
                      <Image src={src} fill alt='image' blurDataURL='blur' />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <section className={styles.featuredContainerOne}>
          <div className={styles.featuredContent}>
            <span className={styles.featuredNumber}>01</span>
            <h2 className={styles.featuredTitle}>一括吊上げ吊下げ工法</h2>
            <p className={styles.featuredDescription}>
              一括吊上げ工法は、橋梁部材を地上で事前に組立て、その後、油圧システム、ジャッキシリンダー、またはガントリーを使用して最終位置に吊り上げる橋梁施工技術です。
            </p>
            <div className={styles.detailsButton}>
              詳細相談 <span className={styles.arrow}>→</span>
            </div>
          </div>
        </section>
        <section className={styles.featuredContainerTwo}>
          <div className={styles.featuredImageWrapper}>
            <Image
              src='/images/hero/gallery-img-5.webp'
              alt='ヤモリ工法'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className={styles.featuredContent}>
            <span className={styles.featuredNumber}>02</span>
            <h2 className={styles.featuredTitle}>ヤモリ工法</h2>
            <p className={styles.featuredDescription}>
              ヤモリ工法は、橋桁に固定されたレールに沿って足場を移動することで、狭い場所や交通量の多い場所でも安全な橋梁調査を可能にします。これにより、作業員の安全性を高め、事故リスクを減らし、従来のモノレール式足場の組み立てを実現します。
            </p>
            <div className={styles.detailsButton}>
              詳細面談 <span className={styles.arrow}>→</span>
            </div>
          </div>
        </section>

        <section className={styles.methodsSection}>
          <IconDotsGrid className='right_dots' />
          <IconDotsGrid className='left_dots' />
          <div className={styles.bottomLeftDots}></div>

          <div className={styles.container}>
            <div className={styles.grid}>
              <div className={classNames([styles.row, styles.topRow])}>
                <Card
                  icon={<IconDelivery />}
                  title='持続可能な取り組み'
                  description='廃棄物削減・環境配慮・資材最適化を重視しています。'
                />
                <Card
                  icon={<IconDelivery />}
                  title='効率的かつ納期厳守'
                  description='事前組立と専用車両で工期短縮、渋滞を緩和します。'
                />
                <div className={styles.titleWrapper}>
                  <p className={styles.title}>
                    当社を選ぶ理由{' '}
                    <span className={styles.horizontalLine}></span>{' '}
                  </p>
                  <p className={styles.subtitle}>ハイウェイ・メンテック</p>
                </div>
              </div>
              <div className={styles.row}>
                <Card
                  icon={<IconCrane />}
                  title='卓越したエンジニアリング'
                  description='先進工法を駆使し、複雑な環境に最適な解決策を提供します。'
                />
                <Card
                  icon={<IconWorker />}
                  title='安全第一'
                  description='すべての作業で安全を最優先にしています。'
                />
              </div>
            </div>
          </div>
        </section>

        {/* <section className={styles.reasonsContainer}>
        <div className={styles.reasonsLeftDots}></div>
        <div className={styles.reasonsRightDots}></div>
        <div className={styles.reasonsTitleWrapper}>
          <h2 className={styles.reasonsTitle}>当社を選ぶ理由</h2>
          <p className={styles.reasonsSubtitle}>ハイウェイ・メンテック</p>
        </div>
        <div className={styles.reasonsGrid}>
          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>[Icon1]</div>
            <h3 className={styles.reasonTitle}>持続可能な取り組み</h3>
            <p className={styles.reasonDescription}>
              廃棄物削減・環境配慮・資材最適化を重視しています。
            </p>
          </div>

          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>[Icon2]</div>
            <h3 className={styles.reasonTitle}>効率的かつ納期厳守</h3>
            <p className={styles.reasonDescription}>
              事前組立と専用車両で工期短縮、渋滞を緩和します。
            </p>
          </div>

          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>[Icon3]</div>
            <h3 className={styles.reasonTitle}>卓越したエンジニアリング</h3>
            <p className={styles.reasonDescription}>
              先進工法を駆使し、複雑な環境に最適な解決策を提供します。
            </p>
          </div>

          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>[Icon4]</div>
            <h3 className={styles.reasonTitle}>安全第一</h3>
            <p className={styles.reasonDescription}>
              すべての作業で安全を最優先にしています。
            </p>
          </div>
        </div>
      </section> */}
      </div>
    </main>
  );
};

export default HeroSection;
