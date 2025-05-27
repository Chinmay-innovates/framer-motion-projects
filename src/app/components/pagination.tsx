type Props = {
	currentPage: string;
	setCurrentPage: (page: string) => void;
	totalPages: number;
};
export const Pagination = ({
	currentPage,
	setCurrentPage,
	totalPages,
}: Props) => {
	return (
		<div className="flex items-center justify-center space-x-4">
			<button
				disabled={Number(currentPage) <= 1}
				onClick={() => setCurrentPage(String(Number(currentPage) - 1))}
				className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 disabled:shadow-none cursor-pointer"
			>
				Previous
			</button>

			<div className="flex items-center space-x-2">
				{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
				))}
			</div>

			<button
				disabled={Number(currentPage) >= totalPages}
				onClick={() => setCurrentPage(String(Number(currentPage) + 1))}
				className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 disabled:shadow-none cursor-pointer"
			>
				Next
			</button>
		</div>
	);
};
