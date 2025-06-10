"use client";

import { Suspense } from "react";
import { ModernProjectCollectionContent } from "./modern-project-collection-content";

export default function Page() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ModernProjectCollectionContent />
		</Suspense>
	);
}
