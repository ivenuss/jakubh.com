<script lang="ts" context="module">
	const fontSizes = {
		1: 'text-xl',
		2: 'text-xl',
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
	import clsx from 'clsx';

	/***** Props *****/
	export let weight: keyof typeof fontWeights = 'medium';
	export let level: HeadlineLevels | `${HeadlineLevels}`;
	export let cn = '';
	export { cn as class };

	let headingElement: HeadingElement = `h${level}`;
</script>

<svelte:element
	this={headingElement}
	class={clsx('text-neutral-900 dark:text-zinc-50', fontSizes[level], fontWeights[weight], cn)}
>
	<slot />
</svelte:element>
