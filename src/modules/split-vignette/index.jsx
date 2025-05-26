"use client";
import Lenis from "@studio-freight/lenis";
import Gallery from "./components/Gallery";
import Description from "./components/Description";
import { useEffect, useCallback } from "react";
import { useSpring } from "framer-motion";
import { throttle } from "@/utils/throttle";

const projects = [
	{ name: "Dyal Thak", handle: "dyal_thak" },
	{ name: "Leidinger Matthias", handle: "leidinger_matthias" },
	{ name: "Mark Rammers", handle: "mark_rammers" },
	{ name: "Landon Speers", handle: "landon_speers" },
];

const Index = () => {
	const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };

	const mousePosition = {
		x: useSpring(0, springConfig),
		y: useSpring(0, springConfig),
	};

	const handleMouseMove = useCallback(
		throttle((e) => {
			const { clientX, clientY } = e;
			const targetX = clientX - (window.innerWidth / 2) * 0.25;
			const targetY = clientY - (window.innerWidth / 2) * 0.3;
			mousePosition.x.set(targetX);
			mousePosition.y.set(targetY);
		}, 16),
		[]
	);

	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => t,
			smoothWheel: true,
			smoothTouch: true,
		});

		const raf = (time) => {
			lenis.raf(time);
			requestAnimationFrame(raf);
		};
		requestAnimationFrame(raf);
	}, []);

	return (
		<main onMouseMove={handleMouseMove}>
			{projects.map(({ handle }, i) => (
				<Gallery key={i} handle={handle} mousePosition={mousePosition} />
			))}
			<Description mousePosition={mousePosition} projects={projects} />
		</main>
	);
};

export default Index;
