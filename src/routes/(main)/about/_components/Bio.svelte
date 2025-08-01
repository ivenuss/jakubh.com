<script lang="ts">
	import Headline from '$lib/components/nav/Headline.svelte';
</script>

<section>
	<Headline level="2" class="mb-3">Short bio</Headline>
	<div class="flex flex-row gap-5">
		<p class="w-full text-sm text-neutral-400">
			Hey, my name is Jakub. I love building user interfaces heavily focused on user experience.
			<br />
			Besides that, I'm also a graphic designer and UI/UX enthusiast.
		</p>
		<div
			class="h-20 w-20 flex-none overflow-hidden rounded-full ring-sky-900 transition-shadow duration-300 hover:ring-[3px]"
		>
			<img loading="eager" alt="Profile" src="/images/profile_pic.jpg" class="grayscale" />
		</div>
	</div>
</section>
