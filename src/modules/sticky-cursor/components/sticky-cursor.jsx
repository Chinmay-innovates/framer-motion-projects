"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./style.module.scss";
import {
	animate,
	motion,
	transform,
	useMotionValue,
	useSpring,
} from "framer-motion";

const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };

export default function Cursor({ stickyElement }) {
	const [isHovered, setIsHovered] = useState(false);
	const cursor = useRef(null);
	const cursorSize = isHovered ? 60 : 15;

	const mouse = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};

	const scale = {
		x: useMotionValue(1),
		y: useMotionValue(1),
	};

	const smoothMouse = {
		x: useSpring(mouse.x, smoothOptions),
		y: useSpring(mouse.y, smoothOptions),
	};

	const rotate = useCallback((distance) => {
		const angle = Math.atan2(distance.y, distance.x);
		animate(cursor.current, { rotate: `${angle}rad` }, { duration: 0 });
	}, []);

	const manageMouseMove = useCallback(
		(e) => {
			const { clientX, clientY } = e;

			if (stickyElement.current && isHovered) {
				const { left, top, width, height } =
					stickyElement.current.getBoundingClientRect();

				const center = { x: left + width / 2, y: top + height / 2 };
				const distance = { x: clientX - center.x, y: clientY - center.y };

				rotate(distance);

				const absDistance = Math.max(
					Math.abs(distance.x),
					Math.abs(distance.y)
				);
				scale.x.set(transform(absDistance, [0, height / 2], [1, 1.3]));
				scale.y.set(transform(absDistance, [0, width / 2], [1, 0.8]));

				mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1);
				mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1);
			} else {
				mouse.x.set(clientX - cursorSize / 2);
				mouse.y.set(clientY - cursorSize / 2);
			}
		},
		[isHovered, stickyElement, rotate]
	);

	useEffect(() => {
		const el = stickyElement.current;
		if (!el) return;

		const onEnter = () => setIsHovered(true);
		const onLeave = () => {
			setIsHovered(false);
			animate(cursor.current, { scaleX: 1, scaleY: 1 }, { duration: 0.1 });
		};

		el.addEventListener("mouseenter", onEnter);
		el.addEventListener("mouseleave", onLeave);
		window.addEventListener("mousemove", manageMouseMove);

		return () => {
			el.removeEventListener("mouseenter", onEnter);
			el.removeEventListener("mouseleave", onLeave);
			window.removeEventListener("mousemove", manageMouseMove);
		};
	}, [manageMouseMove, stickyElement]);

	return (
		<div className={styles.cursorContainer}>
			<motion.div
				transformTemplate={({ rotate, scaleX, scaleY }) =>
					`rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`
				}
				style={{
					left: smoothMouse.x,
					top: smoothMouse.y,
					scaleX: scale.x,
					scaleY: scale.y,
				}}
				animate={{
					height: cursorSize,
					width: cursorSize,
				}}
				className={styles.cursor}
				ref={cursor}
			/>
		</div>
	);
}
