<script lang="ts">
	import clsx from 'clsx';

	type Element = $$Generic<keyof HTMLElementTagNameMap>;

	type $$Props = svelteHTML.IntrinsicElements[Element] & {
		as: Element;
	};

	export let as: Element;
</script>

<svelte:element
	this={as}
	{...$$restProps}
	class={clsx(
		'flex items-center gap-3 rounded-md p-3 bg-neutral-50 shadow-sm dark:shadow-none dark:bg-zinc-900 dark:bg-opacity-75 dark:backdrop-saturate-150 dark:backdrop-blur-xl',
		{ 'ring-inset hover:ring-2 dark:ring-zinc-800 ring-zinc-200 transition-shadow': as === 'a' },
		$$restProps.class
	)}
>
	<slot />
</svelte:element>
