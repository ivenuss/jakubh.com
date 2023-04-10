<script lang="ts">
	import { page } from '$app/stores';
	import Headline from '$lib/components/nav/Headline.svelte';
	import { onMount, onDestroy } from 'svelte';
	import MusicTrack from './MusicTrack.svelte';

	const PREVIEW_TRACK_COUNT = 3;
	const { tracks: tracksData } = $page.data;

	let isCollapsed = true;
	let isPlaying: undefined | string;
	let audio: undefined | HTMLAudioElement;

	$: tracks = tracksData.slice(0, isCollapsed ? PREVIEW_TRACK_COUNT : tracksData.length);

	const playTrackAudio = (trackId: string, audioUrl: string) => {
		if (!audio) return;

		audio.src = audioUrl;

		if (!isPlaying || isPlaying !== trackId) {
			isPlaying = trackId;
			audio.play();
		} else {
			isPlaying = undefined;
			audio.pause();
		}
	};

	// Event listener
	const onEnd = () => {
		isPlaying = undefined;
	};

	onMount(() => {
		audio = new Audio();
		audio.volume = 0.15;

		audio?.addEventListener('ended', onEnd);
	});

	onDestroy(() => {
		// Stop music on route navigation
		audio?.pause();
		audio?.removeEventListener('ended', onEnd);
	});
</script>

<section class="mb-6 flex flex-col">
	<Headline level="2" class="mb-3">Top 10 Tracks I listen To</Headline>
	<div class="flex flex-col gap-4">
		{#if tracks}
			{#each tracks as track, i}
				<MusicTrack
					order={i + 1}
					artist={track.artist}
					title={track.title}
					audioUrl={track.audioUrl}
					thumbnailUrl={track.images[2]?.url}
					isPlaying={isPlaying === track.id}
					on:click={() => playTrackAudio(track.id, track.audioUrl)}
				/>
			{/each}
		{/if}
	</div>

	<button
		aria-expanded={!isCollapsed}
		class="mx-auto mt-2 self-start p-2 font-medium hover:underline"
		on:click={() => (isCollapsed = !isCollapsed)}
	>
		Show {isCollapsed ? 'all' : 'less'}
	</button>
</section>
