"use client";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import style from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";

const InfiniteText = () => {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);
	const [_, setIsLoaded] = useState(false);

	let xPercent = 0;
	let direction = -1;

	useEffect(() => {
		// Register GSAP plugins
		gsap.registerPlugin(ScrollTrigger);

		// Start animation loop
		const animationId = requestAnimationFrame(animate);

		// Set up the scroll trigger for parallax effect
		const scrollTween = gsap.to(slider.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				scrub: 0.25,
				start: 0,
				end: window.innerHeight,
				onUpdate: (e) => (direction = e.direction * -1),
			},
			x: "-300px",
		});

		setIsLoaded(true);

		// Cleanup function
		return () => {
			cancelAnimationFrame(animationId);
			scrollTween.kill();
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	const animate = () => {
		// Reset position when reaching thresholds
		if (xPercent < -100) {
			xPercent = 0;
		} else if (xPercent > 0) {
			xPercent = -100;
		}

		// Update positions
		if (firstText.current && secondText.current) {
			gsap.set(firstText.current, { xPercent });
			gsap.set(secondText.current, { xPercent });
		}

		// Continue animation loop
		requestAnimationFrame(animate);

		// Increment position based on direction
		xPercent += 0.1 * direction;
	};
	return (
		<main className={style.main}>
			<Image
				fill
				src="/images/officestudio.png"
				alt="Office Studio Background"
				priority
				className={style.background_image}
				onLoad={() => setIsLoaded(true)}
			/>
			<div className={style.slider_container}>
				<div className={style.slider}>
					<p ref={firstText}>Freelance Developer -</p>
					<p ref={secondText}>Freelance Developer -</p>
				</div>
			</div>
			<div className={style.overlay} />
		</main>
	);
};

export default InfiniteText;
