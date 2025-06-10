import { useQueryState } from "nuqs";
import { ChangeEvent, useCallback } from "react";

export const useParams = () => {
	const [searchTerm, setSearchTerm] = useQueryState("q", {
		defaultValue: "",
		clearOnDefault: true,
	});
	const [selectedCategory, setSelectedCategory] = useQueryState("category", {
		defaultValue: "",
		clearOnDefault: true,
	});
	const [currentPage, setCurrentPage] = useQueryState("page", {
		defaultValue: "1",
		clearOnDefault: true,
	});
	const [viewMode, setViewMode] = useQueryState("view", {
		defaultValue: "grid",
		clearOnDefault: true,
	});

	const handleSearchChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setSearchTerm(e.target.value);
			setCurrentPage("1");
		},
		[setSearchTerm, setCurrentPage]
	);

	const handleClearSearch = useCallback(() => {
		setSearchTerm("");
		setCurrentPage("1");
	}, [setSearchTerm, setCurrentPage]);

	const handleCategoryChange = useCallback(
		(category: string) => {
			setSelectedCategory(category === selectedCategory ? "" : category);
			setCurrentPage("1");
		},
		[selectedCategory, setSelectedCategory, setCurrentPage]
	);

	return {
		searchTerm,
		selectedCategory,
		currentPage,
		viewMode,
		handleSearchChange,
		handleCategoryChange,
		setCurrentPage,
		setViewMode,
		handleClearSearch,
	};
};
