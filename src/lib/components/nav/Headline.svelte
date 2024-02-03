<script lang="ts" context="module">
	const fontSizes = {
		1: 'text-xl',
		2: 'text-lg',
		3: 'text-lg',
		4: 'text-base',
		5: 'text-sm',
		6: 'text-sm'
	};

	const fontWeights = {
		normal: 'font-normal',
		medium: 'font-medium',
		bold: 'font-bold'
	};

	type HeadlineLevels = keyof typeof fontSizes;
	type HeadingElement = `h${HeadlineLevels}`;
</script>

<script lang="ts">
	import { cn } from '$lib/utils/cn';

	/***** Props *****/
	export let weight: keyof typeof fontWeights = 'medium';
	export let level: HeadlineLevels | `${HeadlineLevels}`;

	export let className = '';
	export { className as class };

	let headingElement: HeadingElement = `h${level}`;
</script>

<svelte:element this={headingElement} class={cn(fontSizes[level], fontWeights[weight], className)}>
	<slot />
</svelte:element>
