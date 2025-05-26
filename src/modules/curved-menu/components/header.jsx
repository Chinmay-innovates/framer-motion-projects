"use client";
import { AnimatePresence } from "framer-motion";
import styles from "./style.module.scss";
import Nav from "./nav";
import { useState } from "react";

const header = () => {
	const [isActive, setIsActive] = useState(false);
	return (
		<>
			<div
				onClick={() => {
					setIsActive(!isActive);
				}}
				className={styles.button}
			>
				<div
					className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
				></div>
			</div>
			<AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
		</>
	);
};

export default header;
