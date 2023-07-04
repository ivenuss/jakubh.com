<script lang="ts">
	import clsx from 'clsx';

	export let cn = '';
	export { cn as class };
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export let as: any = 'p';
</script>

<svelte:element this={as} class={clsx('text-sm text-zinc-500 dark:text-zinc-400', cn)}>
	<slot />
</svelte:element>
