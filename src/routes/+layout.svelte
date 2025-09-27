<script lang="ts">
	import '../app.css';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { dev } from '$app/environment';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';

	let { children } = $props();

	injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

{@render children?.()}
