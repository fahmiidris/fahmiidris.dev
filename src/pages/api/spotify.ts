import { getNowPlaying } from '@/utils/spotify';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await getNowPlaying();

  if (
    response.status === 204 ||
    response.status > 400 ||
    response.data.currently_playing_type !== 'track'
  ) {
    return res.status(200).json({ isPlaying: false });
  }

  const data = {
    isPlaying: response.data.is_playing,
    title: response.data.item.name,
    album: response.data.item.album.name,
    artist: response.data.item.album.artists.map((artist) => artist.name).join(', '),
    albumImageUrl: response.data.item.album.images[0].url,
    songUrl: response.data.item.external_urls.spotify,
    progress: response.data.progress_ms,
    duration: response.data.item.duration_ms,
  };

  res.status(200).json(data);
}
