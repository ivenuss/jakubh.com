<script lang="ts">
	import clsx from 'clsx';

	export let cn = '';
	export { cn as class };
	export let as: keyof HTMLElementTagNameMap = 'p';
</script>

<svelte:element this={as} class={clsx('text-zinc-500 dark:text-zinc-400', cn)}>
	<slot />
</svelte:element>
