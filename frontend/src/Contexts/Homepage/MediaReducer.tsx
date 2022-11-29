import { MediaState } from './MediaComponent'

import {
    SET_CURRENT_SONG,
    TOGGLE_RANDOM,
    TOGGLE_REPEAT,
    TOGGLE_PLAYING_AUDIO,
    TOGGLE_SHUFFLE_VIDEO,
    SET_SONGS_ARRAY,
    MediaAction
} from './MediaActions'

function mediaReducer(state: MediaState, action: MediaAction): MediaState {
    switch (action.type) {
        case SET_SONGS_ARRAY:
            return {
                ...state,
                songs: action.data,
            }
        case SET_CURRENT_SONG:
            return {
                ...state,
                currentSongIndex: action.data,
            }
        case TOGGLE_RANDOM:
            return {
                ...state,
                random: action.data,
            }
        case TOGGLE_REPEAT:
            return {
                ...state,
                repeat: action.data,
            }
        case TOGGLE_PLAYING_AUDIO:
            return {
                ...state,
                audioPlaying: action.data,
            }
        case TOGGLE_SHUFFLE_VIDEO:
            return {
                ...state,
                videoShuffle: action.data,
            }
        default:
            return state
    }
}

export default mediaReducer