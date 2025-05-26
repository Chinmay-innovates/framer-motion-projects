import Image from "next/image";
import React, { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS_2 } from "@/data/constants";
import styles from "./style.module.css";
import gsap from "gsap";

const Projects = () => {
	const [selectedProject, setSelectedProject] = useState(0);
	const container = useRef(null);
	const imageContainer = useRef(null);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		ScrollTrigger.create({
			trigger: imageContainer.current,
			start: "-=20px",
			end: document.body.offsetHeight,
			pin: true,
		});
	}, []);

	return (
		<section ref={container} className={styles.projects} data-scroll-section>
			<div className={styles.projectDescription}>
				<div ref={imageContainer} className={styles.imageContainer}>
					<Image
						src={`/images/${PROJECTS_2[selectedProject].src}`}
						fill={true}
						alt="project image"
						priority={true}
					/>
				</div>
				<div className={styles.column}>
					<p>
						The flora is characterized by the presence of high elevation
						wetland, as well as yellow straw, broom sedge, tola de agua and tola
						amaia.
					</p>
				</div>
				<div className={styles.column}>
					<p>
						Some, like the southern viscacha, vicuña and Darwins rhea, are
						classified as endangered species. Others, such as Andean goose,
						horned coot, Andean gull, puna tinamou and the three flamingo
						species inhabiting in Chile (Andean flamingo, Chilean flamingo, and
						Jamess flamingo) are considered vulnerable.
					</p>
				</div>
			</div>

			<div className={styles.projectList}>
				{PROJECTS_2.map((project, index) => {
					return (
						<div
							key={index}
							onMouseOver={() => {
								setSelectedProject(index);
							}}
							className={styles.projectEl}
							data-scroll
							data-scroll-speed={0.05 * (index + 1)}
						>
							<h2>{project.title}</h2>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
