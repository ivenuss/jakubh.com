<script lang="ts" generics="Element extends keyof SvelteHTMLElements">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { focusRingClass } from '$lib/constants';

	type Props = {
		as: Element;
		children: Snippet;
	} & SvelteHTMLElements[Element];

	let { as, children, class: classes, ...rest }: Props = $props();
</script>

<svelte:element
	this={as}
	{...rest}
	class={[
		'flex items-center gap-3 rounded-md bg-neutral-800 p-3 shadow-xs',
		{ 'ring-neutral-700 transition-shadow ring-inset hover:ring-2': as === 'a' },
		focusRingClass,
		classes
	]}
>
	{@render children?.()}
</svelte:element>
