<script lang="ts" module>
	export { default as a } from '../Link.svelte';
	export { default as img } from '$lib/components/markdown/img.svelte';
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
	};

	let { children }: Props = $props();
</script>

{@render children?.()}
