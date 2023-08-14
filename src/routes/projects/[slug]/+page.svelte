<script lang="ts">
	import { format } from 'date-fns';
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import clsx from 'clsx';
	import Image from '$lib/components/markdown/img.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import type { PageData } from './$types';

	import GitHubIcon from '$lib/components/svg/icons/github.svg?component';
	import ExternalIcon from '$lib/components/svg/icons/external.svg?component';

	$: frontmatter = $page.data.frontmatter as PageData['frontmatter'];
	$: component = $page.data.component as PageData['component'];
</script>

<article>
	<header class="mb-12">
		<div class="mb-2 flex items-center">
			<Image
				width="48"
				height="48"
				loading="eager"
				alt={frontmatter.title}
				src="/images/projects/{frontmatter.slug}/icon.png"
				class="dark:bg-primary-800 mr-4 h-12 w-12 rounded-lg"
			/>

			<div class="flex flex-col">
				<h1 class="text-2xl font-medium dark:text-zinc-50">
					{frontmatter.title}
				</h1>

				<div class="text-sm dark:text-zinc-400">
					<div>{format(new Date(frontmatter.publishedAt), 'MMMM d, yyyy')}</div>
				</div>
			</div>
		</div>

		<Image
			alt="Thumbnail"
			loading="eager"
			src="/images/projects/{frontmatter.slug}/thumbnail.png"
			class="dark:bg-primary-800 mb-2 h-48 w-full rounded-lg bg-gray-100 object-cover"
		/>

		<div class="flex flex-wrap items-center gap-0.5">
			{#each frontmatter.stack as tag}
				<span
					class="inline-flex cursor-default rounded px-2 py-1 text-sm uppercase text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
				>
					{tag}
				</span>
			{/each}
		</div>

		<div class="mt-4 flex flex-row gap-2">
			{#if frontmatter.owner && frontmatter.repo}
				<Button
					contentClass="gap-1.5"
					href="https://github.com/{frontmatter.owner}/{frontmatter.repo}"
				>
					<GitHubIcon class="h-5 w-5" />View on GitHub
				</Button>
			{/if}

			{#if frontmatter.preview}
				<Button contentClass="gap-1.5" href={frontmatter.preview}>
					<ExternalIcon class="h-5 w-5" />View Live
				</Button>
			{/if}
		</div>
	</header>

	<div
		class={clsx(
			'prose dark:prose-invert prose-headings:font-medium prose-h2:text-xl prose-h3:text-lg prose-pre:bg-gray-200',
			'prose-code:before:content-none prose-code:after:content-none dark:prose-code:bg-zinc-800 dark:prose-code:text-zinc-100 dark:prose-pre:bg-zinc-800',
			'prose-code:bg-zinc-100 prose-code:text-zinc-900 prose-pre:bg-zinc-100'
		)}
	>
		<svelte:component this={component} />
	</div>
</article>

<Seo title="{frontmatter.title} / Jakub Habrcetl" description={frontmatter.description} />
