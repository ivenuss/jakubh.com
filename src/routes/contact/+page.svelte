<script lang="ts">
	import Headline from '$lib/components/nav/Headline.svelte';
	import { socialMedias } from '$lib/constants';
</script>

<Headline level="1" class="mb-5">Contact</Headline>

<div class="flex flex-col">
	<Headline level="3" class="mb-3">Socials</Headline>

	<ul class="grid grid-cols-2 gap-4">
		{#each socialMedias as { title, icon, link }}
			<li>
				<a href={link} class="flex items-center gap-2 hover:underline">
					<svelte:component this={icon} class="w-5 h-5" />
					<span class="text-sm">{title}</span>
				</a>
			</li>
		{/each}
	</ul>
</div>
