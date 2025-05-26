import Smile from "./components/smile";
import Play from "./components/play";
import styles from "./components/styles.module.scss";

export default function SvgMorph() {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<Smile />
				<Play />
			</div>
		</main>
	);
}
