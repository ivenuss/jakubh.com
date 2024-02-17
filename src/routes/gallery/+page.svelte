<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import Seo from '$lib/components/Seo.svelte';

	const images = import.meta.glob('$lib/images/gallery/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}', {
		query: { enhanced: true },
		eager: true
	}) as Record<string, { default: string }>;
</script>

<div class="m-2 grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-2">
	{#each Object.values(images) as module}
		<enhanced:img src={module.default} class="z-30 h-full max-h-[660px] w-full object-cover" />
	{/each}
</div>

<Link
	unstyled
	href="/"
	class="backdrop-saturate-1§50 fixed bottom-10 left-1/2 z-10 -translate-x-1/2 transform rounded-full bg-zinc-900 bg-opacity-50 px-4 py-2.5 ring-2 ring-neutral-600 backdrop-blur-md transition-all hover:ring-opacity-70 focus-visible:rounded-full focus-visible:ring-offset-0"
>
	Return home
</Link>

<Seo title="Gallery / Jakub Habrcetl" description="A collection of images from my life." />
