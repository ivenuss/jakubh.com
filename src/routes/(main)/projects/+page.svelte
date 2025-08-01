<script lang="ts">
	import Projects from './_components/Projects.svelte';
	import Description from '$lib/components/Description.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import Headline from '$lib/components/nav/Headline.svelte';
</script>

<Seo
	title="Projects / Jakub Habrcetl"
	description="I can turn your idea into a fully working project. Here are some examples."
/>

<div class="mb-5">
	<Headline level="1" class="mb-3">My Projects</Headline>
	<Description>
		I've made a lot of projects and this is a small selection of some that I found interesting.
	</Description>
</div>

<Projects />
