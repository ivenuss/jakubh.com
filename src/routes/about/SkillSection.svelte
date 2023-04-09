<script lang="ts">
	import Box from '$lib/components/Box.svelte';
	import Headline from '$lib/components/nav/Headline.svelte';
	import type { StackItem } from '$lib/constants';
	import clsx from 'clsx';

	export let title: string;
	export let items: StackItem[];
</script>

<div>
	<Headline level="3" class="mb-3 !text-base">{title}</Headline>
	<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
		{#each items as { icon, name, color, url }}
			<li>
				<Box as={url ? 'a' : 'div'} href={url}>
					{#if icon}
						<span
							class="p-2 items-center justify-center rounded-lg"
							style="background-color: {color}26;"
						>
							<span class="grid place-items-center h-4 w-4">
								<svelte:component this={icon} />
							</span>
						</span>
					{/if}

					<div class="text-sm dark:text-zinc-300">{name}</div>
				</Box>
			</li>
		{/each}
	</ul>
</div>
