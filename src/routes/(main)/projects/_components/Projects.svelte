<script lang="ts">
	import type { PageData } from '../$types';
	import { focusRingClass } from '$lib/constants';
	import { page } from '$app/state';
	import Img from '$lib/components/markdown/img.svelte';
	import ViewTransitionWrapper from '$lib/components/ViewTransitionWrapper.svelte';
	import { resolve } from '$app/paths';

	let { projects } = $derived(page.data as PageData);
</script>

<ul class="flex flex-col gap-3">
	{#each projects as project}
		<li class="contents">
			<a
				href={resolve('/(main)/projects/[slug]', { slug: project.slug })}
				class={[
					'group relative h-36 w-full overflow-hidden rounded-lg transition-all duration-300 ease-in-out focus-visible:ring-offset-2 md:h-28 md:hover:h-52 md:focus-visible:h-52',
					focusRingClass
				]}
			>
				<ViewTransitionWrapper name={project.title}>
					<Img
						loading="eager"
						alt="{project.title}'s thumbnail"
						src="/images/projects/{project.slug}/thumbnail.png"
						class="size-full bg-surface-900 object-cover"
					/>
				</ViewTransitionWrapper>
				<div
					aria-hidden="true"
					class="absolute top-0 right-0 bottom-0 left-0 hidden transition-colors duration-300 ease-in-out group-hover:bg-surface-800/40 group-focus-visible:bg-surface-800/40 md:block"
				></div>
				<div
					class="absolute bottom-0 left-0 hidden translate-y-full p-3 text-white transition-transform duration-300 ease-in-out group-hover:translate-y-0 group-focus-visible:translate-y-0 md:block md:p-6"
				>
					<h2 class="text-lg font-medium md:mb-0.5">{project.title}</h2>
					<p class="text-sm">{project.description}</p>
				</div>
			</a>
		</li>
	{/each}
</ul>
