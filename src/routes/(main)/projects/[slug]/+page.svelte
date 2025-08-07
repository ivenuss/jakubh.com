<script lang="ts">
	import { format } from 'date-fns';
	import { ChevronLeftIcon, ExternalLinkIcon, GithubIcon } from 'lucide-svelte';
	import Button from '$lib/components/Button.svelte';
	import Image from '$lib/components/markdown/img.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import ViewTransitionWrapper from '$lib/components/ViewTransitionWrapper.svelte';
	import Link from '$lib/components/Link.svelte';
	import { resolve } from '$app/paths';

	let { data } = $props();

	let project = $derived(data.project);
</script>

<Seo title="{project.title} / Jakub Habrcetl" description={project.description} />

<article>
	<header class="mb-12">
		<Link href={resolve('/projects')} class="mb-5 flex items-center gap-1.5 text-sm font-medium">
			<ChevronLeftIcon class="size-4" />
			<span>Back to projects</span>
		</Link>
		<div class="mb-3 flex items-center">
			<Image
				width="48"
				height="48"
				loading="eager"
				alt={project.title}
				src="/images/projects/{project.slug}/icon.png"
				class="bg-primary-800 mr-3 h-10 w-10 rounded-md"
			/>

			<div class="flex flex-col">
				<h1 class="text-xl leading-6 font-medium text-neutral-50">
					{project.title}
				</h1>

				<div class="text-xs text-neutral-400">
					{format(new Date(project.publishedAt), 'MMMM d, yyyy')}
				</div>
			</div>
		</div>

		<ViewTransitionWrapper name={project.title}>
			<div class="mb-2 h-48 w-full overflow-hidden rounded-lg">
				<Image
					alt="Thumbnail"
					loading="eager"
					src="/images/projects/{project.slug}/thumbnail.png"
					class="mb-2 h-48 w-full rounded-lg object-cover"
				/>
			</div>
		</ViewTransitionWrapper>

		<div class="flex flex-wrap items-center gap-1">
			{#each project.stack as tag}
				<span
					class="inline-flex rounded-sm bg-neutral-800 px-2 py-1 text-xs text-neutral-300 uppercase transition-colors"
				>
					{tag}
				</span>
			{/each}
		</div>

		<div class="mt-4 flex flex-row gap-2">
			{#if project.owner && project.repo}
				<Button contentClass="gap-1.5" href="https://github.com/{project.owner}/{project.repo}">
					<GithubIcon class="size-5" />View on GitHub
				</Button>
			{/if}

			{#if project.preview}
				<Button contentClass="gap-1.5" href={project.preview}>
					<ExternalLinkIcon class="size-5" />View Live
				</Button>
			{/if}
		</div>
	</header>

	<div
		class={[
			'prose prose-sm prose-neutral prose-invert prose-headings:font-medium prose-h2:text-xl prose-h3:text-lg prose-pre:bg-gray-200',
			'prose-a:hover:no-underline',
			'prose-code:rounded-sm prose-code:bg-neutral-800 prose-code:px-1 prose-code:py-0.5 prose-code:text-neutral-100 prose-code:before:content-none prose-code:after:content-none prose-pre:text-sm',
			'prose-pre:bg-neutral-800! prose-pre:text-sm'
		]}
	>
		<project.component />
	</div>
</article>
