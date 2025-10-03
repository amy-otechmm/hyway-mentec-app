/** @format */

import React, { useRef } from 'react';
import styles from './ui-accessory.module.scss';

export default function DotGrid({ className, rows, cols }: { className: string; rows: number; cols: number }) {
	const totalDots = rows * cols;
	return (
		<div className={`${styles.dotGrid} ${className}`}>
			{Array.from({ length: totalDots }).map((_, i) => (
				<div key={i} className={styles.dot}></div>
			))}
		</div>
	);
}
