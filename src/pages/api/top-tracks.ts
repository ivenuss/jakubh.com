/*
  Credits to: https://github.com/leerob/leerob.io
*/

import type { NextApiRequest, NextApiResponse } from 'next';
import { getTopTracks } from '~/lib/spotify';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { items } = await getTopTracks('short_term');

  const tracks = items.slice(0, 10).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    audioUrl: track.preview_url,
    title: track.name,
    images: track.album.images
  }));

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );

  return res.status(200).json({ tracks });
}
