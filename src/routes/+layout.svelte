<script lang="ts">
	import '../app.css';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import type { Snippet } from 'svelte';
	import { dev } from '$app/environment';

	type Props = {
		children?: Snippet;
	};

	let { children }: Props = $props();

	injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<script async src="https://cdn.splitbee.io/sb.js"></script>
</svelte:head>

{@render children?.()}
