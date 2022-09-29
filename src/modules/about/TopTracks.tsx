import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import fetcher from '~/lib/fetcher';
import MusicTrack from './MusicTrack';
import Router from 'next/router';
import { TopTracks } from '~/types/types';
import { PREVIEW_TRACK_COUNT } from '~/lib/constants';

const TopTracks: React.FC = () => {
  const { data } = useSWR<TopTracks>('/api/top-tracks', fetcher);
  const topTracks = data?.tracks;

  const [collapsed, setCollapsed] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<{
    id: number | null;
    isPlaying: boolean;
    audio: HTMLAudioElement | null;
  }>({ id: null, isPlaying: false, audio: null });

  // Stop audio if route is changed
  Router.events.on('routeChangeComplete', () => {
    if (currentTrack?.audio) {
      currentTrack.audio.pause();
      currentTrack.audio.currentTime = 0;
    }
  });

  // Intial audio load when page is hydrated
  useEffect(() => {
    setCurrentTrack((c) => ({ ...c, audio: new Audio() }));
  }, []);

  useEffect(() => {
    // Call when track ends
    const onEnd = () => {
      setCurrentTrack((c) => ({ ...c, id: null, isPlaying: false }));
    };

    if (currentTrack.audio) {
      currentTrack.audio?.addEventListener('ended', onEnd);
      return () => {
        currentTrack.audio?.removeEventListener('ended', onEnd);
      };
    }
  }, [currentTrack.audio]);

  const handleToggleMusic = (trackId: number, audioUrl: string) => {
    const isNewTrack = currentTrack.id !== trackId;
    const isPlaying = isNewTrack || !currentTrack.isPlaying;

    if (currentTrack.audio) {
      if (isNewTrack) currentTrack.audio.src = audioUrl; // Switch to new song

      // Set volume to that track
      currentTrack.audio.volume = 0.15;

      // Play new track, or stop the current one
      isPlaying ? currentTrack.audio.play() : currentTrack.audio.pause();
    }

    // Apply changes
    setCurrentTrack((c) => ({ ...c, id: trackId, isPlaying }));
  };

  return (
    <section className="flex flex-col mb-6">
      <h2 className="font-medium text-black dark:text-primary-100 text-xl mb-3">
        Top 10 Tracks I listen To
      </h2>

      <div className="flex flex-col gap-4">
        {topTracks &&
          topTracks
            .map((track, i) => {
              return (
                <MusicTrack
                  key={i}
                  order={i + 1}
                  artist={track.artist}
                  title={track.title}
                  audioUrl={track.audioUrl}
                  thumbnailUrl={track.images[2].url}
                  onToggle={() => handleToggleMusic(i, track.audioUrl)}
                  isPlaying={currentTrack.id === i && currentTrack.isPlaying}
                />
              );
            })
            .slice(0, collapsed ? topTracks.length : PREVIEW_TRACK_COUNT)}
      </div>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="mx-auto mt-2 p-2 self-start text-secondary-accent hover:text-secondary-accent-hover font-medium"
      >
        {collapsed ? 'See Less' : 'See All'}
      </button>
    </section>
  );
};

export default TopTracks;
