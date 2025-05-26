"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import {
	floating1,
	floating2,
	floating3,
	floating4,
	floating5,
	floating6,
	floating7,
	floating8,
} from "@/data/images";

const FloatingImageGallery = () => {
	const planes = useRef([null, null, null]);
	const easing = 0.08;
	const speed = 0.01;
	let xForce = 0;
	let yForce = 0;

	const manageMouseMove = useCallback((e) => {
		const { movementX, movementY } = e;
		xForce += movementX * speed;
		yForce += movementY * speed;
	}, []);

	const lerp = (start, target, amount) =>
		start * (1 - amount) + target * amount;

	const animate = useCallback(() => {
		xForce = lerp(xForce, 0, easing);
		yForce = lerp(yForce, 0, easing);

		planes.current.forEach((plane, index) => {
			const factor = 1 - index * 0.25; // Plane 1: full force, Plane 2: 0.5, Plane 3: 0.25
			gsap.set(plane, { x: `+=${xForce * factor}`, y: `+=${yForce * factor}` });
		});

		if (Math.abs(xForce) > 0.01 || Math.abs(yForce) > 0.01) {
			requestAnimationFrame(animate);
		}
	}, [xForce, yForce]);

	useEffect(() => {
		const onMouseMove = (e) => manageMouseMove(e);
		document.addEventListener("mousemove", onMouseMove);

		return () => {
			document.removeEventListener("mousemove", onMouseMove);
		};
	}, [manageMouseMove]);

	useEffect(() => {
		requestAnimationFrame(animate);
		return () => cancelAnimationFrame(requestAnimationFrame(animate));
	}, [animate]);

	return (
		<main className={styles.main}>
			<div ref={(el) => (planes.current[0] = el)} className={styles.plane}>
				<Image src={floating1} alt="image_1" width={300} />
				<Image src={floating2} alt="image_2" width={300} />
				<Image src={floating7} alt="image_7" width={225} />
			</div>
			<div ref={(el) => (planes.current[1] = el)} className={styles.plane}>
				<Image src={floating4} alt="image_4" width={250} />
				<Image src={floating6} alt="image_6" width={200} />
				<Image src={floating8} alt="image_8" width={225} />
			</div>
			<div ref={(el) => (planes.current[2] = el)} className={styles.plane}>
				<Image src={floating3} alt="image_3" width={150} />
				<Image src={floating5} alt="image_5" width={200} />
			</div>
			<div className={styles.title}>
				<h1>Floating Images Gallery</h1>
				<p>Next.js and GSAP</p>
			</div>
		</main>
	);
};

export default FloatingImageGallery;
