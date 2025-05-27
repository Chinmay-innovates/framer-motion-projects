import { Search, X } from "lucide-react";
type Props = {
	searchTerm: string;
	handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleClearSearch: () => void;
};
export const SearchInput = ({
	searchTerm,
	handleSearchChange,
	handleClearSearch,
}: Props) => {
	return (
		<div className="relative flex-1">
			<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
			<input
				type="text"
				placeholder="Search projects, technologies, or difficulty..."
				value={searchTerm}
				onChange={handleSearchChange}
				className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder:text-gray-400"
			/>
			{searchTerm && (
				<button
					onClick={handleClearSearch}
					className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors duration-200"
				>
					<X className="size-5" />
				</button>
			)}
		</div>
	);
};
