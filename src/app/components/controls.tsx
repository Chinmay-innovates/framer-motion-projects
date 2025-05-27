import { Filter, Grid, List } from "lucide-react";
type Props = {
	showFilters: boolean;
	setShowFilters: (show: boolean) => void;
	viewMode: string;
	setViewMode: (mode: "grid" | "list") => void;
};

export const SearchControls = ({
	setShowFilters,
	setViewMode,
	showFilters,
	viewMode,
}: Props) => {
	return (
		<div className="flex items-center space-x-4">
			<button
				onClick={() => setShowFilters(!showFilters)}
				className={`flex items-center space-x-2 px-4 py-3 rounded-xl border transition-all duration-200 cursor-pointer ${
					showFilters
						? "bg-purple-100 border-purple-400 text-purple-700 hover:bg-purple-200 "
						: "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
				}`}
			>
				<Filter className="size-5" />
				<span>Filters</span>
			</button>

			<div className="flex rounded-xl border border-gray-200 p-1 bg-gray-50">
				<button
					onClick={() => setViewMode("grid")}
					className={`p-2 rounded-lg transition-all duration-200 cursor-pointer ${
						viewMode === "grid"
							? "bg-white shadow-sm text-purple-600"
							: "text-gray-400 hover:text-gray-600"
					}`}
				>
					<Grid className="size-5" />
				</button>
				<button
					onClick={() => setViewMode("list")}
					className={`p-2 rounded-lg transition-all duration-200 cursor-pointer ${
						viewMode === "list"
							? "bg-white shadow-sm text-purple-600"
							: "text-gray-400 hover:text-gray-600"
					}`}
				>
					<List className="size-5" />
				</button>
			</div>
		</div>
	);
};
