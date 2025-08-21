<script lang="ts">
	import type { ClassValue, HTMLButtonAttributes } from 'svelte/elements';
	import { focusRingClass } from '$lib/constants';

	type Props = HTMLButtonAttributes & {
		href?: string;
		disabled?: boolean;
		class?: ClassValue;
		contentClass?: ClassValue;
		isLoading?: boolean;
	};

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
	class={[
		'font-base inline-flex items-center rounded-sm ring-offset-2 transition-colors duration-150',
		'h-8 min-w-[2rem] items-center justify-center px-3.5 text-sm font-medium',
		'bg-zinc-100 text-zinc-900 hover:bg-white',
		focusRingClass,
		classes
	]}
>
	<span
		class={[
			'flex items-center truncate',
			{ 'select-none': !href, invisible: isLoading },
			contentClass
		]}
	>
		{@render children?.()}
	</span>
</svelte:element>
