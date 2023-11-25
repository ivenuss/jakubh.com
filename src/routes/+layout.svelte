<script lang="ts">
	import '../app.css';
	import { inject } from '@vercel/analytics';
	import { dev } from '$app/environment';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<script async src="https://cdn.splitbee.io/sb.js"></script>
</svelte:head>

<slot />
