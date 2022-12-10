<script lang="ts">
	import { intersectionAPI, type IntersectionObserverOptions } from '$lib';

	let options: IntersectionObserverOptions = {
		rootMargin: '20px',
		threshold: 0.4
	};
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div use:intersectionAPI={options} on:crossed={(e) => console.log(e.detail)}>test</div>
