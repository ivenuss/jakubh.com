<script lang="ts">
	import clsx from 'clsx';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { focusRingClass } from '$lib/constants';

	interface $$Props extends HTMLAnchorAttributes {
		unstyled?: boolean;
	}

	$: props = $$props as $$Props;
</script>

<a
	{...props}
	href={props.href}
	class={clsx(
		{ 'hover:underline': !props.unstyled },
		focusRingClass,
		'focus-visible:rounded focus-visible:ring-offset-2',
		props.class
	)}
>
	<slot />
</a>
