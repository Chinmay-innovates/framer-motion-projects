import { useEffect, useState } from "react";

export const useDimensionn = () => {
	const [dimension, setDimension] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const updateDimension = () => {
			setDimension({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		updateDimension();
		window.addEventListener("resize", updateDimension);

		return () => {
			window.removeEventListener("resize", updateDimension);
		};
	}, []);

	return dimension;
};
