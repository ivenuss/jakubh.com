<script lang="ts">
	import clsx from 'clsx';

	export let width: number | string | undefined = undefined;
	export let height: number | string | undefined = undefined;
	export let src: string;
	export let alt: string;
	export let loading: 'eager' | 'lazy' = 'lazy';
</script>

<img {width} {height} {src} {alt} {loading} class={clsx('rounded-lg', $$restProps.class)} />
