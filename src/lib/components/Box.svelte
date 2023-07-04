<script lang="ts">
	import clsx from 'clsx';

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export let as: any;
</script>

<svelte:element
	this={as}
	{...$$restProps}
	class={clsx(
		'flex items-center gap-3 rounded-md bg-neutral-50 p-3 shadow-sm dark:bg-zinc-900 dark:bg-opacity-75 dark:shadow-none dark:backdrop-blur-xl dark:backdrop-saturate-150',
		{ 'ring-inset ring-zinc-200 transition-shadow hover:ring-2 dark:ring-zinc-800': as === 'a' },
		$$restProps.class
	)}
>
	<slot />
</svelte:element>
