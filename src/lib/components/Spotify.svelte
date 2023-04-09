<script lang="ts">
	import { page } from '$app/stores';
	import SpotifyIcon from '$lib/components/svg/icons/spotify.svg?component';

	const { currentSong } = $page.data;
</script>

<span class="inline-flex items-center text-sm text-black dark:text-primary-100">
	<SpotifyIcon class="mr-2 flex-none text-lg h-4 w-4" />

	<span class="mr-1 flex-none">Listening to</span>

	<span class="truncate font-medium">
		{#if currentSong.isPlaying}
			<a
				target="_blank"
				rel="noopener noreferrer"
				href={currentSong.songUrl}
				class="mr-3 truncate hover:underline"
			>
				{currentSong.title}
			</a>
		{:else}
			Not Playing
		{/if}
	</span>
</span>
