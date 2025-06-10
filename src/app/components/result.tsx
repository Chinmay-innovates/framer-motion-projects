import { Search } from "lucide-react";

const SearchResult = ({
	filteredProjects,
	searchTerm,
}: {
	searchTerm: string;
	filteredProjects: { length: number };
}) => {
	return (
		<div className="flex items-center justify-between mb-8">
			<div className="text-gray-600">
				{searchTerm ? (
					<span>
						Found{" "}
						<span className="font-semibold text-gray-900">
							{filteredProjects.length}
						</span>{" "}
						projects for &quot;{searchTerm}&quot;
					</span>
				) : (
					<span>
						Showing{" "}
						<span className="font-semibold text-gray-900">
							{filteredProjects.length}
						</span>{" "}
						projects
					</span>
				)}
			</div>
		</div>
	);
};

const NoResult = ({
	searchTerm,
	handleClearSearch,
}: {
	searchTerm: string;
	handleClearSearch: () => void;
}) => {
	return (
		<div className="text-center py-16">
			<div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
				<Search className="w-12 h-12 text-gray-400" />
			</div>
			<h3 className="text-2xl font-bold text-gray-900 mb-2">
				No projects found
			</h3>
			<p className="text-gray-600 mb-6">
				{searchTerm
					? `No projects match "${searchTerm}"`
					: "No projects match your filters"}
			</p>
			<button
				onClick={handleClearSearch}
				className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors duration-200 cursor-pointer shadow-lg"
			>
				Clear Search
			</button>
		</div>
	);
};

export { SearchResult, NoResult };
