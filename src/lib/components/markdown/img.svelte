<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	type Props = Pick<
		HTMLImgAttributes,
		'width' | 'height' | 'style' | 'src' | 'alt' | 'loading' | 'class'
	>;

	let { src, loading = 'lazy', class: classes, ...rest }: Props = $props();
</script>

<img {src} {loading} {...rest} class={['rounded-lg', classes]} />
