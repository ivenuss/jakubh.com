<script lang="ts" generics="Element extends keyof SvelteHTMLElements">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { focusRingClass } from '$lib/constants';
	import { cn } from '$lib/utils/cn';

	type Props = {
		as: Element;
		children: import('svelte').Snippet;
	} & SvelteHTMLElements[Element];

	let { as, children, class: classes, ...rest }: Props = $props();
</script>

<svelte:element
	this={as}
	{...rest}
	class={cn(
		'flex items-center gap-3 rounded-md bg-neutral-800 p-3 shadow-xs',
		{ 'ring-neutral-700 transition-shadow ring-inset hover:ring-2': as === 'a' },
		classes,
		focusRingClass
	)}
>
	{@render children?.()}
</svelte:element>
