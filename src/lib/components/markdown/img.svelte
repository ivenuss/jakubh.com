<script lang="ts">
	import clsx from 'clsx';

	export let src: string;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img {src} loading="lazy" class={clsx('rounded-lg', $$restProps.class)} />
