<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { focusRingClass } from '$lib/constants';
	import { cn } from '$lib/utils/cn';

	interface Props extends HTMLAnchorAttributes {
		unstyled?: boolean;
	}

	let { unstyled, href, class: classes = '', children, ...rest }: Props = $props();
</script>

<a
	{...rest}
	{href}
	class={cn(
		{ 'hover:underline': !unstyled },
		focusRingClass,
		'focus-visible:rounded-sm focus-visible:ring-offset-2',
		classes
	)}
>
	{@render children?.()}
</a>
