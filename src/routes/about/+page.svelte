<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Headline from '$lib/components/nav/Headline.svelte';
	import Bio from './Bio.svelte';
	import Skills from './Skills.svelte';
	import TopTracks from './TopTracks.svelte';
	import WorkExperience from './WorkExperience.svelte';
</script>

<Headline level="1" class="mb-5">About Me</Headline>

<div class="mt-4 flex flex-col gap-12">
	<Bio />
	<Skills />
	<WorkExperience />
	<TopTracks />
</div>

<Seo
	title="About / Jakub Habrcetl"
	description="Who am I & what do I do? Come and get to know me better."
/>
