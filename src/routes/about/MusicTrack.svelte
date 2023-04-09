<script lang="ts">
	import clsx from 'clsx';

	import PlayIcon from '$lib/components/svg/icons/play.svg?component';
	import PauseIcon from '$lib/components/svg/icons/pause.svg?component';
	import Description from '$lib/components/Description.svelte';

	export let order: number;
	export let artist: string;
	export let title: string;
	export let audioUrl: string;
	export let thumbnailUrl: string;
	export let isPlaying: boolean;
</script>

<div class="flex max-w-full flex-row items-center">
	<Description as="div" class="mr-4 hidden w-5 flex-none place-content-center text-sm sm:grid">
		{String('0' + order).slice(-2)}
	</Description>

	<img
		alt="Track cover"
		class="h-10 w-10 flex-none overflow-hidden rounded-md bg-neutral-100"
		src={thumbnailUrl}
	/>

	<div class="mx-4 w-full overflow-hidden">
		<div class="mb-0.5 truncate text-sm font-medium md:text-base">
			{title}
		</div>
		<Description as="div" class="-mt-1 truncate text-sm">{artist}</Description>
	</div>

	{#if audioUrl}
		<button
			type="button"
			class="relative ml-auto flex-none w-5 h-5"
			aria-label={`${isPlaying ? 'Pause' : 'Play'} ${title} by ${artist}`}
			on:click
		>
			<PauseIcon
				class={clsx(
					'absolute top-0 left-0 transition-opacity',
					isPlaying ? 'opacity-100' : 'opacity-0'
				)}
			/>
			<PlayIcon
				class={clsx(
					'absolute top-0 left-0 transition-opacity',
					isPlaying ? 'opacity-0' : 'opacity-100'
				)}
			/>
		</button>
	{/if}
</div>
