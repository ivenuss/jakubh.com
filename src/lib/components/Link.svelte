<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { focusRingClass } from '$lib/constants';
	import { cn } from '$lib/utils/cn';

	interface $$Props extends HTMLAnchorAttributes {
		unstyled?: boolean;
	}

	$: props = $$props as $$Props;
</script>

<a
	{...props}
	href={props.href}
	class={cn(
		{ 'hover:underline': !props.unstyled },
		focusRingClass,
		'focus-visible:rounded focus-visible:ring-offset-2',
		props.class
	)}
>
	<slot />
</a>
