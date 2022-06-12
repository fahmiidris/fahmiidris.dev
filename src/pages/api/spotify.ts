import { getNowPlaying } from '@/utils/spotify';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { data, status } = await getNowPlaying();

    if (status === 204 || status > 400 || data.currently_playing_type !== 'track') {
        return res.status(200).json({ isPlaying: false });
    }

    const response = {
        isPlaying: data.is_playing,
        title: data.item.name,
        album: data.item.album.name,
        artist: data.item.album.artists.map((artist) => artist.name).join(', '),
        albumImageUrl: data.item.album.images[0].url,
        songUrl: data.item.external_urls.spotify,
        progress: data.progress_ms,
        duration: data.item.duration_ms,
    };

    res.status(200).json(response);
}
