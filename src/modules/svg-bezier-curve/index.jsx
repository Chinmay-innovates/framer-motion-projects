"use client";

import { useEffect, useRef } from "react";
import styles from "./style.module.scss";

const SvgBezierCurve = () => {
	const path = useRef(null);
	let x = 0.5;
	let time = Math.PI / 2;
	let value = 10;
	let reqId = null;
	let progress = 0;

	const lerp = (x, y, a) => x * (1 - a) + y * a;

	const setPath = (val) => {
		if (!path.current) return;

		const width = window.innerWidth * 0.7;
		path.current.setAttributeNS(
			null,
			"d",
			`M0 50 Q${width * x} ${50 + val} ${width} 50`
		);
	};

	const animateIn = () => {
		if (reqId) {
			cancelAnimationFrame(reqId);
			time = Math.PI / 2;
		}

		const tick = () => {
			value = lerp(value, 0, 0.1);
			setPath(progress);
			reqId = requestAnimationFrame(tick);
		};

		tick();
	};

	const resetAnimation = () => {
		cancelAnimationFrame(reqId);
		animateOut();
	};

	const animateOut = () => {
		const tick = () => {
			const newProgress = progress * Math.sin(time);
			setPath(newProgress);

			progress = lerp(progress, 0, 0.04);
			time += 0.2;

			if (Math.abs(progress) > 0.5) {
				reqId = requestAnimationFrame(tick);
			} else {
				time = Math.PI / 2;
				progress = 0;
			}
		};

		tick();
	};

	const manageMouseMove = (e) => {
		const { movementY } = e;
		const box = e.target.getBoundingClientRect();
		x = (e.clientX - box.left) / box.width;
		progress += movementY;
	};

	useEffect(() => {
		setPath(progress);

		const handleResize = () => setPath(progress);
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			cancelAnimationFrame(reqId);
		};
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.body}>
				<div className={styles.line}>
					<span
						onMouseEnter={animateIn}
						onMouseLeave={resetAnimation}
						onMouseMove={manageMouseMove}
						className={styles.box}
					/>

					<svg>
						<path ref={path}></path>
					</svg>
				</div>

				<div className={styles.description}>
					<p>Smart Development</p>
					<p>
						Combining unique design and rich technology, we build digital
						products exactly as they were designed, without shortcuts or
						simplifications.
					</p>
				</div>

				<div className={styles.tagsContainer}>
					<p>Areas</p>
					<div className={styles.tags}>
						<p>E-commerce</p>
						<p>Finance</p>
						<p>Education</p>
						<p>Social</p>
						<p>Entertainment</p>
						<p>Medicine</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SvgBezierCurve;
