<script lang="ts" module>
	const headlineSizes = {
		1: 'text-xl',
		2: 'text-lg',
		3: 'text-lg',
		4: 'text-base',
		5: 'text-sm',
		6: 'text-sm'
	};

	const headlineWeights = {
		normal: 'font-normal',
		medium: 'font-medium',
		bold: 'font-bold'
	};

	type FontWeight = keyof typeof headlineWeights;
	type HeadlineLevels = keyof typeof headlineSizes;
	type HeadlineElement = `h${HeadlineLevels}`;
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	type Props = {
		weight?: FontWeight;
		level: HeadlineLevels | `${HeadlineLevels}`;
		class?: ClassValue;
		children?: Snippet;
	};

	let { weight = 'medium', level, class: classes, children }: Props = $props();
</script>

<svelte:element
	this={`h${level}` satisfies HeadlineElement}
	class={['text-balance', headlineSizes[level], headlineWeights[weight], classes]}
>
	{@render children?.()}
</svelte:element>
