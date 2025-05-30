import { MusicArtistShort } from "./MusicArtist";

export type MusicTrack = {
    id: number;
    title: string;
    release_date: string;
    file_path: string;
    is_explicit: boolean;
    uploaded_at: string;
    cover_url: string;
    duration: string;
    music_artists: MusicArtistShort[]
}

export type MusicTrackPost = {
    title: string;
    release_date: string;
    is_explicit: boolean;
    cover_image?: File;
    audio_file?: File;
    order?: number;
}

export type MusicTrackPut = {
    id: number;
    title: string;
    release_date: string;
    is_explicit: boolean;
    cover_image: File;
    audio_file: File;
}