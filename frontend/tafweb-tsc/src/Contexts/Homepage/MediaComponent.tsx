import React, { useReducer, useRef, useEffect } from 'react';
import mediaContext from './MediaContext'
import mediaReducer from './MediaReducer'
import SongDetail from '../../Models/SongDetail';
import HtmlAudioRef from '../../Models/HtmlAudioRef';
import SongApi from '../../Utilities/SongApi';

import {
    SET_CURRENT_SONG,
    TOGGLE_RANDOM,
    TOGGLE_REPEAT,
    TOGGLE_PLAYING_AUDIO,
    TOGGLE_PLAYING_VIDEO,
    SET_SONGS_ARRAY,
    MediaAction
} from './MediaActions'

export type MediaState = {
    currentSongIndex: number,
    songs: Array<SongDetail>,
    repeat: boolean,
    random: boolean,
    audioPlaying: boolean,
    videoPlaying: boolean,
    audio: HtmlAudioRef,
    currentSongTime: number,
}

const MediaComponent = (props: any) => {
    const audio = useRef<HTMLAudioElement>(null);
    //const songlist = [{ title: "BringItBack", artist: "The Ambient Funk", url: "https://tafers.net/files/BringItBack.mp3" }];
    const songlist = SongApi.getDefaultSongs();

    const initialState: MediaState = {
        currentSongIndex: 0,
        songs: songlist,
        repeat: false,
        random: false,
        audioPlaying: false,
        videoPlaying: false,
        audio: audio,
        currentSongTime: 0,
    }

    const [state, dispatch] = useReducer(mediaReducer, initialState)

    const setSongsArray = (songArr: Array<SongDetail>) => {
        dispatch({ type: SET_SONGS_ARRAY, data: songArr });
    }

    const toggleAudio = (play: boolean) => {
        if (play) {
            console.log("MediaComponent::play()")
            audio.current!.play();
        } else {
            console.log("MediaComponent::pause()")
            audio.current!.pause();
        }
    }

    const toggleMediaPlaying = (play?: boolean) => {
        let playAudio = play;

        if (playAudio === undefined) {
            playAudio = !state.audioPlaying
        }

        dispatch({ type: TOGGLE_PLAYING_AUDIO, data: playAudio });

        if (audio.current?.readyState === 4) {
            toggleAudio(playAudio)
        } else {
            audio.current!.onloadeddata = () => {  toggleAudio(state.audioPlaying) }
        }    
    }

    const toggleRandom = () => {
        dispatch({ type: TOGGLE_RANDOM, data: !state.random });
    }

    const toggleRepeat = () => {
        dispatch({ type: TOGGLE_REPEAT, data: !state.repeat });
    }

    const setCurrentSong = (id: number) => {
        let newIndex = id % state.songs.length;

        if (newIndex < 0) {
            newIndex = state.songs.length - 1;
        }

        console.log(`MediaComponent:: PreviousSongIndex=${state.currentSongIndex} NewSongIndex=${newIndex}.`)
        dispatch({ type: SET_CURRENT_SONG, data: newIndex });
    }

    const handleSongEnd = () => {
        if (state.random) {
            console.log("MediaComponent:: Generating random song index...")
            let randomIndex = ~~(Math.random() * state.songs.length);
            if (randomIndex === state.currentSongIndex) {
                randomIndex = (randomIndex + 1) % state.songs.length;
            }
            return dispatch({
                type: SET_CURRENT_SONG,
                data: randomIndex,
            })
        } else if (state.repeat) {
            console.log("MediaComponent:: Repeating the song...")
            if (state.audio.current) {
                // Just reset the currentTime and play the song again
                state.audio.current.currentTime = 0;
                state.audio.current.play();
            }
        } else {
            console.log("MediaComponent:: Next song...")
            let newSongIndex = (state.currentSongIndex + 1) % state.songs.length;
            return dispatch({
                type: SET_CURRENT_SONG,
                data: newSongIndex,
            });
        }
    }


    return (
        <mediaContext.Provider
            value={{
                currentSongIndex: state.currentSongIndex,
                songs: state.songs,
                repeat: state.repeat,
                random: state.random,
                audioPlaying: state.audioPlaying,
                videoPlaying: state.videoPlaying,
                audio: audio,
                setSongsArray,
                toggleMediaPlaying,
                toggleRandom,
                toggleRepeat,
                setCurrentSong,
            }}
        >
            <audio
                id="backgroundMusic"
                className="bgm"
                onEnded={handleSongEnd}
                ref={audio}
                preload="true"
                src={state.songs[state.currentSongIndex].url}
                autoPlay={state.audioPlaying}
                muted={false}
            />
            {props.children}
        </mediaContext.Provider>
    )
}

export default MediaComponent