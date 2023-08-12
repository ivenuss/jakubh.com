<script lang="ts">
	import clsx from 'clsx';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface $$Props extends HTMLButtonAttributes {
		href?: string;
		disabled?: boolean;
		class?: string;
		contentClass?: string;
		isLoading?: boolean;
	}

	export let href: $$Props['href'] = undefined;
	export let disabled: $$Props['disabled'] = false;
	export let cn: $$Props['class'] = '';
	export let contentClass: $$Props['contentClass'] = '';
	export let isLoading: $$Props['isLoading'] = false;

	export { cn as class };
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{...$$restProps}
	{href}
	disabled={isLoading || disabled}
	class={clsx(
		'font-base inline-flex items-center rounded transition-colors duration-150',
		'h-8 min-w-[2rem] items-center justify-center px-3.5 text-sm font-medium',
		'bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white',
		cn
	)}
>
	<span
		class={clsx(
			'flex items-center truncate',
			{ 'select-none': !href, invisible: isLoading },
			contentClass
		)}
	>
		<slot />
	</span>
</svelte:element>
