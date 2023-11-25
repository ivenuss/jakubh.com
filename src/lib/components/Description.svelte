<script lang="ts">
	import clsx from 'clsx';

	export let cn = '';
	export { cn as class };
	export let as: 'p' | 'span' | 'div' | 'time' = 'p';
</script>

<svelte:element this={as} class={clsx('text-sm text-neutral-400', cn)}>
	<slot />
</svelte:element>
