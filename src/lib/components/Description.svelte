<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let className = '';
	export { className as class };

	export let as: 'p' | 'span' | 'div' | 'time' = 'p';
</script>

<svelte:element this={as} class={cn('text-sm text-neutral-400', className)}>
	<slot />
</svelte:element>
