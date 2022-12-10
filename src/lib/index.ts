export type IntersectionObserverOptions = {
	root?: Element;
	rootMargin?: string;
	threshold?: number | number[];
};

const handle = (entries: Array<IntersectionObserverEntry>, node: Element) => {
	entries.forEach((entry) => {
		node.dispatchEvent(new CustomEvent('crossed', { detail: entry }));
	});
};

export function intersectionAPI(node: Element, options: IntersectionObserverOptions = {}) {
	const observer = new IntersectionObserver((entries) => handle(entries, node), options);
	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
}
