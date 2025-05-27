import NavigationMenu from "@/modules/navigation-menu";
import CurvedMenu from "@/modules/curved-menu";
import AwwwardsSideMenu from "@/modules/awwwards-side-menu";
interface Props {
	params: Promise<{
		name: string;
	}>;
}
const page = async ({ params }: Props) => {
	const { name } = await params;

	if (name === "awwwards-side-menu") {
		return <AwwwardsSideMenu />;
	}

	if (name === "navigation-menu") {
		return <NavigationMenu />;
	}

	if (name === "curved-menu") {
		return <CurvedMenu />;
	}

	return (
		<div>
			<h1>{name} Page not found</h1>
		</div>
	);
};

export default page;
