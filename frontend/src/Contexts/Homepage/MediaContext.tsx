import { createContext } from 'react';
import { SongDetail } from '../../Models/SongDetail';
import { HtmlAudioRef } from '../../Models/HtmlAudioRef';

interface MediaPlayerContext {
    currentSongIndex: number;
    songs: Array<SongDetail> | undefined;
    playlist: Array<SongDetail> | undefined;
    repeat: boolean;
    random: boolean;
    audioPlaying: boolean;
    videoShuffle: boolean;
    audio: HtmlAudioRef;
    setSongsArray: (songArr: Array<SongDetail>) => void;
    toggleMediaPlaying: (play?: boolean) => void;
    toggleVideoShuffle: (play?: boolean) => void;
    toggleRandom: () => void;
    toggleRepeat: () => void;
    setCurrentSong: (id: number) => void;
    setPlaylist: (name?: string) => void;
}

const mediaContext = createContext<MediaPlayerContext>({
    currentSongIndex: -1,
    songs: undefined,
    playlist: undefined,
    repeat: false,
    random: false,
    audioPlaying: false,
    videoShuffle: true,
    audio: { current: null },
    setSongsArray: () => {},
    toggleMediaPlaying: () => {},
    toggleVideoShuffle: () => {},
    toggleRandom: () => {},
    toggleRepeat: () => {},
    setCurrentSong: () => {},
    setPlaylist: () => {},
});

export default mediaContext;