<script lang="ts">
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
				<svelte:element
					this={url ? 'a' : 'div'}
					href={url}
					class={clsx(
						'flex items-center gap-3 rounded-md p-3 bg-neutral-50 dark:bg-zinc-900 dark:bg-opacity-75 dark:backdrop-saturate-150 dark:backdrop-blur-xl',
						{ 'ring-inset hover:ring-2 ring-zinc-800 transition-shadow': url }
					)}
				>
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
				</svelte:element>
			</li>
		{/each}
	</ul>
</div>
