import Image from "next/image";
import { opacity } from "./animation";
import styles from "./style.module.css";
import { motion } from "framer-motion";
const image = ({ src, selectedLink }) => {
	return (
		<motion.div
			variants={opacity}
			initial="initial"
			animate={selectedLink.isActive ? "open" : "closed"}
			className={styles.imageContainer}
		>
			<Image src={`/images/${src}`} fill alt="image" />
		</motion.div>
	);
};

export default image;
