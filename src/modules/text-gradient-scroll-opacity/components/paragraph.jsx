import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import styles from "./style.module.scss";

export default function Paragraph({ paragraph }) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start 0.9", "start 0.25"],
	});

	return (
		<motion.p
			ref={container}
			className={styles.paragraph}
			style={{ opacity: scrollYProgress }}
		>
			{paragraph}
		</motion.p>
	);
}
