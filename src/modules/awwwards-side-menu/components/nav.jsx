import styles from "./nav.module.scss";
import { motion } from "framer-motion";
import { LINKS_2 as links, footerLinks } from "@/data/constants";

const perspective = {
	initial: {
		opacity: 0,
		rotateX: 90,
		translateY: 80,
		translateX: -20,
	},

	enter: (i) => ({
		opacity: 1,
		rotateX: 0,
		translateY: 0,
		translateX: 0,
		transition: {
			duration: 0.65,
			delay: 0.5 + i * 0.1,
			ease: [0.215, 0.61, 0.355, 1],
			opacity: { duration: 0.35 },
		},
	}),

	exit: {
		opacity: 0,
		transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
	},
};

const slideIn = {
	initial: {
		opacity: 0,
		y: 20,
	},
	enter: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: 0.75 + i * 0.1,
			ease: [0.215, 0.61, 0.355, 1],
		},
	}),
	exit: {
		opacity: 0,
		transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
	},
};

const Nav = () => {
	return (
		<div className={styles.nav}>
			<div className={styles.body}>
				{links.map((link, i) => {
					const { title, href } = link;

					return (
						<div key={`link_${i}`} className={styles.linkContainer}>
							<motion.div
								href={href}
								custom={i}
								variants={perspective}
								initial="initial"
								animate="enter"
								exit="exit"
							>
								<a>{title}</a>
							</motion.div>
						</div>
					);
				})}
			</div>
			<motion.div className={styles.footer}>
				{footerLinks.map((link, i) => {
					const { title } = link;

					return (
						<motion.a
							variants={slideIn}
							custom={i}
							initial="initial"
							animate="enter"
							exit="exit"
							key={`f_link_${i}`}
						>
							{title}
						</motion.a>
					);
				})}
			</motion.div>
		</div>
	);
};

export default Nav;
