<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils/cn';

	type Props = Pick<
		HTMLImgAttributes,
		'width' | 'height' | 'style' | 'src' | 'alt' | 'loading' | 'class'
	>;

	let { src, loading = 'lazy', class: classes, ...rest }: Props = $props();
</script>

<img {src} {loading} {...rest} class={cn('rounded-lg', classes)} />
