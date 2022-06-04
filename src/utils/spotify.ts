import axios from 'axios';

const client_id = process.env.SPOTIFY_CLIENT_ID as string;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET as string;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN as string;

const token = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

type TSpotifyData = {
    is_playing: boolean;
    item: {
        name: string;
        duration_ms: number;
        album: {
            name: string;
            artists: Array<{ name: string }>;
            images: [{ url: string }];
        };
        external_urls: {
            spotify: string;
        };
    };
    progress_ms: number;
    currently_playing_type: string;
};

const getAccessToken = async () => {
    const credentials: URLSearchParams = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token,
    });

    const { data } = await axios.post<{ access_token: string }>('https://accounts.spotify.com/api/token', credentials, {
        headers: {
            Authorization: `Basic ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });

    return data;
};

export const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();

    const { data, status } = await axios.get<TSpotifyData>('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    return { data, status };
};
