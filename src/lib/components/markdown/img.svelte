<script lang="ts">
	import clsx from 'clsx';

	export let src: string;
	export let alt: string;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img {src} {alt} loading="lazy" class={clsx('rounded-lg', $$restProps.class)} />
