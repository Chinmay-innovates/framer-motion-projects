import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./style.module.css";
import gsap from "gsap";

const phrases = [
	"Los Flamencos National Reserve",
	"is a nature reserve located",
	"in the commune of San Pedro de Atacama",
	"The reserve covers a total area",
	"of 740 square kilometres (290 sq mi)",
];
const AnimatedPhrase = ({ children }) => {
	const phraseRef = useRef(null);
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.from(phraseRef.current, {
			scrollTrigger: {
				trigger: phraseRef.current,
				start: "0px bottom",
				end: "+=400px bottom",
				scrub: true,
			},
			opacity: 0,
			left: "-400px",
			ease: "power3.Out",
		});
	}, []);
	return (
		<p ref={phraseRef} data-scroll data-scroll-speed="0.1">
			{children}
		</p>
	);
};

const Description = () => {
	return (
		<div className={styles.description}>
			{phrases.map((phrase, index) => (
				<AnimatedPhrase key={index}>{phrase}</AnimatedPhrase>
			))}
		</div>
	);
};

export default Description;
