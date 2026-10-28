<script lang="ts">
	import '../app.css';
	import { inject, pageview } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights';
	import { browser, dev } from '$app/env';
	import { page } from '$app/state';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';

	let { children } = $props();

	// The `/sveltekit` entrypoints of both Vercel packages still use the removed `$app/stores`
	if (browser) {
		inject({
			mode: dev ? 'development' : 'production',
			framework: 'sveltekit',
			disableAutoTrack: true
		});
	}
	const speedInsights = browser
		? injectSpeedInsights({ framework: 'sveltekit', route: page.route.id })
		: null;

	$effect(() => {
		if (!page.route.id) return;
		pageview({ route: page.route.id, path: page.url.pathname });
		speedInsights?.setRoute(page.route.id);
	});
</script>

{@render children?.()}
