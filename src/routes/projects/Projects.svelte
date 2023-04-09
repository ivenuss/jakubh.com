<script lang="ts">
	import { page } from '$app/stores';
	import Img from '$lib/components/markdown/img.svelte';
	import Headline from '$lib/components/nav/Headline.svelte';
	import type { PageData } from './$types';

	const { projects } = $page.data as PageData;
</script>

<ul class="flex flex-col gap-2">
	{#each projects as project}
		<li class="overflow-hidden">
			<a href="/projects/{project.slug}" class="group relative">
				<Img
					src="/images/projects/{project.slug}/thumbnail.png"
					alt={project.title}
					class="h-28 group-hover:h-52 duration-300 ease-in-out transition-all w-full object-cover"
				/>
				<div
					aria-hidden="true"
					class="absolute top-0 left-0 right-0 bottom-0 transition-colors ease-in-out duration-300 group-hover:bg-zinc-800/40"
				/>

				<div
					class="absolute bottom-0 left-0 p-6 transition-transform ease-in-out duration-300 translate-y-28 group-hover:translate-y-0"
				>
					<Headline level="3" class="mb-1.5">{project.title}</Headline>
					<p class="text-sm">{project.description}</p>
				</div>
			</a>
		</li>
	{/each}
</ul>
