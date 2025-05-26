import { useRef, useEffect } from "react";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";

const scaleVariants = {
	initial: { scale: 0, x: "-50%", y: "-50%" },
	enter: {
		scale: 1,
		x: "-50%",
		y: "-50%",
		transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
	},
	closed: {
		scale: 0,
		x: "-50%",
		y: "-50%",
		transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
	},
};

export default function Modal({ modal, projects }) {
	const { active, index } = modal;
	const modalRef = useRef(null);
	const cursorRef = useRef(null);
	const labelRef = useRef(null);

	useEffect(() => {
		const moveQuick = (ref, prop, duration) =>
			gsap.quickTo(ref.current, prop, { duration, ease: "power3" });

		const xModal = moveQuick(modalRef, "left", 0.8);
		const yModal = moveQuick(modalRef, "top", 0.8);
		const xCursor = moveQuick(cursorRef, "left", 0.5);
		const yCursor = moveQuick(cursorRef, "top", 0.5);
		const xLabel = moveQuick(labelRef, "left", 0.45);
		const yLabel = moveQuick(labelRef, "top", 0.45);

		const handleMouseMove = (e) => {
			const { pageX, pageY } = e;
			xModal(pageX);
			yModal(pageY);
			xCursor(pageX);
			yCursor(pageY);
			xLabel(pageX);
			yLabel(pageY);
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<>
			<motion.div
				ref={modalRef}
				variants={scaleVariants}
				initial="initial"
				animate={active ? "enter" : "closed"}
				className={styles.modalContainer}
			>
				<div className={styles.modalSlider} style={{ top: `-${index * 100}%` }}>
					{projects.map(({ src, color }, i) => (
						<div
							className={styles.modal}
							key={`modal_${i}`}
							style={{ backgroundColor: color }}
						>
							<Image
								src={`/images/${src}`}
								alt={src}
								width={300}
								height={200}
								objectFit="contain"
							/>
						</div>
					))}
				</div>
			</motion.div>

			<motion.div
				ref={cursorRef}
				className={styles.cursor}
				variants={scaleVariants}
				initial="initial"
				animate={active ? "enter" : "closed"}
			/>
			<motion.div
				ref={labelRef}
				className={styles.cursorLabel}
				variants={scaleVariants}
				initial="initial"
				animate={active ? "enter" : "closed"}
			>
				View
			</motion.div>
		</>
	);
}
