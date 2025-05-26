"use client";
import { PROJECTS } from "@/data/constants";
import Project from "./project";
import Modal from "./modal";
import { useState } from "react";

const ProjectGalleryMouseHover = () => {
	const [modal, setModal] = useState({ active: false, index: 0 });

	return (
		<main
			style={{
				display: "flex",
				height: "100vh",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div
				style={{
					width: "1000px",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{PROJECTS.map((project, index) => (
					<Project
						key={index}
						index={index}
						setModal={setModal}
						title={project.title}
						description={project.description}
					/>
				))}
			</div>
			<Modal modal={modal} projects={PROJECTS} />
		</main>
	);
};

export default ProjectGalleryMouseHover;
