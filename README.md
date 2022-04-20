# Svelte Observer Action

Easily integrate the Intersection Observer API in Svelte

<a href="https://anotherempty.github.io/svelte-observer-action"> See the demo</a>

## Installation

```sh
npm install svelte-observer-action
```

## Usage

```svelte
<script>
  import { observer } from "svelte-observer-action";

</script>

<div use:observer={{ options }} on:crossed={(e)=>doSomething(e.detail)}>
</div>
```

## Props

`options` : The options used by the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

`e.detail` : An [IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry), is dispatched when a threshold is crossed

## License

Distributed under the MIT License. 