import * as React from 'react';

type TNowPlaying = {
  album?: string;
  albumImageUrl?: string;
  artist?: string;
  isPlaying: boolean;
  songUrl?: string;
  title?: string;
};

export const NowPlaying = ({
  albumImageUrl,
  artist,
  isPlaying,
  songUrl,
  title,
}: TNowPlaying): JSX.Element => {
  return (
    <div className="pt-2">
      <div className="block w-full border border-dashed border-slate-700 py-2 px-4 text-sm">
        Not listening to anything
      </div>
    </div>
  );
};
