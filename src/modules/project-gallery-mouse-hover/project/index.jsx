import styles from "./style.module.css";

export default function Project({ index, title, description, setModal }) {
	const activate = (active) => setModal({ active, index });
	return (
		<div
			onMouseEnter={() => activate(true)}
			onMouseLeave={() => activate(false)}
			className={styles.project}
		>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
}
