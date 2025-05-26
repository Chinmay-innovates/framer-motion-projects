"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { useRef } from "react";
const double = ({ projects, reversed }) => {
	const speed = 0.15;
	const firstImage = useRef(null);
	const secondImage = useRef(null);

	let requestAnimationFrameId = null;
	let xPercent = reversed ? 100 : 0;
	let currentXPercent = reversed ? 100 : 0;

	const handleMouseMove = (e) => {
		const { clientX } = e;

		xPercent = (clientX / window.innerWidth) * 100;

		if (!requestAnimationFrameId) {
			requestAnimationFrameId = window.requestAnimationFrame(animate);
		}
	};
	const animate = () => {
		// Add easing to the animation
		const xPercentDelta = xPercent - currentXPercent;
		currentXPercent = currentXPercent + xPercentDelta * speed;

		// Ensure refs are set before trying to access style
		if (firstImage.current && secondImage.current) {
			const firstImagePercent = 66.66 - currentXPercent * 0.33;
			const secondImagePercent = 33.33 + currentXPercent * 0.33;

			firstImage.current.style.width = `${firstImagePercent}%`;
			secondImage.current.style.width = `${secondImagePercent}%`;
		}

		if (Math.round(xPercent) === Math.round(currentXPercent)) {
			window.cancelAnimationFrame(requestAnimationFrameId);
			requestAnimationFrameId = null;
		} else {
			window.requestAnimationFrame(animate);
		}
	};

	return (
		<div
			onMouseMove={(e) => {
				handleMouseMove(e);
			}}
			className={styles.double}
		>
			<div ref={firstImage} className={styles.imageContainer}>
				<div className={styles.stretchyWrapper}>
					<Image
						src={`/images/${projects[0].src}`}
						fill={true}
						alt={projects[0].name}
					/>
				</div>

				<div className={styles.body}>
					<h3>{projects[0].name}</h3>
					<p>{projects[0].description}</p>
					<p>{projects[0].year}</p>
				</div>
			</div>

			<div ref={secondImage} className={styles.imageContainer}>
				<div className={styles.stretchyWrapper}>
					<Image
						src={`/images/${projects[1].src}`}
						fill={true}
						alt={projects[1].name}
					/>
				</div>

				<div className={styles.body}>
					<h3>{projects[1].name}</h3>
					<p>{projects[1].description}</p>
					<p>{projects[1].year}</p>
				</div>
			</div>
		</div>
	);
};

export default double;
