<script lang="ts">
	import Box from '$lib/components/Box.svelte';
	import Button from '$lib/components/Button.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import Headline from '$lib/components/nav/Headline.svelte';
	import { socialMedias } from '$lib/constants';
</script>

<Headline level="1" class="mb-5">Contact</Headline>

<div class="flex flex-col gap-8">
	<section class="flex flex-col">
		<Headline level="2" class="mb-3">Socials</Headline>

		<ul class="grid grid-cols-2 gap-2">
			{#each socialMedias as { title, icon, link }}
				<li>
					<Box as="a" href={link} class="flex items-center gap-2.5">
						<svelte:component this={icon} class="w-5 h-5" />
						<span class="text-sm">{title}</span>
					</Box>
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<Headline level="2" class="mb-3">Email</Headline>

		<Button href="mailto:hello@jakubh.com">hello@jakubh.com</Button>
	</section>
</div>

<Seo title="Contact / Jakub Habrcetl" description="This is a place where you can contact me." />
