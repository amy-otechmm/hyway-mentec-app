/** @format */

'use client';

import Image from 'next/image';
import styles from './service.module.scss';
import { IconDotsGrid } from '../icons/icons';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import TwoColumnSection from './two-column-section';
import ProductCard from '../ui-accessory/product-card';
import { usePathname } from 'next/navigation';

const ServicePage = () => {
  const productData = [
    {
      title: 'Spider Panel',
      company: '株式会社タカミヤ',
      imageUrl: '/images/service/service_product_2.jpg',
      imageAlt: 'Spider Panel scaffolding',
      features: [
        {
          label: '安全性',
          description: '内蔵の隙間床材により、隙間・段差のない作業空間を実現。',
        },
        {
          label: '組立性',
          description:
            'ガイド材になる受け金具で簡単に位置決め。連結ボルトでしっかり固定。',
        },
        {
          label: '汎用性',
          description: '高架橋のカーブにも対応可能。アサガオとしても設置可能。',
        },
      ],
    },
    {
      title: 'VMAX',
      company: '株式会社タカミヤ',
      imageUrl: '/images/service/service_product_3.jpg',
      imageAlt: 'VMAX scaffolding',
      features: [
        {
          label: '安全性',
          description:
            'クランプ不要でスピーディーに組立。床材も隙間なく敷設可能。',
        },
        {
          label: '作業効率',
          description:
            'フレキシブルな開口部で効率的荷揚げ。自由な吊りチェーンで登り替えラクラク。',
        },
        {
          label: '経済性',
          description:
            '吊足場兼用により、通路管制や高所作業車の運用を最小限に。',
        },
      ],
    },
    {
      title: 'クイックデッキ',
      company: '日綜産業株式会社',
      imageUrl: '/images/service/service_product_2.jpg', // You need to add this image
      imageAlt: 'Quick Deck scaffolding',
      features: [
        {
          label: '安全性',
          description:
            '吊点から跳ね出し最大5mの先行足場工法で、高所作業の危険を軽減。',
        },
        {
          label: '高い強度',
          description:
            'トラス構造ジョイスト×高強度チェーンで最大積載350kg/㎡。',
        },
        {
          label: '快適な床',
          description:
            '吊チェーン間隔が広く、たわみが少なく段差や開口が無い快適な床。',
        },
      ],
    },
  ];
  const container = useRef<HTMLDivElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Wait until the DOM is hydrated before using the ref
  useEffect(() => {
    setIsReady(true);
  }, []);

  const [scrollToParam, setScrollToParam] = useState<string | null>(null);
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const target = searchParams.get('scrollTo');
    if (target) {
      setScrollToParam(target);
      const el = document.getElementById(target);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  // Define scroll and transform values *after* hydration
  const { scrollYProgress } = useScroll({
    target: isReady ? container : undefined,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh']);

  return (
    <main className={styles.servicePage}>
      {/* ===== 1. Hero Section ===== */}
      <section className={classNames([styles.hero, styles.heroSticky])}>
        <IconDotsGrid className='right_dots' />
        <IconDotsGrid className='left_dots' />
      </section>

      <div className={styles.scrollWrapper}>
        {/* ===== 2. Intro Section ===== */}
        <section className={styles.intro}>
          <p className={styles.heroTitle}>OUR SERVICE</p>
          <p className={styles.introHighlight}>
            「パーフェクト工法」は、落下物による事故を
            <br />
            なくすことを目的として
            <br />
            考案された工法です。
          </p>
          <div className={styles.heroImage}>
            <Image
              src='/images/service/mask-group-1.png'
              alt='サービスイメージ'
              fill
              style={{ objectFit: 'cover' }}
              className={styles.image}
            />
          </div>
        </section>

        {/* ===== 3. Motion Scroll Section ===== */}
        <section className={styles.introText} ref={container}>
          {/* {isReady && (
          <div className='h-screen overflow-hidden'>
            <motion.div style={{ y }} className='relative h-full'>
              <Image
                src='/images/service/service-img-1.jpg' // fixed typo
                fill
                alt='image'
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        )} */}

          <div className={styles.container}>
            <main className={styles.content}>
              <h1 className={styles.title}>革新的吊り足場工法</h1>
              <p className={styles.text}>
                当社の足場はユニット化された鋼製枠を使った全面板張りの吊り足場です。
              </p>
              <p className={styles.text}>
                吊上げ装置(パーフェクトビーム)の上に足場を組み吊上げるので、高所作業が少ない。足場架設解体中に開口部が少ないので、作業員・通行車輌等に対して安全な足場です。
                また在来の足場に比べて隙間・段差がないので、資材の落下がなく作業性にも優れています。
              </p>
              <p className={styles.text}>
                この足場を使って標準的な一括吊上げ吊下げ工法、桁の下フランジにレールを取付けて足場を移動させるヤモリ工法および主桁上にパーフェクトビームを使って門型クレーンを組んで足場を移動させるハイグラン
                ド工法等があります。
              </p>
            </main>
          </div>

          <TwoColumnSection
            title='一括吊上げ吊下げ工法'
            imageUrl='/images/service/about-img-1.png' /* Path from 'public' folder */
            imageAlt='Underside of a large bridge'
            imagePosition='right' /* Image on the right */
            id='01'>
            {/* Pass the text as children */}
            <p>
              足場を架設するなるべく近くにパーフェクトビー
              ムを据えて、その上に足場を組む。
              足場の大きさは幅は1.4メートル・2.8メートル・
              4.2メートル・5.95メートルを組み合わせて現地に 合う幅にします。
            </p>
            <p>
              足場の長さは支障物・地組みスペースで決まりま
              すが、最大25メートル最小3メートルです。
              足場を吊上げ桁からチェーンで足場を吊ったら
              パーフェクトビームをずらす。 後日シート張り・ 中段足場組等を行う。
            </p>
          </TwoColumnSection>

          <TwoColumnSection
            title='ヤモリ工法'
            imageUrl='/images/service/about-img-2.png' /* Path from 'public' folder */
            imageAlt='City highway junction at sunset'
            imagePosition='left' /* Image on the left */
            id='02'>
            <p>
              径間内に鉄道・大きな交叉点・大きな支障物があるときに
              採用する工法です。基本的には一括吊上げ吊下げ工法と
              同じですが、桁の下フランジに移動用のレールを取付け
              て移動する点が違います。 レール取付等はすべて足場内
              で行います。このため交叉点等を規制する必要はありま せん。
            </p>
            <p>
              上の写真は真愛 - 有明で片側5車線ある国道19号線上にヤ
              モリ工法で足場を架設したものです。 歯間に左側の歩道
              の一部を占用して架設しました。 車道部は一切規制して おりません。
            </p>
          </TwoColumnSection>
        </section>
        {/* ===== 4. NEW: Product Grid Section ===== */}
        <section className={styles.productGridSection}>
          <div className={styles.productGrid}>
            {productData.map((product, index) => (
              <ProductCard
                key={product.title}
                index={index} // 👈 add this
                title={product.title}
                company={product.company}
                imageUrl={product.imageUrl}
                imageAlt={product.imageAlt}
                features={product.features}
              />
            ))}
          </div>
        </section>

        {/* ===== 5. NEW: Unit Section ===== */}
        <section className={styles.unitSection}>
          <div className={styles.unitContent}>
            <h2 className={styles.unitTitle}>
              お客様に合わせてご提案
              <br />
              <span>ユニット式</span>
            </h2>
            <div className={styles.unitImage}>
              <Image
                src='/images/service/bridge-img1.png'
                alt='Unit System bridge scaffolding'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ServicePage;
