/** @format */



import React from 'react';
import styles from './card.module.scss';

interface CardProps {
	icon: React.ReactNode; // Allows passing an SVG or any other React component
	title: string;
	description: string;
	className?: string; // Optional custom class
}

const Card = ({ icon, title, description, className }: CardProps) => {
	return (
		<div className={`${styles.card} ${className}`}>
			<div className={styles.windowDots}>
				<div className={styles.dot}></div>
				<div className={styles.dot}></div>
				<div className={styles.dot}></div>
			</div>

			<div className={styles.iconWrapper}>{icon}</div>

			<h3 className={styles.title}>{title}</h3>
			<p className={styles.description}>{description}</p>
		</div>
	);
};

export default Card;
