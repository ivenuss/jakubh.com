<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let width: number | string | undefined = undefined;
	export let height: number | string | undefined = undefined;
	export let style: string | undefined | null = undefined;
	export let src: string;
	export let alt: string;
	export let loading: 'eager' | 'lazy' = 'lazy';
</script>

<!-- prettier-ignore -->
<img  src={src} {width} {height} {alt} {style} {loading} class={cn('rounded-lg', $$restProps.class)} />
