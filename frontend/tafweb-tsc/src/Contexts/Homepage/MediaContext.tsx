import { createContext } from 'react';
import SongDetail from '../../Models/SongDetail';
import HtmlAudioRef from '../../Models/HtmlAudioRef';

interface MediaPlayerContext {
    currentSongIndex: number;
    songs: Array<SongDetail>;
    repeat: boolean;
    random: boolean;
    audioPlaying: boolean;
    videoPlaying: boolean;
    audio: HtmlAudioRef;
    setSongsArray: (songArr: Array<SongDetail>) => void;
    toggleMediaPlaying: (play?: boolean) => void;
    toggleVideoPlaying: (play?: boolean) => void;
    toggleRandom: () => void;
    toggleRepeat: () => void;
    setCurrentSong: (id: number) => void;
}

const mediaContext = createContext<MediaPlayerContext>({
    currentSongIndex: 0,
    songs: [],
    repeat: false,
    random: false,
    audioPlaying: false,
    videoPlaying: true,
    audio: { current: null },
    setSongsArray: () => {},
    toggleMediaPlaying: () => {},
    toggleVideoPlaying: () => {},
    toggleRandom: () => {},
    toggleRepeat: () => {},
    setCurrentSong: () => {},
});

export default mediaContext;