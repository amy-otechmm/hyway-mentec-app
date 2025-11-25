/** @format */
'use client';

import Image from 'next/image';
import styles from './hero-section.module.scss';
import { useRef } from 'react';
import {
  IconArrowRight,
  IconCrane,
  IconDelivery,
  IconDotsGrid,
  IconEarth,
  IconStart,
  IconWorker,
} from '../icons/icons';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import CircularText from '../ui-accessory/circular-text';
import Card from '../ui-accessory/card';
import SplitText from '../motion/split-text';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const HeroSection = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  // Function to handle smooth scrolling
  // const handleStartClick = () => {
  //   contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  // };
  const containertest = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containertest,
    offset: ['start 80%', 'end 20%'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], ['50px', '0px']);

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
      src: '/images/hero/gallery-img-6.png',
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
                  variants={{
                    visible: (i: number) => ({
                      y: 0,
                      transition: {
                        delay: i * 0.04,
                      },
                    }),
                  }}>
                  橋梁建設、 高速道路保守、
                </SplitText>
              </motion.div>
            </AnimatePresence>
            <br />
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                style={{ lineHeight: '1.3' }}
                exit={{ opacity: 0 }}>
                <SplitText
                  initial={{ y: '100%' }}
                  animate='visible'
                  variants={{
                    visible: (i: number) => ({
                      y: 0,
                      transition: {
                        delay: i * 0.09,
                      },
                    }),
                  }}>
                  足場ソリューションに おける 信頼される パートナーです。
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
            <p className={styles.whatWeDoHeading}>私たちの目標は何ですか？</p>
          </div>
          <div className={styles.servicesLayout}>
            <div className={styles.servicesCard}>
              <div>
                <div className={styles.serviceItem}>
                  <h3 className={styles.serviceTitle}>
                    1.ゼロ災害の達成と安全衛生管理の徹底（安全性の追求）
                  </h3>
                  <ul className={styles.serviceDescription}>
                    <li>労働災害発生率のゼロ維持。</li>
                    <li>定期的な安全教育と技能講習の実施。</li>
                    <li>
                      最新の安全基準や法規制を常に遵守し、作業手順書に反映させる。
                    </li>
                  </ul>
                  {/* <p className={styles.serviceDescription}>
                    新設橋梁から既存橋梁まで、耐久性に優れた高水準のソリューションをご提供します。
                  </p> */}
                </div>

                <div className={styles.serviceItem}>
                  <h3 className={styles.serviceTitle}>
                    2.生産性の最大化と工期厳守（効率性の追求）
                  </h3>
                  <ul className={styles.serviceDescription}>
                    <li>部材管理・運搬計画の最適化による作業時間の短縮。</li>
                    <li>
                      チーム間のコミュニケーションを円滑にし、手待ち時間を削減する。
                    </li>
                    <li>
                      クライアントとの綿密な連携により、設計変更などに迅速に対応し、工期を確実に守る。
                    </li>
                  </ul>
                </div>

                <div className={styles.serviceItem}>
                  <h3 className={styles.serviceTitle}>
                    3.品質の保証と顧客満足度の向上（信頼性の追求）
                  </h3>
                  <ul className={styles.serviceDescription}>
                    <li>組立・解体後の自主検査体制の強化と標準化。</li>
                    <li>
                      顧客の要望や現場の状況に合わせた柔軟な提案力（例えば、特殊な形状の足場の設計）。
                    </li>
                    <li>
                      顧客からのフィードバックを積極的に収集し、次の工事に活かすPDCAサイクルの確立。
                    </li>
                  </ul>
                </div>

                <div className={styles.serviceItem}>
                  <h3 className={styles.serviceTitle}>
                    4.人材育成と働きがいのある職場環境づくり（組織力の追求）
                  </h3>
                  <ul className={styles.serviceDescription}>
                    <li>
                      OJTや資格取得支援を通じた、次世代の足場技能士・主任技術者の育成。
                    </li>
                    <li>給与体系や福利厚生の改善による、定着率の向上。</li>
                    <li>
                      社員が目標やビジョンを共有できる、風通しの良い組織文化の醸成。
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.verticalTextContainer}>
                <div className={styles.verticalText}>
                  建設ソリューションのご案内
                </div>
                <div className={styles.verticalText}>高品質な</div>
              </div>
            </div>
          </div>
          {/* <CircularText
            text='大規模建設プロジェクトに対応した、安全でカスタマイズ可能な足場をご用意しております。'
            onHover='slowDown'
            spinDuration={50}
            className={styles.customCircularText}
          /> */}
        </motion.section>
        <div className={styles.galleryOuter}>
          <div ref={containertest} className={styles.gallery_container}>
            <div className={styles.sticky}>
              {pictures.map(({ src, scale }, index) => {
                return (
                  <motion.div
                    key={index}
                    style={{
                      scale,
                      y: translateY,
                    }}
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
            <div className={styles.featuredText}>
              <span className={styles.featuredNumber}>01</span>
              <h2 className={styles.featuredTitle}>一括吊上げ吊下げ工法</h2>
              <p className={styles.featuredDescription}>
                一括吊上げ工法は、吊足場での事故を減らすために、高所での組み立て作業を地面でビームと言われる専用架台の上に組み、４台のウインチで吊り上げ設置する弊社のみが行う特殊足場になります。
              </p>
            </div>
            <Link
              href={'/service/?scrollTo=01'}
              className={styles.contactButton}>
              <span>査定面談</span> <IconArrowRight className={styles.arrow} />
            </Link>
          </div>
        </section>
        <section className={styles.featuredContainerTwo}>
          <div className={styles.featuredImageWrapper}>
            <Image
              src='/images/hero/gallery-img-5.webp'
              alt='ヤモリ工法'
              fill
              objectFit='cover'
              // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </div>
          <div className={styles.featuredContent}>
            <div className={styles.featuredText}>
              <span className={styles.featuredNumber}>02</span>
              <h2 className={styles.featuredTitle}>ヤモリ工法</h2>
              <p className={styles.featuredDescription}>
                ヤモリ工法は、鉄道や交通量の多い交差点など、交通規制が出来ない場所で、橋桁にレールを取付け一括吊り上げ工法で、吊り上げた足場を水平展開する工法で移動中に下部を区画せずに移動できます。
              </p>
            </div>
            <Link
              href={'/service/?scrollTo=02'}
              // onClick={() => router.push('/service#02')}
              className={styles.contactButton}>
              <span>査定面談</span> <IconArrowRight className={styles.arrow} />
            </Link>
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
                  icon={<IconEarth />}
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
      </div>
    </main>
  );
};

export default HeroSection;
