<script lang="ts">
	import { socialMedias } from '$lib/constants';
	import Box from './Box.svelte';
	import Spotify from './Spotify.svelte';
</script>

<footer class="mx-auto w-full max-w-screen-sm px-4 pb-12 pt-16">
	<div class="mx-auto flex flex-col items-center">
		<span class="text-secondary-300 mb-4 mt-2 text-sm dark:text-zinc-400">
			© {new Date().getFullYear()} jakubh.com
		</span>

		<Spotify />

		<ul class="mt-3.5 flex items-center gap-1.5">
			{#each socialMedias as { icon, link, title }}
				<li>
					<Box as="a" href={link} class="!p-1.5" aria-label={title} {title}>
						<svelte:component this={icon} class="h-5 w-5" />
					</Box>
				</li>
			{/each}
		</ul>
	</div>
</footer>
