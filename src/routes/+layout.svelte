<script lang="ts">
	import '../app.css';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { dev } from '$app/environment';

	let { children } = $props();

	injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<script async src="https://cdn.splitbee.io/sb.js"></script>
</svelte:head>

{@render children?.()}
