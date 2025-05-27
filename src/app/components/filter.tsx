import { Code } from "lucide-react";

type IconProps = { className?: string };

type Props = {
	handleCategoryChange: (category: string) => void;
	selectedCategory: string;
	categories: string[];
	categoryIcons: Record<string, React.ComponentType<IconProps>>;
};

export const SearchFilter = ({
	handleCategoryChange,
	selectedCategory,
	categories,
	categoryIcons,
}: Props) => {
	return (
		<div className="mt-6 pt-6 border-t border-gray-100">
			<div className="flex flex-wrap gap-3">
				<button
					onClick={() => handleCategoryChange("")}
					className={`px-4 py-2 rounded-xl border transition-all duration-200 cursor-pointer ${
						!selectedCategory
							? "bg-purple-100 border-purple-300 text-purple-700"
							: "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
					}`}
				>
					All Categories
				</button>
				{categories.map((category) => {
					const IconComponent =
						categoryIcons[category as keyof typeof categoryIcons] || Code;
					return (
						<button
							key={category}
							onClick={() => handleCategoryChange(category)}
							className={`flex items-center space-x-2 px-4 py-2 rounded-xl border transition-all duration-200 cursor-pointer ${
								selectedCategory === category
									? "bg-purple-100 border-purple-300 text-purple-700"
									: "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
							}`}
						>
							<IconComponent className="size-4" />
							<span className="capitalize">{category}</span>
						</button>
					);
				})}
			</div>
		</div>
	);
};
