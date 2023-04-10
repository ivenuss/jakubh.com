import type { LayoutServerLoad } from './$types';
import { getNowPlaying } from '$lib/server/spotify';

export const load = (async ({ cookies }) => {
	const theme = cookies.get('theme') ?? 'dark';
	const song = await getNowPlaying();

	const obj = { theme };

	if (!song?.is_playing || !song.item) {
		return { ...obj, currentSong: { isPlaying: false } };
	}

	return {
		...obj,
		currentSong: {
			album: song.item.album.name,
			albumImageUrl: song.item.album.images[0].url,
			artist: song.item.artists.map((_artist) => _artist.name).join(', '),
			isPlaying: song.is_playing,
			songUrl: song.item.external_urls.spotify,
			title: song.item.name
		}
	};
}) satisfies LayoutServerLoad;
