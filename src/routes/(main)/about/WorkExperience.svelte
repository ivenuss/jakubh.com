<script lang="ts">
	import ExperienceRow from './ExperienceRow.svelte';
	import Headline from '$lib/components/nav/Headline.svelte';
	import { workExperiences } from '$lib/constants';
</script>

<section class="flex flex-col">
	<Headline level="2" class="mb-3">Work experience</Headline>
	<ul class="flex flex-col gap-4">
		{#each workExperiences as experience}
			<ExperienceRow {...experience} />
		{/each}
	</ul>
</section>
