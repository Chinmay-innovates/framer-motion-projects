"use client";
import { useEffect } from "react";
import Intro from "./components/intro";
import Description from "./components/description";
import Projects from "./components/projects";
const SmoothScroll = () => {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;

			const locomotiveScroll = new LocomotiveScroll();

			locomotiveScroll.on("scroll", (obj) => {
				document.documentElement.style.setProperty(
					"--scrollTop",
					obj.scroll.y + "px"
				);
			});
		})();
	}, []);

	return (
		<main>
			<Intro />
			<Description />
			<Projects />
		</main>
	);
};

export default SmoothScroll;
