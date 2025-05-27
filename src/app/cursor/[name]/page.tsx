import MouseScaleImageGallery from "@/modules/mouse-scale-image-gallery";
import MaskCursorEffect from "@/modules/mask-cursor-effect";
import SplitVignette from "@/modules/split-vignette";
import StickyCursor from "@/modules/sticky-cursor";
import SvgBezierCurve from "@/modules/svg-bezier-curve";
interface Props {
	params: Promise<{
		name: string;
	}>;
}
const page = async ({ params }: Props) => {
	const { name } = await params;

	if (name === "mouse-scale-image-gallery") {
		return <MouseScaleImageGallery />;
	}
	if (name === "mask-cursor-effect") {
		return <MaskCursorEffect />;
	}
	if (name === "svg-bezier-curve") {
		return <SvgBezierCurve />;
	}
	if (name === "split-vignette") {
		return <SplitVignette />;
	}
	if (name === "sticky-cursor") {
		return <StickyCursor />;
	}

	return (
		<div>
			<h1>{name} Page not found</h1>
		</div>
	);
};

export default page;
