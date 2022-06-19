import React, { useReducer, useRef, useEffect } from 'react';
import mediaContext from './MediaContext'
import mediaReducer from './MediaReducer'
import SongDetail from '../../Models/SongDetail';
import SongApi from '../../Apis/SongApi';

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
    audio: any,
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
            audio.current!.play();
        } else {
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
        dispatch({ type: TOGGLE_RANDOM, data: !state.audioPlaying });
    }

    const toggleRepeat = () => {
        dispatch({ type: TOGGLE_REPEAT, data: !state.random });
    }

    const setCurrentSong = (id: number) => {
        let newIndex = id % state.songs.length;

        if (newIndex < 0) {
            newIndex = state.songs.length - 1;
        }

        dispatch({ type: SET_CURRENT_SONG, data: newIndex });
    }

    const setPreviousSong = () => {
        if (state.currentSongIndex === 0) {
            setCurrentSong(state.songs.length - 1);
        } else {
            setCurrentSong(state.currentSongIndex - 1);
        }
    }

    const handleSongEnd = () => {
        if (state.random) {
            console.log("Generating random song index...")
            let randomIndex = ~~(Math.random() * state.songs.length);
            if (randomIndex === state.currentSongIndex) {
                randomIndex = (randomIndex + 1) % state.songs.length;
            }
            return dispatch({
                type: SET_CURRENT_SONG,
                data: randomIndex,
            })
        } else if (state.repeat) {
            // Figure out how to start the same song over
        } else {
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
                setPreviousSong,
                handleSongEnd,
            }}
        >
            <audio
                id="backgroundMusic"
                className="bgm"
                onEnded={handleSongEnd}
                ref={audio}
                preload="true"
                src={state.songs[state.currentSongIndex].url}
                autoPlay={true}
                muted={false}
            />
            {props.children}
        </mediaContext.Provider>
    )
}

export default MediaComponent