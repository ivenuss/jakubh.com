<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	import Box from '$lib/components/Box.svelte';
	import Headline from '$lib/components/nav/Headline.svelte';
	import Description from '$lib/components/Description.svelte';

	import ExternalIcon from '$lib/components/svg/icons/external.svg?component';

	const data = $page.data as PageData;
	const projects = data.projects.slice(0, 3); // Only show 3 projects
</script>

<section class="flex flex-col gap-4">
	<div class="mb-6 flex flex-col">
		<Headline level="2" class="mb-2.5">My latest projects</Headline>
		<Description>A collection of some side projects that have shipped recently.</Description>
	</div>

	<ul class="flex flex-col gap-2">
		{#each projects as project}
			<li>
				<Box as="a" href="/projects/{project.slug}" class="group">
					<img
						class="h-8 w-8 rounded"
						alt="{project.title}'s icon"
						src="/images/projects/{project.slug}/icon.png"
					/>
					<div class="flex max-w-fit items-center gap-3 overflow-hidden">
						<Headline level="3" class="!text-base transition-colors">
							{project.title}
						</Headline>
						<Description
							as="span"
							class="truncate text-sm opacity-0 transition-opacity group-hover:opacity-100"
						>
							{project.description}
						</Description>
					</div>
					<ExternalIcon
						class="ml-auto h-4 w-4 flex-none text-zinc-500 transition-colors group-hover:text-zinc-800 dark:group-hover:text-zinc-300"
					/>
				</Box>
			</li>
		{/each}
	</ul>
	<a href="/projects" class="text-sm text-zinc-500 hover:underline dark:text-zinc-400">
		...and much more!
	</a>
</section>
