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
	<script
		defer
		data-domain="jakubh.com"
		src="https://analytics.jakubh.com/js/script.outbound-links.js"
	></script>
</svelte:head>

{@render children?.()}
