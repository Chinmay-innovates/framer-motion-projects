"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import styles from "./style.module.css";
import { height } from "./animation";
import Image from "./image";
import Body from "./body";
import Footer from "./footer";
import { LINKS } from "@/data/constants";

const Nav = () => {
	const navRef = useRef(null);
	const [selectedLink, setSelectedLink] = useState({
		isActive: false,
		index: 0,
	});

	// Focus management
	useEffect(() => {
		if (navRef.current) {
			navRef.current.focus();
		}
	}, []);

	// Keyboard navigation
	useEffect(() => {
		const handleKeydown = (e) => {
			if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				e.preventDefault();
				const direction = e.key === "ArrowDown" ? 1 : -1;
				const newIndex = Math.max(
					0,
					Math.min(LINKS.length - 1, selectedLink.index + direction)
				);
				setSelectedLink({ isActive: true, index: newIndex });
			}
		};

		document.addEventListener("keydown", handleKeydown);
		return () => document.removeEventListener("keydown", handleKeydown);
	}, [selectedLink.index]);

	return (
		<motion.div
			ref={navRef}
			variants={height}
			className={styles.nav}
			initial="initial"
			animate="enter"
			exit="exit"
			role="navigation"
			aria-label="Main navigation"
		>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<Body
						links={LINKS}
						selectedLink={selectedLink}
						setSelectedLink={setSelectedLink}
					/>
					<Footer />
				</div>
				<Image
					src={LINKS[selectedLink.index].src}
					selectedLink={selectedLink}
				/>
			</div>
		</motion.div>
	);
};

export default Nav;
