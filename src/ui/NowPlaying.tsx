import React from 'react';
import useSWR from 'swr';
import fetcher from '~/lib/fetcher';
import { NowPlayingSong } from '~/types/types';
import { SpotifyIcon } from '~/icons';

interface NowPlayingProps {}

const NowPlaying: React.FC<NowPlayingProps> = ({}) => {
  const { data } = useSWR<NowPlayingSong>(`/api/now-playing`, fetcher);
  const currentSong = data;

  return (
    <>
      <SpotifyIcon
        title="Spotify"
        className="flex-none text-lg mr-2"
        style={{ color: '#1ed760' }}
      />

      <div className="text-sm flex-none mr-1 text-black dark:text-primary-100">
        Listening to
      </div>

      <div className="text-sm pr-3 overflow-hidden text-black dark:text-primary-100">
        <div className="truncate font-medium">
          {currentSong?.isPlaying ? (
            <>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={currentSong.songUrl}
                className="truncate mr-3 hover:underline"
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
