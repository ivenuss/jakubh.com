<script lang="ts">
	import Headline from '$lib/components/nav/Headline.svelte';
	import { workExperiences } from '$lib/constants';
	import ExperienceRow from './ExperienceRow.svelte';
</script>

<section class="flex flex-col">
	<Headline level="3" class="mb-5">Work Experience</Headline>
	<div class="flex flex-col gap-4">
		{#each workExperiences as experience}
			<ExperienceRow {...experience} />
		{/each}
	</div>
</section>
