import { createContext } from 'react';
import SongDetail from '../../Models/SongDetail';

interface MediaPlayerContext {
    currentSongIndex: number;
    songs: Array<SongDetail>;
    repeat: boolean;
    random: boolean;
    audioPlaying: boolean;
    videoPlaying: boolean;
    audio: any;
    setSongsArray: (songArr: Array<SongDetail>) => void;
    toggleMediaPlaying: (play?: boolean) => void;
    toggleRandom: () => void;
    toggleRepeat: () => void;
    setCurrentSong: (id: number) => void;
    setPreviousSong: () => void;
    handleSongEnd: () => void;
}

const mediaContext = createContext<MediaPlayerContext>({
    currentSongIndex: 0,
    songs: [],
    repeat: false,
    random: false,
    audioPlaying: false,
    videoPlaying: false,
    audio: null,
    setSongsArray: () => {},
    toggleMediaPlaying: () => {},
    toggleRandom: () => {},
    toggleRepeat: () => {},
    setCurrentSong: () => {},
    setPreviousSong: () => {},
    handleSongEnd: () => {},
});

export default mediaContext;