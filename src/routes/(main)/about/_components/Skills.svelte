<script lang="ts">
	import SkillSection from './SkillSection.svelte';
	import { techStack } from '$lib/constants';
	import Headline from '$lib/components/nav/Headline.svelte';
</script>

<section>
	<div class="mb-3">
		<Headline level="2" class="mb-3">Skills</Headline>
	</div>

	<div class="flex flex-col gap-6">
		{#each Object.entries(techStack) as [title, items]}
			<SkillSection {title} {items} />
		{/each}
	</div>
</section>
