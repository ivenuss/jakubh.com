<script lang="ts">
	import Headline from '$lib/components/nav/Headline.svelte';
	import { socialMedias } from '$lib/constants';
</script>

<Headline level="1" class="mb-1">Contact</Headline>
<p class="text-zinc-400">Did I catch your attention? Let's talk.</p>

<div>
	<Headline level="3" class="mb-1">Socials</Headline>

	<div class="grid grid-cols-2">
		{#each socialMedias as { title }}
			<div>{title}</div>
		{/each}
	</div>
</div>
