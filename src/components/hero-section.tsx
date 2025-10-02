/** @format */

import Image from 'next/image';
import styles from './HeroSection.module.scss'; // Import the SCSS module

const HeroSection = () => {
	return (
		<main className={styles.heroContainer}>
			<div className={styles.glassBox}>
				<div className={styles.header}>
					<Image
						src='/logo.png' // Path to your logo in the public folder
						alt='Highway Mentech Logo'
						width={50}
						height={50}
						className={styles.logo}
					/>
					<h1 className={styles.companyName}>ハイウェイメンテック株式会社</h1>
				</div>
				<p className={styles.description}>
					「足場から橋梁のメンテナンスまで、当社は安全性、革新性、品質を備えた信頼性の高い建設ソリューションを提供します。」
				</p>
			</div>

			<div className={styles.startButton}>
				Start <span className={styles.arrow}>→</span>
			</div>
		</main>
	);
};

export default HeroSection;
