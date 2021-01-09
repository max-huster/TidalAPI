import {TidalArtistInfoFull} from "./TidalArtist";

export interface TidalTrack {
    id: number;
    title: string;
    artists: TidalArtistInfoFull[];
    /**
     * Duration in seconds
     */
    duration: number;
    popularity: number;
    url: string;
    isrc: string;
}
