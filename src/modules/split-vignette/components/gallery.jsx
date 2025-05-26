import styles from "./styles.module.scss";
import Image from "next/image";
import Vignette from "./vignette";

export default function Gallery({ handle, mousePosition }) {
	const { x, y } = mousePosition;

	return (
		<div className={styles.gallery}>
			<div className={styles.imageContainer}>
				<Image
					src={`/images/${handle}/background.jpg`}
					alt="image"
					fill
					priority
				/>
			</div>
			<Vignette x={x} y={y} src={`/images/${handle}/1.jpg`} />
		</div>
	);
}
