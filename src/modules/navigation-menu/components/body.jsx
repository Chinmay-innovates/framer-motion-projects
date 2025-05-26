import styles from "./style.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { blur, translate } from "./animation";
const body = ({ links, selectedLink, setSelectedLink }) => {
	const getChars = (word) => {
		let chars = [];

		word.split("").forEach((char, i) => {
			chars.push(
				<motion.span
					custom={[i * 0.02, (word.length - i) * 0.01]}
					variants={translate}
					initial="initial"
					animate="enter"
					exit="exit"
					key={char + i}
				>
					{char}
				</motion.span>
			);
		});

		return chars;
	};
	return (
		<div className={styles.body}>
			{links.map((link, index) => {
				const { title, href } = link;

				const activate = (isActive) => setSelectedLink({ isActive, index });

				return (
					<Link key={`link_${index}`} href={href}>
						<motion.p
							onMouseEnter={() => activate(true)}
							onMouseLeave={() => activate(false)}
							onFocus={() => activate(true, index)}
							onBlur={() => activate(false, index)}
							variants={blur}
							animate={
								selectedLink.isActive && selectedLink.index != index
									? "open"
									: "closed"
							}
						>
							{getChars(title)}
						</motion.p>
					</Link>
				);
			})}
		</div>
	);
};
export default body;
