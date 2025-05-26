"use client";

import { useTransform, useScroll, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";
import Image from "next/image";

import { images } from "@/data/images";
import styles from "./style.module.scss";
import { useDimensionn } from "@/hooks/use-dimensionn";

const COLUMN_CONFIG = [
	{ images: [0, 1, 2], factor: 2 },
	{ images: [3, 4, 5], factor: 3.3 },
	{ images: [6, 7, 8], factor: 1.25 },
	{ images: [9, 10, 11], factor: 3 },
];

const SmoothParallaxScroll = () => {
	const container = useRef(null);

	const { height } = useDimensionn();
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	useEffect(() => {
		const lenis = new Lenis();
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);

	return (
		<main className={styles.main}>
			Scroll down to see the parallax effect in action!
			<div className={styles.spacer} />
			<div ref={container} className={styles.gallery}>
				<div className={styles.galleryWrapper}>
					{COLUMN_CONFIG.map(({ images: imgIndexes, factor }, i) => (
						<Column
							key={i}
							images={imgIndexes.map((index) => images[index])}
							y={useTransform(scrollYProgress, [0, 1], [0, height * factor])}
						/>
					))}
				</div>
			</div>
			<div className={styles.spacer} />
		</main>
	);
};

export default SmoothParallaxScroll;

const Column = ({ images, y }) => (
	<motion.div style={{ y }} className={styles.column}>
		{images.map((src, i) => (
			<div key={i} className={styles.imageContainer}>
				<Image
					src={src}
					alt={`image-${i}`}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					fill
				/>
			</div>
		))}
	</motion.div>
);
