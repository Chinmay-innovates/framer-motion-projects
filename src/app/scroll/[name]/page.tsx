import InfiniteText from "@/modules/infinite-text";
import SmoothParallaxScroll from "@/modules/smooth-parallax-scroll";
interface Props {
	params: Promise<{
		name: string;
	}>;
}
const page = async ({ params }: Props) => {
	const { name } = await params;

	if (name === "infinite-text-move-on-scroll") {
		return <InfiniteText />;
	}
	if (name === "smooth-parallax-scroll") {
		return <SmoothParallaxScroll />;
	}

	return (
		<div>
			<h1>{name} Page not found</h1>
		</div>
	);
};

export default page;
