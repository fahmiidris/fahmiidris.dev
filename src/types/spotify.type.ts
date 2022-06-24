export type SpotifyDataType = {
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
