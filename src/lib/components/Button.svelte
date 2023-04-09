<script lang="ts">
	import clsx from 'clsx';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface $$Props extends HTMLButtonAttributes {
		href?: string;
		disabled?: boolean;
		class?: string;
		isLoading?: boolean;
	}

	export let href: string | undefined = undefined;
	export let disabled: boolean = false;
	export let cn = '';
	export let isLoading = false;

	export { cn as class };
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{...$$restProps}
	{href}
	disabled={isLoading || disabled}
	class={clsx(
		'font-base inline-flex items-center rounded transition-colors',
		'px-4 items-center justify-center font-medium h-8 min-w-[2rem] text-sm',
		'bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-white',
		cn
	)}
>
	<span
		class={clsx('flex select-none items-center truncate', {
			invisible: isLoading
		})}
	>
		<slot />
	</span>
</svelte:element>
