# Svelte Intersection Observer Action

Easily integrate the Intersection Observer API in Svelte

<a href="https://anotherempty.github.io/svelte-intersection-api-action"> See the demo</a>

## Installation

```sh
npm install svelte-intersection-api-action
```

## Usage

```svelte
<script lang="ts">
  import { intersectionAPI, type IntersectionObserverOptions } from "svelte-intersection-api-action";

  let options: IntersectionObserverOptions = {
    root: undefined,
    rootMargin: "20px",
    threshold: [0, 0.5, 1],
  }
</script>
<div use:intersectionAPI={ options } on:crossed={(e)=>doSomething(e.detail)}>
</div>
```

## Props

`options` : The options used by the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

`e.detail` : An [IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry), is dispatched when a threshold is crossed

## License

Distributed under the MIT License. 