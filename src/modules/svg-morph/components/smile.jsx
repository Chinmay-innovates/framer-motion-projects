import SVGMorph from "./svg-morph";
import {
	head,
	smile,
	eye_l,
	eye_r,
	happy_smile,
	happy_eye_l,
	happy_eye_r,
} from "./path";
import styles from "./styles.module.scss";

export default function Smile() {
	return (
		<div className={styles.svgContainer}>
			<svg
				className={styles.svg}
				id="Layer_2"
				data-name="Layer 2"
				viewBox="0 0 192 192"
			>
				<path d={head} fill="white" />
				<SVGMorph paths={[smile, happy_smile, smile]} />
				<SVGMorph paths={[eye_l, happy_eye_l, eye_l]} />
				<SVGMorph paths={[eye_r, happy_eye_r, eye_r]} />
			</svg>
		</div>
	);
}
