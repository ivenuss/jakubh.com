<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { HTMLImgAttributes } from 'svelte/elements';

	type Props = Pick<
		HTMLImgAttributes,
		'width' | 'height' | 'style' | 'src' | 'alt' | 'loading' | 'class'
	>;

	let { src, loading = 'lazy', class: classes, ...rest }: Props = $props();
</script>

<!-- prettier-ignore -->
<img  src={src} {...rest} class={cn('rounded-lg', classes)} />
