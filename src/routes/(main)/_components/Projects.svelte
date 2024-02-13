<script lang="ts">
	import { ChevronRightIcon } from 'lucide-svelte';
	import type { PageData } from '../$types';
	import { page } from '$app/stores';
	import Box from '$lib/components/Box.svelte';
	import Headline from '$lib/components/nav/Headline.svelte';
	import Description from '$lib/components/Description.svelte';
	import Link from '$lib/components/Link.svelte';

	const data = $page.data as PageData;
	// Show only first 3 projects
	const projects = data.projects.slice(0, 3);
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
						width="32"
						height="32"
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
							class="truncate text-xs opacity-0 transition-opacity group-hover:opacity-100"
						>
							{project.description}
						</Description>
					</div>
					<ChevronRightIcon
						class="ml-auto h-4 w-4 flex-none text-neutral-500 transition-colors group-hover:text-neutral-300"
					/>
				</Box>
			</li>
		{/each}
	</ul>
	<div>
		<Link href="/projects" class="text-sm text-neutral-400 hover:underline">...and much more!</Link>
	</div>
</section>
