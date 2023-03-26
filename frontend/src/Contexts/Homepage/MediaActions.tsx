import { SongDetail } from '../../Models/SongDetail';

interface ISetSongAction {
    type: 'SET_CURRENT_SONG',
    data: number,
}

interface IToggleRandomAction {
    type: 'TOGGLE_RANDOM',
    data: boolean,
}

interface IToggleRepeatAction {
    type: 'TOGGLE_REPEAT',
    data: boolean,
}

interface IToggleAudioAction {
    type: 'TOGGLE_PLAYING_AUDIO',
    data: boolean,
}

interface IToggleVideoAction {
    type: 'TOGGLE_SHUFFLE_VIDEO',
    data: boolean,
}

interface ISetSongsArray {
    type: 'SET_SONGS_ARRAY',
    data: Array<SongDetail>,
}

interface ISetPlaylist {
    type: 'SET_PLAYLIST',
    data: Array<SongDetail>,
}

export type MediaAction = ISetSongAction | IToggleRandomAction | IToggleRepeatAction | IToggleAudioAction | IToggleVideoAction | ISetSongsArray | ISetPlaylist;
export const SET_CURRENT_SONG = 'SET_CURRENT_SONG'
export const TOGGLE_RANDOM = 'TOGGLE_RANDOM'
export const TOGGLE_REPEAT = 'TOGGLE_REPEAT'
export const TOGGLE_PLAYING_AUDIO = 'TOGGLE_PLAYING_AUDIO'
export const TOGGLE_SHUFFLE_VIDEO = 'TOGGLE_SHUFFLE_VIDEO'
export const SET_SONGS_ARRAY = 'SET_SONGS_ARRAY'
export const SET_PLAYLIST = 'SET_PLAYLIST'