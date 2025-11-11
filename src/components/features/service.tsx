/** @format */

'use client';

import Image from 'next/image';
import styles from './service.module.scss';
import { IconDotsGrid } from '../icons/icons';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const ServicePage = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Wait until the DOM is hydrated before using the ref
  useEffect(() => {
    setIsReady(true);
  }, []);

  // Define scroll and transform values *after* hydration
  const { scrollYProgress } = useScroll({
    target: isReady ? container : undefined,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh']);

  return (
    <main>
      {/* ===== 1. Hero Section ===== */}
      <section className={styles.hero}>
        <IconDotsGrid className={styles.right_dots} />
        <p className={styles.heroTitle}>OUR SERVICE</p>
        <p className={styles.heroSubtitle}>
          「パーフェクト工法」は、吊下げることによる事故をなくすことを目的として開発された足場です。
        </p>
      </section>

      {/* ===== 2. Intro Section ===== */}
      <section className={styles.intro}>
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
        <div>
          <p className={styles.introTitle}>革新的吊り足場工法</p>
          <div>
            <p className={styles.introDescription}>
              当社の足場はユニット化された吊足場を使っており、従来の足場工法での問題点であった作業効率の悪さ、近隣問題、躯体へのあと施工アンカー打設によるクラックの発生の問題を解消できるため、多くの現場で採用されています。
            </p>
            <p>
              吊上げ装置(パーフェクトビーム)の上に足場を組み吊上げるので、高所作業が少ない。足場架設解体中に開口部が少ないので、作業員･通行車輌等に対して安全な足場です。また在来の足場に比べて隙間･段差がないので、資材の落下がなく作業性にも優れています。
            </p>
            <p>
              この足場を使って、従来の吊足場工法、桁の下フランジから吊下げる方法、橋脚と橋台の側面から吊下げる方法、場所打桁の側面から吊下げる方法、場所打桁の側面から吊下げる方法を使って円型、アーチ型の足場も設置可能となります。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicePage;
