<script lang="ts">
	import Img from '$lib/components/markdown/img.svelte';
	import Headline from '$lib/components/nav/Headline.svelte';
</script>

<section>
	<Headline level="2" class="mb-3">Short bio</Headline>
	<div class="flex flex-row gap-5">
		<p class="w-full text-sm text-surface-400">
			Hey, my name is Jakub. I love building user interfaces heavily focused on user experience.
			<br />
			Besides that, I'm also a graphic designer and UI/UX enthusiast.
		</p>
		<Img
			loading="eager"
			alt="Profile"
			src="/images/profile_pic.jpg"
			class="rounded-full grayscale"
			wrapperClass="size-20  before:rounded-full! flex-none overflow-hidden rounded-full ring-sky-900 transition-shadow duration-300 hover:ring-[3px]"
		/>
	</div>
</section>
