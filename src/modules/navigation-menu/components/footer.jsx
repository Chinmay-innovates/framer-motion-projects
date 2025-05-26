import { translate } from "./animation";
import styles from "./style.module.css";
import { motion } from "framer-motion";

const footerContent = [
	[{ label: "Made by:", value: "Studio Lumio" }],
	[{ label: "Typography:", value: "Google Fonts" }],
	[{ label: "Images:", value: "Freepik, Envato" }],
	[{ value: "Privacy Policy" }, { value: "Terms & Conditions" }],
];

const Footer = () => {
	return (
		<div className={styles.footer}>
			{footerContent.map((section, sectionIndex) => (
				<ul key={sectionIndex}>
					{section.map((item, itemIndex) => (
						<motion.li
							key={itemIndex}
							custom={[0.3, 0]}
							variants={translate}
							initial="initial"
							animate="enter"
							exit="exit"
						>
							{item.label && <span>{item.label}</span>}
							{item.value}
						</motion.li>
					))}
				</ul>
			))}
		</div>
	);
};

export default Footer;
