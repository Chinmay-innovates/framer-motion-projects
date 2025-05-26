"use client";
import { useRef } from "react";
import Header from "./components/header";
import StickyCursor from "./components/sticky-cursor";

const Index = () => {
	const stickyElement = useRef(null);
	return (
		<div
			style={{
				height: "200vh",
				backgroundColor: "#f0f0f0",
			}}
		>
			<Header ref={stickyElement} />
			<StickyCursor stickyElement={stickyElement} />
		</div>
	);
};

export default Index;
