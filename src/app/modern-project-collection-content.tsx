"use client";

import { useState, useMemo } from "react";
import {
	ExternalLink,
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
import { useParams } from "@/hooks/use-search-params";

import { NoResult, SearchResult } from "./components/result";
import { SearchControls } from "./components/controls";
import { Pagination } from "./components/pagination";
import { SearchFilter } from "./components/filter";
import { SearchInput } from "./components/search";
import { Hero } from "./components/hero";

const ITEMS_PER_PAGE = 6;

const categories = [...new Set(PROJECTS_DATA.map((p) => p.category))];

const categoryIcons = {
	animation: Sparkles,
	cursor: Mouse,
	scroll: MousePointer2,
	menu: LayoutGrid,
};
export const ModernProjectCollectionContent = () => {
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
	} = useParams();
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
			<Hero categories={categories} />

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Search and Filter Bar */}
				<div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
					<div className="flex flex-col lg:flex-row gap-4 items-center">
						{/* Search */}
						<SearchInput
							searchTerm={searchTerm}
							handleSearchChange={handleSearchChange}
							handleClearSearch={handleClearSearch}
						/>

						{/* Controls */}
						<SearchControls
							setShowFilters={setShowFilters}
							showFilters={showFilters}
							viewMode={viewMode}
							setViewMode={setViewMode}
						/>
					</div>

					{/* Category Filters */}
					{showFilters && (
						<SearchFilter
							handleCategoryChange={handleCategoryChange}
							selectedCategory={selectedCategory}
							categories={categories}
							categoryIcons={categoryIcons}
						/>
					)}
				</div>

				{/* Results Info */}
				<SearchResult
					filteredProjects={filteredProjects}
					searchTerm={searchTerm}
				/>

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
					<NoResult
						handleClearSearch={handleClearSearch}
						searchTerm={searchTerm}
					/>
				)}

				{/* Pagination */}
				{totalPages > 1 && (
					<Pagination
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						totalPages={totalPages}
					/>
				)}
			</div>
		</div>
	);
};
