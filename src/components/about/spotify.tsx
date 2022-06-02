import * as React from 'react';
import useSWR from 'swr';
import Image from 'next/image';

import { Link } from '@/components/link';
import { Section } from '@/components/section';

type TNowPlaying = {
  isPlaying: boolean;
  title: string;
  album: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
  progress: number;
  duration: number;
};

export const Spotify = (): JSX.Element => {
  const { data } = useSWR<TNowPlaying | undefined>('/api/spotify');

  const changeMillisecondsToMinutes = (ms: number = 0): string => {
    const minutes: number = Math.floor(ms / 60000);
    const seconds: number = Number(((ms % 60000) / 1000).toFixed(0));

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const getPersentase = (progress: number = 0, duration: number = 0): string => {
    let result: number = 0;
    if (duration > 0) result = (progress / duration) * 100;

    return `${result.toFixed(0)}%`;
  };

  return (
    <Section
      id="now-playing"
      title="Now Playing on Spotify"
      description="Listen to my music on Spotify"
      className="pt-4"
    >
      <div className="pt-4">
        {data && data.isPlaying ? (
          <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-4 pb-6 dark:border-transparent dark:bg-slate-800 sm:space-y-8 sm:p-10 sm:pb-8 lg:space-y-6 lg:p-6 xl:space-y-8 xl:p-10 xl:pb-8">
            <div className="flex items-center space-x-4">
              <div className="relative aspect-square w-[88px] flex-none overflow-hidden rounded-lg bg-slate-100">
                <Image
                  src={data.albumImageUrl}
                  alt={data.album}
                  layout="fill"
                  className="object-cover object-center"
                />
              </div>
              <div className="min-w-0 flex-auto space-y-1 font-semibold">
                <Link
                  href={data.songUrl}
                  openNewTab={true}
                  className="text-sm leading-6 text-cyan-500 dark:text-cyan-400"
                >
                  Open on Spotify
                </Link>
                <h2 className="truncate text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {data.title} - {data.album}
                </h2>
                <p className="text-lg text-slate-900 dark:text-slate-50">{data.artist}</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <div className="overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
                  <div
                    className="h-2 bg-cyan-500 dark:bg-cyan-400"
                    style={{ width: getPersentase(data.progress, data.duration) }}
                    role="progressbar"
                    aria-label="music progress"
                  />
                </div>
                <div
                  className="absolute top-1/2 -mt-2 -ml-2 flex h-4 w-4 items-center justify-center rounded-full bg-white shadow ring-2 ring-cyan-500 dark:ring-cyan-400"
                  style={{ left: getPersentase(data.progress, data.duration) }}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 ring-1 ring-inset ring-slate-900/5 dark:bg-cyan-400" />
                </div>
              </div>
              <div className="flex justify-between text-sm font-medium tabular-nums leading-6">
                <div className="text-cyan-500 dark:text-slate-100">
                  {changeMillisecondsToMinutes(data.progress)}
                </div>
                <div className="text-slate-500 dark:text-slate-400">
                  {changeMillisecondsToMinutes(data.duration)}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="block w-full border border-dashed border-slate-700 py-2 px-4 text-sm">
            Not listening to anything
          </div>
        )}
      </div>
    </Section>
  );
};
