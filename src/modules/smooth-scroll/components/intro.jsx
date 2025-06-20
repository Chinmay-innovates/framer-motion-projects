import { useRef } from "react";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import styles from "./style.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
const Intro = () => {
	const background = useRef(null);
	const introImage = useRef(null);
	const homeHeader = useRef(null);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: document.documentElement,
				scrub: true,
				start: "top",
				end: "+=500px",
			},
		});

		timeline
			.from(background.current, { clipPath: `inset(15%)` })
			.to(introImage.current, { height: "200px" }, 0);
	}, []);
	return (
		<div ref={homeHeader} className={styles.homeHeader}>
			<div className={styles.backgroundImage} ref={background}>
				<Image
					src={"/images/background.jpeg"}
					fill
					alt="background image"
					priority
				/>
			</div>

			<div className={styles.intro}>
				<div
					ref={introImage}
					data-scroll
					data-scroll-speed="0.3"
					className={styles.introImage}
				>
					<Image src={"/images/intro.png"} alt="intro image" fill priority />
				</div>

				<h1 data-scroll data-scroll-speed="0.7">
					SMOOTH SCROLL
				</h1>
			</div>
		</div>
	);
};

export default Intro;
