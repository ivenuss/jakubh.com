<script lang="ts">
	import { techStack } from '$lib/constants';
	import Headline from '$lib/components/nav/Headline.svelte';
	import SkillSection from './SkillSection.svelte';
</script>

<section>
	<div class="mb-3">
		<Headline level="1" class="mb-3 text-xl font-medium text-black dark:text-primary-100">
			Skills
		</Headline>
	</div>

	<div class="flex flex-col gap-6">
		{#each Object.entries(techStack) as [title, items]}
			<SkillSection {title} {items} />
		{/each}
	</div>
</section>
