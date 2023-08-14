/*
  Credits to: https://github.com/leerob/leerob.io
*/

import type { PageServerLoad } from './$types';
import { getTopTracks } from '$lib/server/spotify';

export const load = (async ({ setHeaders }) => {
	try {
		const { items } = await getTopTracks('short_term');

		const tracks = items?.slice(0, 10).map((track) => ({
			id: track.id,
			artist: track.artists.map((_artist) => _artist.name).join(', '),
			songUrl: track.external_urls.spotify,
			audioUrl: track.preview_url,
			title: track.name,
			images: track.album.images
		}));

		setHeaders({ 'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200' });

		return { tracks };
	} catch {
		return { tracks: [] };
	}
}) satisfies PageServerLoad;
