/*
  Credits to: https://github.com/leerob/leerob.io
*/

import { URL } from 'url';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      refresh_token,
      grant_type: 'refresh_token'
    } as any)
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};

export const getTopTracks = async (
  time_range: 'short_term' | 'medium_term' | 'long_term'
) => {
  const { access_token } = await getAccessToken();

  const url = new URL(TOP_TRACKS_ENDPOINT);
  url.searchParams.set('time_range', time_range);

  return fetch(url, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};
