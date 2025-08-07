<script lang="ts">
	import Box from './Box.svelte';
	import { socialMedias } from '$lib/constants';
</script>

<footer class="mx-auto w-full max-w-(--breakpoint-sm) px-4 pt-16 pb-28 md:pb-12">
	<div class="mx-auto flex flex-col items-center">
		<span class="mt-2 mb-4 text-sm text-neutral-400">
			© {new Date().getFullYear()} jakubh.com
		</span>

		<ul class="mt-3.5 flex items-center gap-1.5">
			{#each socialMedias as { icon, link, title }}
				<li>
					<Box as="a" href={link} class="p-1.5!" aria-label={title} {title}>
						<svelte:component this={icon} class="size-5" />
					</Box>
				</li>
			{/each}
		</ul>
	</div>
</footer>
