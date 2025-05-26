"use client";

import { useState, useMemo } from "react";
import {
	Search,
	Filter,
	Grid,
	List,
	X,
	ExternalLink,
	Code,
	ArrowRight,
	MousePointer2,
	Sparkles,
	LayoutGrid,
	Mouse,
} from "lucide-react";
import {
	type Project,
	type Difficulty,
	PROJECTS_DATA,
	difficultyColors,
} from "@/data";
import Link from "next/link";
import { useSearchParams } from "@/hooks/use-search-params";

const ITEMS_PER_PAGE = 6;

const categories = [...new Set(PROJECTS_DATA.map((p) => p.category))];

const categoryIcons = {
	animation: Sparkles,
	cursor: Mouse,
	scroll: MousePointer2,
	menu: LayoutGrid,
};
export default function ModernProjectCollection() {
	const {
		currentPage,
		handleCategoryChange,
		handleClearSearch,
		handleSearchChange,
		searchTerm,
		setCurrentPage,
		selectedCategory,
		setViewMode,
		viewMode,
	} = useSearchParams();
	const [showFilters, setShowFilters] = useState(false);

	const filteredProjects = useMemo(() => {
		let filtered = PROJECTS_DATA;

		if (searchTerm) {
			const term = searchTerm.toLowerCase();
			filtered = filtered.filter(
				(project) =>
					project.title.toLowerCase().includes(term) ||
					project.description.toLowerCase().includes(term) ||
					project.tech.some((tech) => tech.toLowerCase().includes(term)) ||
					project.difficulty.toLowerCase().includes(term)
			);
		}

		if (selectedCategory) {
			filtered = filtered.filter(
				(project) => project.category === selectedCategory
			);
		}

		return filtered.sort((a, b) => {
			return a.title.localeCompare(b.title);
		});
	}, [searchTerm, selectedCategory]);

	const paginatedProjects = useMemo(() => {
		const pageNumber = Number(currentPage) || 1;
		const start = (pageNumber - 1) * ITEMS_PER_PAGE;
		return filteredProjects.slice(start, start + ITEMS_PER_PAGE);
	}, [filteredProjects, currentPage]);

	const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

	const ProjectCard = ({ project }: { project: Project }) => {
		const IconComponent =
			categoryIcons[project.category as keyof typeof categoryIcons];
		return (
			<div
				className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
					viewMode === "list" ? "flex items-center p-6 space-x-6" : "p-6"
				}`}
			>
				<div className={`${viewMode === "list" ? "flex-shrink-0" : "mb-4"}`}>
					<div
						className={`size-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
					>
						<IconComponent className="size-8 text-white" />
					</div>
				</div>

				<div className={`${viewMode === "list" ? "flex-1" : ""}`}>
					<div
						className={`${
							viewMode === "list" ? "flex items-start justify-between" : "mb-3"
						}`}
					>
						<div>
							<Link href={project.link}>
								<h3
									className="text-xl font-bold text-gray-900
									group-hover:text-purple-600 transition-colors duration-300
									mb-2 hover:underline"
								>
									{project.title}
								</h3>
							</Link>
							<p className="text-gray-600 text-sm leading-relaxed mb-4">
								{project.description}
							</p>
						</div>
						{viewMode === "list" && (
							<Link
								href={project.link}
								className="ml-4 p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors duration-200"
							>
								<ExternalLink className="size-5" />
							</Link>
						)}
					</div>

					<div className="flex flex-wrap gap-2 mb-4">
						{project.tech.map((tech, i) => (
							<span
								key={i}
								className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-200"
							>
								{tech}
							</span>
						))}
					</div>

					<div
						className={`flex ${
							viewMode === "list"
								? "items-center"
								: "items-center justify-between"
						}`}
					>
						<span
							className={`px-3 py-1 rounded-full text-xs font-semibold border ${
								difficultyColors[project.difficulty as Difficulty]
							}`}
						>
							{project.difficulty}
						</span>
						{viewMode === "grid" && (
							<Link
								href={project.link}
								className="group/btn flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium text-sm"
							>
								<span>View Project</span>
								<ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
							</Link>
						)}
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
			{/* Hero Section */}
			<div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">
				<div className="absolute inset-0 bg-black/20" />
				<div className="absolute inset-0">
					<div className="absolute top-1/4 left-1/4 size-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
					<div className="absolute bottom-1/4 right-1/4 size-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
				</div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
					<div className="text-center">
						<h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
							Interactive
							<span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
								Project Collection
							</span>
						</h1>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
							Discover cutting-edge web projects, interactive demos, and modern
							development techniques crafted with the latest technologies
						</p>

						<div className="flex flex-wrap justify-center gap-8 text-white/80">
							<div className="text-center">
								<div className="text-3xl font-bold text-white">
									{PROJECTS_DATA.length}
								</div>
								<div className="text-sm uppercase tracking-wider">Projects</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-white">
									{categories.length}
								</div>
								<div className="text-sm uppercase tracking-wider">
									Categories
								</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-white">3</div>
								<div className="text-sm uppercase tracking-wider">Levels</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Search and Filter Bar */}
				<div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
					<div className="flex flex-col lg:flex-row gap-4 items-center">
						{/* Search */}
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

						{/* Controls */}
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
					</div>

					{/* Category Filters */}
					{showFilters && (
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
										categoryIcons[category as keyof typeof categoryIcons] ||
										Code;
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
					)}
				</div>

				{/* Results Info */}
				<div className="flex items-center justify-between mb-8">
					<div className="text-gray-600">
						{searchTerm ? (
							<span>
								Found{" "}
								<span className="font-semibold text-gray-900">
									{filteredProjects.length}
								</span>{" "}
								projects for "{searchTerm}"
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

				{/* Projects Grid/List */}
				{paginatedProjects.length > 0 ? (
					<div
						className={`${
							viewMode === "grid"
								? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
								: "space-y-6"
						} mb-12`}
					>
						{paginatedProjects.map((project) => (
							<ProjectCard key={project.id} project={project} />
						))}
					</div>
				) : (
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
				)}

				{/* Pagination */}
				{totalPages > 1 && (
					<div className="flex items-center justify-center space-x-4">
						<button
							disabled={Number(currentPage) <= 1}
							onClick={() => setCurrentPage(String(Number(currentPage) - 1))}
							className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 disabled:shadow-none cursor-pointer"
						>
							Previous
						</button>

						<div className="flex items-center space-x-2">
							{Array.from({ length: totalPages }, (_, i) => i + 1).map(
								(page) => (
									<button
										key={page}
										onClick={() => setCurrentPage(String(page))}
										className={`w-12 h-12 rounded-xl transition-all duration-200 cursor-pointer ${
											Number(currentPage) === page
												? "bg-purple-600 text-white shadow-lg"
												: "text-gray-600 hover:bg-gray-100"
										}`}
									>
										{page}
									</button>
								)
							)}
						</div>

						<button
							disabled={Number(currentPage) >= totalPages}
							onClick={() => setCurrentPage(String(Number(currentPage) + 1))}
							className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 disabled:shadow-none cursor-pointer"
						>
							Next
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
