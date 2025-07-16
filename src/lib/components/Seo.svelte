<script lang="ts">
	import { page } from '$app/state';
	import { SITE_URL } from '$lib/constants';

	interface Props {
		title?: string;
		description?: string;
		image?: string;
		type?: string;
		date?: string | undefined;
	}

	let {
		title = 'Jakub Habrcetl / Web dev, UI & UX Designer.',
		description = "My name is Jakub Habrcetl. I'm a web developer, UI & UX Designer.",
		image = SITE_URL + '/images/banner.png',
		type = 'website',
		date = undefined
	}: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="robots" content="follow, index" />
	<meta content={description} name="description" />
	<meta property="og:url" content="{SITE_URL}{page.url.pathname}" />
	<link rel="canonical" href="{SITE_URL}{page.url.pathname}" />
	<meta property="og:type" content={type} />
	<meta property="og:site_name" content="JakubH" />
	<meta property="og:description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:image" content={image} />
	<meta property="og:image:alt" content="JakubH Banner" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@ijakubh" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	{#if date}
		<meta property="article:published_time" content={date} />
	{/if}

	<link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
</svelte:head>
