type Difficulty = keyof typeof difficultyColors;

type Project = {
	id: string;
	title: string;
	link: string;
	category: string;
	description: string;
	difficulty: string;
	tech: string[];
	color: string;
};

const difficultyColors = {
	Beginner: "bg-green-100 text-green-800 border-green-200",
	Intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200",
	Advanced: "bg-red-100 text-red-800 border-red-200",
} as const;

const PROJECTS_DATA = [
	{
		id: crypto.randomUUID(),
		title: "Project Gallery Mouse Hover",
		link: "/animation/project-gallery-mouse-hover",
		category: "animation",
		description: "Interactive gallery with smooth mouse hover effects",
		difficulty: "Advanced",
		tech: ["Framer Motion", "GSAP", "CSS Animations"],
		color: "from-purple-500 to-pink-500",
	},
	{
		id: crypto.randomUUID(),
		title: "Infinite Text Move on Scroll",
		link: "/scroll/infinite-text-move-on-scroll",
		category: "scroll",
		description: "Continuous text animation triggered by scroll events",
		difficulty: "Intermediate",
		tech: ["JavaScript", "Intersection Observer"],
		color: "from-blue-500 to-cyan-500",
	},
	{
		id: crypto.randomUUID(),
		title: "Navigation Menu",
		link: "/menu/navigation-menu",
		category: "menu",
		description: "Modern responsive navigation with micro-interactions",
		difficulty: "Intermediate",
		tech: ["React", "Framer Motion"],
		color: "from-indigo-500 to-purple-500",
	},
	{
		id: crypto.randomUUID(),
		title: "Mouse Scale Image Gallery",
		link: "/cursor/mouse-scale-image-gallery",
		category: "cursor",
		description: "Dynamic image scaling based on cursor proximity",
		difficulty: "Advanced",
		tech: ["Request Animation Frame", "Padding bottom"],
		color: "from-pink-500 to-yellow-500",
	},
	{
		id: crypto.randomUUID(),
		title: "Curved Menu",
		link: "/menu/curved-menu",
		category: "menu",
		description: "Elegant curved menu with fluid animations",
		difficulty: "Intermediate",
		tech: ["SVG", "Framer Motion"],
		color: "from-yellow-400 to-orange-500",
	},
	{
		id: crypto.randomUUID(),
		title: "Floating Image Gallery",
		link: "/animation/floating-image-gallery",
		category: "animation",
		description: "Interactive image gallery with floating effects",
		difficulty: "Beginner",
		tech: ["GSAP", "Request Animation Frame", "LERP"],
		color: "from-cyan-400 to-blue-500",
	},
	{
		id: crypto.randomUUID(),
		title: "Mask Cursor Effect",
		link: "/cursor/mask-cursor-effect",
		category: "cursor",
		description:
			"A custom cursor with a mask hover effect revealing text underneath",
		difficulty: "Beginner",
		tech: ["Framer Motion"],
		color: "from-gray-500 to-gray-700",
	},
	{
		id: crypto.randomUUID(),
		title: "Smooth Parallax Scroll",
		link: "/scroll/smooth-parallax-scroll",
		category: "scroll",
		description: " A smooth parallax scrolling effect with layered backgrounds",
		difficulty: "Intermediate",
		tech: ["Framer Motion", "Lenis Scroll"],
		color: "from-purple-400 to-blue-400",
	},
	{
		id: crypto.randomUUID(),
		title: "Split Vignette",
		link: "/cursor/split-vignette",
		category: "cursor",
		description: "A split vignette effect that follows the cursor",
		difficulty: "Beginner",
		tech: ["Framer Motion", "CSS Clip Path"],
		color: "from-pink-400 to-purple-400",
	},
	{
		id: crypto.randomUUID(),
		title: "SVG Morph",
		link: "/animation/svg-morph",
		category: "animation",
		description: "An SVG morphing animation that transforms shapes smoothly",
		difficulty: "Intermediate",
		tech: ["Framer Motion", "Flubber.js"],
		color: "from-green-500 to-teal-500",
	},
	{
		id: crypto.randomUUID(),
		title: "Sticky Cursor",
		link: "/cursor/sticky-cursor",
		category: "cursor",
		description: "A sticky cursor effect that follows the mouse with a delay",
		difficulty: "Intermediate",
		tech: ["Framer Motion", "Trignometry"],
		color: "from-indigo-400 to-blue-500",
	},
	{
		id: crypto.randomUUID(),
		title: "Smooth Scroll",
		link: "/scroll/smooth-scroll",
		category: "scroll",
		description: "A smooth scrolling effect with custom easing and transitions",
		difficulty: "Intermediate",
		tech: ["Framer Motion"],
		color: "from-orange-400 to-red-500",
	},
	{
		id: crypto.randomUUID(),
		title: "Svg Bezier Curve",
		link: "/cursor/svg-bezier-curve",
		category: "cursor",
		description:
			"A common svg wave animation seen in a lot of awwwards website.",
		difficulty: "Intermediate",
		tech: ["Framer Motion", "Sine Wave"],
		color: "from-teal-400 to-green-500",
	},
];

export { PROJECTS_DATA, difficultyColors };
export type { Project, Difficulty };
