"use client";
import Paragraph from "./components/paragraph";
import Character from "./components/charecter";
import Word from "./components/word";

const paragraph =
	"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

const Index = () => {
	return (
		<main>
			<div style={{ height: "100vh" }} />
			<Paragraph paragraph={paragraph} />
			<div style={{ height: "100vh" }} />
			<Word paragraph={paragraph} />
			<div style={{ height: "100vh" }} />
			<Character paragraph={paragraph} />
			<div style={{ height: "100vh" }} />
		</main>
	);
};

export default Index;
