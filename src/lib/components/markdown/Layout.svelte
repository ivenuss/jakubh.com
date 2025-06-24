<script lang="ts" module>
	export { default as a } from '../Link.svelte';
	export { default as img } from '$lib/components/markdown/img.svelte';
</script>

<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}
