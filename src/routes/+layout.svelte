<script lang="ts">
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '../lib/components/nav/Nav.svelte';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<script async src="https://cdn.splitbee.io/sb.js"></script>
</svelte:head>

<div class="relative flex min-h-screen flex-col">
	<Nav />

	<div class="relative mb-auto">
		<main class="mx-auto w-full max-w-screen-sm px-4">
			<slot />
		</main>
	</div>

	<Footer />
</div>
