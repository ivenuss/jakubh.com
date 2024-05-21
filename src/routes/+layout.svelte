<script lang="ts">
	import '../app.css';
	import { inject } from '@vercel/analytics';
	import { dev } from '$app/environment';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	$effect(() => {
		inject({ mode: dev ? 'development' : 'production' });
	});
</script>

<svelte:head>
	<script async src="https://cdn.splitbee.io/sb.js"></script>
</svelte:head>

{@render children?.()}
