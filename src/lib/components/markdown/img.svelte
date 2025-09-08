<script lang="ts">
	import type { ClassValue, HTMLImgAttributes } from 'svelte/elements';

	type Props = Pick<
		HTMLImgAttributes,
		'width' | 'height' | 'style' | 'src' | 'alt' | 'loading' | 'class'
	> & {
		wrapperClass?: ClassValue;
	};

	let { src, loading = 'lazy', class: classes, wrapperClass, ...rest }: Props = $props();
</script>

<div
	class={[
		'relative inline',
		'before:absolute before:inset-0 before:z-100 before:size-full before:rounded-lg before:border before:border-white/15 before:content-[""]',
		wrapperClass
	]}
>
	<img {src} {loading} {...rest} class={['rounded-lg', classes]} />
</div>
