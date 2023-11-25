<script lang="ts">
	import clsx from 'clsx';

	export let width: number | string | undefined = undefined;
	export let height: number | string | undefined = undefined;
	export let style: string | undefined | null = undefined;
	export let src: string;
	export let alt: string;
	export let loading: 'eager' | 'lazy' = 'lazy';
</script>

<!-- prettier-ignore -->
<img  src={src} {width} {height} {alt} {style} {loading} class={clsx('rounded-lg', $$restProps.class)} />
