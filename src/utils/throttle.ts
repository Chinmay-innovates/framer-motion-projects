export function throttle<T extends (...args: any[]) => void>(
	fn: T,
	delay: number
): (...args: Parameters<T>) => void {
	let lastCall = 0;
	return function (...args: Parameters<T>): void {
		const now = Date.now();
		if (now - lastCall >= delay) {
			lastCall = now;
			fn(...args);
		}
	};
}
