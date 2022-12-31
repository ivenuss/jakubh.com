import React from 'react';
import useSWR from 'swr';
import fetcher from '~/lib/fetcher';
import { SpotifyIcon } from '~/icons';
import type { NowPlayingSong } from '~/types';

const NowPlaying: React.FC = () => {
  const { data } = useSWR<NowPlayingSong>(`/api/now-playing`, fetcher);
  const currentSong = data;

  return (
    <>
      <SpotifyIcon
        title="Spotify"
        className="mr-2 flex-none text-lg"
        style={{ color: '#1ed760' }}
      />

      <div className="mr-1 flex-none text-sm text-black dark:text-primary-100">
        Listening to
      </div>

      <div className="overflow-hidden pr-3 text-sm text-black dark:text-primary-100">
        <div className="truncate font-medium">
          {currentSong?.isPlaying ? (
            <>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={currentSong.songUrl}
                className="mr-3 truncate hover:underline"
              >
                {currentSong.title}
              </a>
            </>
          ) : (
            'Not Playing'
          )}
        </div>
      </div>
    </>
  );
};

export default NowPlaying;
