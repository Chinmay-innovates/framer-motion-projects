import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function Vignette({ x, y, src, priority = false }) {
	return (
		<motion.div className={styles.vignette} style={{ x, y }}>
			<Image src={src} alt="image" fill priority={priority} />
		</motion.div>
	);
}
