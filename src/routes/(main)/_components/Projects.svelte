<script lang="ts">
	import { ChevronRightIcon } from 'lucide-svelte';
	import type { PageData } from '../$types';
	import { page } from '$app/state';
	import Box from '$lib/components/Box.svelte';
	import Headline from '$lib/components/nav/Headline.svelte';
	import Description from '$lib/components/Description.svelte';
	import Link from '$lib/components/Link.svelte';
	import { resolve } from '$app/paths';
	import Img from '$lib/components/markdown/img.svelte';

	let data = $derived(page.data as PageData);
	let projects = $derived(data.projects.slice(0, 3)); // Show only first 3 projects
</script>

<section class="flex flex-col gap-4">
	<div class="mb-6 flex flex-col">
		<Headline level="2" class="mb-2.5">My latest projects</Headline>
		<Description>A collection of some side projects that have shipped recently.</Description>
	</div>

	<ul class="flex flex-col gap-2">
		{#each projects as project}
			<li>
				<Box as="a" href={resolve('/(main)/projects/[slug]', { slug: project.slug })} class="group">
					<Img
						width="32"
						height="32"
						alt="{project.title}'s icon"
						src="/images/projects/{project.slug}/icon.png"
						wrapperClass="size-8 flex-none before:rounded-lg"
						class="size-8 rounded-lg"
					/>
					<div class="flex max-w-fit items-center gap-5 overflow-hidden">
						<Headline level="3" class="text-base! transition-colors">
							{project.title}
						</Headline>
						<Description
							as="span"
							class="truncate! text-xs opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
						>
							{project.description}
						</Description>
					</div>
					<ChevronRightIcon
						class="ml-auto size-5 flex-none text-surface-500 transition-all group-hover:translate-x-1 group-hover:text-surface-300"
					/>
				</Box>
			</li>
		{/each}
	</ul>
	<div>
		<Link href={resolve('/(main)/projects')} class="text-sm">…and much more!</Link>
	</div>
</section>
