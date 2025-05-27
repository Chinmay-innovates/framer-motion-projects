import { PROJECTS_DATA } from "@/data";

export const Hero = ({ categories }: { categories: string[] }) => {
	return (
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
							<div className="text-sm uppercase tracking-wider">Categories</div>
						</div>
						<div className="text-center">
							<div className="text-3xl font-bold text-white">3</div>
							<div className="text-sm uppercase tracking-wider">Levels</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
