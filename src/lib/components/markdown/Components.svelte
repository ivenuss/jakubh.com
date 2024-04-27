<script context="module" lang="ts">
	import a from '../Link.svelte';
	import img from '$lib/components/markdown/img.svelte';

	export { img, a };
</script>

<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}
