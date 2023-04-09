<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	import Box from '$lib/components/Box.svelte';
	import Headline from '$lib/components/nav/Headline.svelte';

	import ExternalIcon from '$lib/components/svg/icons/external.svg?component';

	const data = $page.data as PageData;
	const projects = data.projects.slice(0, 3); // Only show 3 projects
</script>

<section class="flex flex-col gap-8">
	<div>
		<Headline level="3" class="mb-2.5">My latest projects</Headline>
		<p class="text-neutral-400">A collection of some side projects that have shipped recently.</p>
	</div>

	<ul class="flex flex-col gap-2">
		{#each projects as project}
			<li>
				<Box as="a" href="/projects/{project.slug}" class="group">
					<img
						src="/images/projects/{project.slug}/icon.png"
						alt="{project.title}'s icon"
						class="h-8 w-8 rounded"
					/>
					<div class="flex items-center gap-3 overflow-hidden max-w-fit">
						<span class="text-zinc-300 group-hover:text-zinc-50 transition-colors">
							{project.title}
						</span>
						<span
							class="truncate text-sm text-zinc-400 group-hover:opacity-100 opacity-0 transition-opacity"
						>
							{project.description}
						</span>
					</div>
					<ExternalIcon
						class="flex-none h-4 w-4 ml-auto text-zinc-500 group-hover:text-zinc-300 transition-colors"
					/>
				</Box>
			</li>
		{/each}
	</ul>
</section>
