<script lang="ts">
	import { intersectionAPI, type IntersectionObserverOptions } from '$lib';
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div style="height: 100vh">f</div>
<div
	use:intersectionAPI={{ threshold: [0.1, 0.6] }}
	on:crossed={(e) => {
		if (e.detail.entry.intersectionRatio > 0.5) {
			console.log('stop', e.detail.entry);
			e.detail.unobserve();
		}
	}}
	style="height: 400px; border: 1px solid red;"
>
	test
</div>
