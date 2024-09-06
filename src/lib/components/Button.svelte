<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { focusRingClass } from '$lib/constants';
	import { cn } from '$lib/utils/cn';

	interface Props extends HTMLButtonAttributes {
		href?: string;
		disabled?: boolean;
		class?: string;
		contentClass?: string;
		isLoading?: boolean;
	}

	let {
		href,
		disabled,
		class: classes,
		contentClass,
		isLoading,
		children,
		...rest
	}: Props = $props();
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{...rest}
	{href}
	disabled={isLoading || disabled}
	class={cn(
		'font-base inline-flex items-center rounded ring-offset-2 transition-colors duration-150',
		'h-8 min-w-[2rem] items-center justify-center px-3.5 text-sm font-medium',
		'bg-neutral-100 text-neutral-900 hover:bg-white',
		focusRingClass,
		classes
	)}
>
	<span
		class={cn(
			'flex items-center truncate',
			{ 'select-none': !href, invisible: isLoading },
			contentClass
		)}
	>
		{@render children?.()}
	</span>
</svelte:element>
