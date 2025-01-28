<script lang="ts">
	import type { StackItem } from '$lib/constants';
	import Box from '$lib/components/Box.svelte';
	import Headline from '$lib/components/nav/Headline.svelte';

	interface Props {
		title: string;
		items: StackItem[];
	}

	let { title, items }: Props = $props();
</script>

<div>
	<Headline level="3" class="mb-3 text-base!">{title}</Headline>
	<ul class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
		{#each items as { icon: Icon, name, color, url }}
			<li>
				<Box as={url ? 'a' : 'div'} href={url} class="h-full">
					{#if Icon}
						<span
							class="items-center justify-center rounded-lg p-2"
							style="background-color: {color}26;"
						>
							<span class="grid size-4 place-items-center">
								<Icon />
							</span>
						</span>
					{/if}

					<div class="text-sm text-neutral-300">{name}</div>
				</Box>
			</li>
		{/each}
	</ul>
</div>
