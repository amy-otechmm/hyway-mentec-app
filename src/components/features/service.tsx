/** @format */

// app/about/page.tsx

import Image from 'next/image';
import styles from './service.module.scss';
import { IconDelivery } from '../icons/icons';
import Card from '../ui-accessory/card';

const ServicePage = () => {
	return (
		<main>
			{/* ===== 1. Hero Section ===== */}
			<section className={styles.hero}>
				<h1 className={styles.heroTitle}>OUR SERVICE</h1>
				<p className={styles.heroSubtitle}>
					「パーフェクト工法」は、吊下げることによる事故をなくすことを目的として開発された足場です。
				</p>
			</section>

			{/* ===== 2. Intro Section ===== */}
			<section className={styles.intro}>
				<h2 className={styles.introTitle}>革新的吊り足場工法</h2>
				<p className={styles.introDescription}>
					当社の足場はユニット化された吊足場を使っており、従来の足場工法での問題点であった作業効率の悪さ、近隣問題、躯体へのあと施工アンカー打設によるクラックの発生の問題を解消できるため、多くの現場で採用されています。この足場を使って、従来の吊足場工法、桁の下フランジから吊下げる方法、橋脚と橋台の側面から吊下げる方法、場所打桁の側面から吊下げる方法、場所打桁の側面から吊下げる方法を使って円型、アーチ型の足場も設置可能となります。
				</p>
			</section>

			{/* ===== 3. Alternating Features Section ===== */}
			<section className={styles.alternatingFeatures}>
				<div className={styles.featureItem}>
					<div className={styles.featureText}>
						<h3 className={styles.featureTitle}>一括吊上げ吊下げ工法</h3>
						<p className={styles.featureDescription}>
							足場を地組ヤードでユニットに組立て、クレーン・ベント設備等で吊上げ、架設桁に固定します。架設桁の移動、吊下げ、横取り、回転機能により、任意の位置に足場を設置できます。作業完了後は、ユニット毎に吊下げ、地組ヤードまで戻し、解体します。
						</p>
					</div>
					<div className={styles.featureImage}>
						<Image src='/images/service/about-img-1.png' alt='一括吊上げ吊下げ工法' layout='fill' objectFit='cover' />
					</div>
				</div>
				<div className={styles.featureItem}>
					<div className={styles.featureText}>
						<h3 className={styles.featureTitle}>ヤモリ工法</h3>
						<p className={styles.featureDescription}>
							橋桁にレールを設置し、ヤモリ（台車）を走行させ、足場ユニットを吊下げます。ヤモリは橋軸方向、橋軸直角方向に走行可能で、任意の位置に足場を設置できます。橋梁下条件（河川、道路、鉄道等）に影響されず、安全に足場を設置・解体できます。
						</p>
					</div>
					<div className={styles.featureImage}>
						<Image src='/images/service/about-img-2.png' alt='ヤモリ工法' layout='fill' objectFit='cover' />
					</div>
				</div>
			</section>

			{/* ===== 4. Methods Section ===== */}
			<section className={styles.methodsSection}>
				<div className={styles.topLeftDots}></div>
				<div className={styles.bottomLeftDots}></div>

				<div className={styles.container}>
					<div className={styles.titleWrapper}>
						<h2 className={styles.title}>当社を選ぶ理由</h2>
						<p className={styles.subtitle}>ハイウェイ・メンテック</p>
					</div>

					<div className={styles.grid}>
						<div className={styles.row}>
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
						</div>
						<div className={styles.row}>
							<Card
								icon={<IconDelivery />}
								title='卓越したエンジニアリング'
								description='先進工法を駆使し、複雑な環境に最適な解決策を提供します。'
							/>
							<Card
								icon={<IconDelivery />}
								title='安全第一'
								description='すべての作業で安全を最優先にしています。'
							/>
						</div>
					</div>
				</div>
			</section>

			{/* ===== 5. Unit Section ===== */}
			<section className={styles.unitSection}>
				<div className={styles.unitContent}>
					<h3 className={styles.unitTitle}>お客様に合わせてご提案 ユニット式</h3>
					<div className={styles.unitImage}>
						<Image src='/images/about/unit.jpg' alt='ユニット式' layout='fill' objectFit='cover' />
					</div>
				</div>
			</section>
		</main>
	);
};

export default ServicePage;
