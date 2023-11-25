<script lang="ts">
	import clsx from 'clsx';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { focusRingClass } from '$lib/constants';

	export let as: keyof SvelteHTMLElements;
</script>

<svelte:element
	this={as}
	{...$$restProps}
	class={clsx(
		'flex items-center gap-3 rounded-md bg-neutral-800 p-3 shadow-sm',
		{ 'ring-inset ring-neutral-700 transition-shadow hover:ring-2': as === 'a' },
		focusRingClass,
		$$restProps.class
	)}
>
	<slot />
</svelte:element>
