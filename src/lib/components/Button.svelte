<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { focusRingClass } from '$lib/constants';
	import { cn } from '$lib/utils/cn';

	interface $$Props extends HTMLButtonAttributes {
		href?: string;
		disabled?: boolean;
		class?: string;
		contentClass?: string;
		isLoading?: boolean;
	}

	export let href: $$Props['href'] = undefined;
	export let disabled: $$Props['disabled'] = false;
	export let className: $$Props['class'] = '';
	export let contentClass: $$Props['contentClass'] = '';
	export let isLoading: $$Props['isLoading'] = false;

	export { className as class };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={href ? 'a' : 'button'}
	{...$$restProps}
	{href}
	disabled={isLoading || disabled}
	class={cn(
		'font-base inline-flex items-center rounded ring-offset-2 transition-colors duration-150',
		'h-8 min-w-[2rem] items-center justify-center px-3.5 text-sm font-medium',
		'bg-neutral-100 text-neutral-900 hover:bg-white',
		focusRingClass,
		className
	)}
	on:click
>
	<span
		class={cn(
			'flex items-center truncate',
			{ 'select-none': !href, invisible: isLoading },
			contentClass
		)}
	>
		<slot />
	</span>
</svelte:element>
