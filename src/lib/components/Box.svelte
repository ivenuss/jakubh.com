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
		'flex items-center gap-3 rounded-xl bg-surface-800/60 p-3 shadow-xs',
		{
			'ring-surface-700 hover:ring-2 hover:transition-shadow focus-visible:ring-offset-2':
				as === 'a'
		},
		focusRingClass,
		classes
	]}
>
	{@render children?.()}
</svelte:element>
