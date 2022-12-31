/*
  Credits to: https://github.com/leerob/leerob.io
*/

import { getNowPlaying } from '~/lib/spotify';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const song = await getNowPlaying();

  if (!song?.is_playing || !song.item) {
    return res.status(200).json({ isPlaying: false });
  }

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  );

  return res.status(200).json({
    album: song.item.album.name,
    albumImageUrl: song.item.album.images[0].url,
    artist: song.item.artists.map((_artist) => _artist.name).join(', '),
    isPlaying: song.is_playing,
    songUrl: song.item.external_urls.spotify,
    title: song.item.name
  });
}
