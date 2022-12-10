export type IntersectionObserverOptions = {
	root?: Element;
	rootMargin?: string;
	threshold?: number | number[];
};

export function intersectionAPI(node: Element, options: IntersectionObserverOptions = {}) {
	const observer = new IntersectionObserver(handleIntersection, options);
	observer.observe(node);

	function handleIntersection(entries: Array<IntersectionObserverEntry>) {
		entries.forEach((entry) => {
			node.dispatchEvent(
				new CustomEvent('crossed', { detail: { entry, unobserve } })
			);
		});
	}

	function unobserve() {
		observer.unobserve(node);
	}

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
}
