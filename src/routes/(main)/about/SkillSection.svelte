<script lang="ts">
	import type { StackItem } from '$lib/constants';
	import Box from '$lib/components/Box.svelte';
	import Headline from '$lib/components/nav/Headline.svelte';

	export let title: string;
	export let items: StackItem[];
</script>

<div>
	<Headline level="3" class="mb-3 !text-base">{title}</Headline>
	<ul class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
		{#each items as { icon, name, color, url }}
			<li>
				<Box as={url ? 'a' : 'div'} href={url} class="h-full">
					{#if icon}
						<span
							class="items-center justify-center rounded-lg p-2"
							style="background-color: {color}26;"
						>
							<span class="grid h-4 w-4 place-items-center">
								<svelte:component this={icon} />
							</span>
						</span>
					{/if}

					<div class="text-sm text-neutral-300">{name}</div>
				</Box>
			</li>
		{/each}
	</ul>
</div>
