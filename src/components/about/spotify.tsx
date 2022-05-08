import * as React from 'react';

import { Link } from '@/components/link';
import { NowPlaying } from '@/components/about/now-playing';

export const Spotify = (): JSX.Element => {
  return (
    <section id="now-playing" className="pt-4">
      <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200">
        <Link href="#now-playing">Now Playing on Spotify</Link>
      </h2>
      <p className="pt-2">See what I&apos;m currently listening on spotify</p>
      <NowPlaying isPlaying={false} />
    </section>
  );
};
