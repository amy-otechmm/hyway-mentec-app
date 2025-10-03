/** @format */

import Link from 'next/link';
import styles from './main-layout.module.scss';

const SideMenu = () => {
	return (
		<nav className={styles.menu}>
			<ul>
				<li>
					<Link href='#speech'>スピーチ</Link>
				</li>
				<li>
					<Link href='#profile'>会社概要</Link>
				</li>
				<li>
					<Link href='#history'>沿革</Link>
				</li>
				<li>
					<Link href='#access'>アクセス方法</Link>
				</li>
			</ul>
		</nav>
	);
};

export default SideMenu;
