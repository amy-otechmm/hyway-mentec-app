/** @format */

import Link from 'next/link';
import styles from './main-layout.module.scss';

const NavBar = () => {
	const navLinks = [
		{ name: 'ホームページ', href: '/' },
		{ name: 'サービス', href: '/service' },
		{ name: '会社', href: '/about-us' },
		{ name: '連絡先', href: '/contact' },
	];

	return (
		<nav className={styles.navWrapper}>
			<div className={styles.companyName}>
				<Link href='/'>ハイウェイメンテック株式会社</Link>
			</div>
			<ul className={styles.navList}>
				{navLinks.map((link) => (
					<li key={link.name} className={styles.navItem}>
						<Link href={link.href}>{link.name}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
