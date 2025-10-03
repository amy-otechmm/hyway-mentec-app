/** @format */
'use client';

import Image from 'next/image';
import styles from './hero-section.module.scss'; // Import the SCSS module
import { useRef } from 'react';
import DotGrid from '../ui-accessory/ui-accessory';

const HeroSection = () => {
	const contentRef = useRef<HTMLDivElement>(null); // Ref for scrolling

	// Function to handle smooth scrolling
	const handleStartClick = () => {
		contentRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<main className={styles.heroContainer}>
			<section className={styles.landingContainer}>
				<div className={styles.glassBox}>
					<div className={styles.header}>
						<Image src='/logo.png' alt='Logo' width={50} height={50} className={styles.logo} />
						<h1 className={styles.landingCompanyName}>ハイウェイメンテック株式会社</h1>
					</div>
					<p className={styles.landingDescription}>
						「足場から橋梁のメンテナンスまで、当社は安全性、革新性、品質を備えた信頼性の高い建設ソリューションを提供します。」
					</p>
				</div>
				<div className={styles.startButton} onClick={handleStartClick}>
					Start <span className={styles.arrow}>→</span>
				</div>
			</section>
			<section className={styles.bridgeContainer} ref={contentRef}>
				<DotGrid className={styles.rightDots} rows={3} cols={2} />
				<DotGrid className={styles.leftDots} rows={4} cols={2} />
				<div className={styles.bridgeContent}>
					<p>ハイウェイメンテックは</p>
					<h1 className={styles.bridgeTitle}>
						橋梁建設、高速道路保守、
						<br />
						足場ソリューションにおける信頼さるパートナーです。
					</h1>
					<p className={styles.bridgeSubtitle}>
						長年の専門知識を活かし、安全第一の実践、最新技術、そして熟練の職人技を融合させ、長期にわたるプロジェクトを実施します。
					</p>
				</div>
			</section>
			<section className={styles.whatWeDoContainer}>
				<div className={styles.whatWeDoContent}>
					<div className={styles.whatWeDoSubheading}>
						<span className={styles.icon}>⚙️</span>
						What We Do
					</div>
					<h2 className={styles.whatWeDoHeading}>私たちの目標は何ですか？</h2>
				</div>
			</section>
			<section className={styles.servicesContainer}>
				<div className={styles.servicesLayout}>
					<div className={styles.servicesCard}>
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
							<h3 className={styles.serviceTitle}>高速道路の補修・安全対策</h3>
							<p className={styles.serviceDescription}>
								高速道路を常に安全・強固・効率的に保つための補修・安全対策を実施いたします。
							</p>
						</div>

						{/* Service Item 4 */}
						<div className={styles.serviceItem}>
							<h3 className={styles.serviceTitle}>コンサルティング・プロジェクト管理</h3>
							<p className={styles.serviceDescription}>
								企画立案から監督、完成まで、一貫した専門的なサポートをご提供いたします。
							</p>
						</div>
					</div>
					<div className={styles.verticalText}>高品質な建設ソリューションのご案内</div>
				</div>
			</section>
			<section className={styles.galleryContainer}>
				<div className={styles.galleryGrid}>
					{/* Each div below is a grid area for an image */}
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
				</div>
			</section>
			<section className={styles.featuredContainer}>
				<div className={styles.featuredImageWrapper}>
					<Image src='/images/hero/gallery-img-1.png' alt='一括吊上げ吊下げ工法' layout='fill' objectFit='cover' />
				</div>
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
			<section className={styles.featuredContainer}>
				<div className={styles.featuredImageWrapper}>
					<Image src='/featured-method-2.jpg' alt='ヤモリ工法' layout='fill' objectFit='cover' />
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

			<section className={styles.reasonsContainer}>
				<div className={styles.reasonsLeftDots}></div>
				<div className={styles.reasonsRightDots}></div>
				<div className={styles.reasonsTitleWrapper}>
					<h2 className={styles.reasonsTitle}>当社を選ぶ理由</h2>
					<p className={styles.reasonsSubtitle}>ハイウェイ・メンテック</p>
				</div>
				<div className={styles.reasonsGrid}>
					{/* Reason 1 */}
					<div className={styles.reasonCard}>
						<div className={styles.reasonIcon}>[Icon1]</div>
						<h3 className={styles.reasonTitle}>持続可能な取り組み</h3>
						<p className={styles.reasonDescription}>廃棄物削減・環境配慮・資材最適化を重視しています。</p>
					</div>

					{/* Reason 2 */}
					<div className={styles.reasonCard}>
						<div className={styles.reasonIcon}>[Icon2]</div>
						<h3 className={styles.reasonTitle}>効率的かつ納期厳守</h3>
						<p className={styles.reasonDescription}>事前組立と専用車両で工期短縮、渋滞を緩和します。</p>
					</div>

					{/* Reason 3 */}
					<div className={styles.reasonCard}>
						<div className={styles.reasonIcon}>[Icon3]</div>
						<h3 className={styles.reasonTitle}>卓越したエンジニアリング</h3>
						<p className={styles.reasonDescription}>先進工法を駆使し、複雑な環境に最適な解決策を提供します。</p>
					</div>

					{/* Reason 4 */}
					<div className={styles.reasonCard}>
						<div className={styles.reasonIcon}>[Icon4]</div>
						<h3 className={styles.reasonTitle}>安全第一</h3>
						<p className={styles.reasonDescription}>すべての作業で安全を最優先にしています。</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default HeroSection;
