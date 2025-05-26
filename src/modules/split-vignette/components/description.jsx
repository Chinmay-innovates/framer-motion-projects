import { useState, useCallback } from "react";
import styles from "./styles.module.scss";
import Vignette from "./vignette";

export default function Description({ mousePosition, projects }) {
	const [index, setIndex] = useState(0);
	const { x, y } = mousePosition;

	const handleHover = useCallback((i) => () => setIndex(i), []);

	return (
		<div className={styles.description}>
			<div className={styles.descriptionContainer}>
				{projects.map(({ name }, i) => (
					<p key={i} onMouseOver={handleHover(i)}>
						{name}
					</p>
				))}
			</div>
			<Vignette
				x={x}
				y={y}
				src={`/images/${projects[index].handle}/about.jpg`}
			/>
		</div>
	);
}
