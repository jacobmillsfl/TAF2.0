import React, { useReducer, useRef, useEffect, useState } from 'react';
import mediaContext from './MediaContext'
import mediaReducer from './MediaReducer'
import { SongDetail } from '../../Models/SongDetail';
import { HtmlAudioRef } from '../../Models/HtmlAudioRef';
import SongApi from '../../Utilities/SongApi';
import MediaContainer from '../../Components/MediaPlayer/MediaContainer';

import {
    SET_CURRENT_SONG,
    TOGGLE_RANDOM,
    TOGGLE_REPEAT,
    TOGGLE_PLAYING_AUDIO,
    TOGGLE_SHUFFLE_VIDEO,
    SET_SONGS_ARRAY,
    SET_PLAYLIST,
    MediaAction
} from './MediaActions'

export type MediaState = {
    currentSongIndex: number,
    songs: Array<SongDetail> | undefined,
    playlist: Array<SongDetail> | undefined,
    repeat: boolean,
    random: boolean,
    audioPlaying: boolean,
    videoShuffle: boolean,
    audio: HtmlAudioRef,
    currentSongTime: number,
}

const MediaComponent = (props: any) => {
    const audio = useRef<HTMLAudioElement>(null);
    const initialState: MediaState = {
        currentSongIndex: -1,
        songs: undefined,
        playlist: undefined,
        repeat: false,
        random: false,
        audioPlaying: false,
        videoShuffle: true,
        audio: audio,
        currentSongTime: 0,
    }

    const [state, dispatch] = useReducer(mediaReducer, initialState);

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
            audio.current!.onloadeddata = () => { toggleAudio(state.audioPlaying) }
        }    
    }

    const toggleVideoShuffle = (play?: boolean) => {
        let playVideo = play;

        if (playVideo === undefined) {
            playVideo = !state.videoShuffle
        }

        dispatch({ type: TOGGLE_SHUFFLE_VIDEO, data: playVideo }); 
    }

    const toggleRandom = () => {
        dispatch({ type: TOGGLE_RANDOM, data: !state.random });
    }

    const toggleRepeat = () => {
        dispatch({ type: TOGGLE_REPEAT, data: !state.repeat });
    }

    const setCurrentSong = (id: number) => {
        if (state.playlist)
        {
            let newIndex = state.random ? 
                Math.floor(Math.random() * state.playlist.length) :
                id < 0 ? 
                    state.playlist.length - 1 :
                    id % state.playlist.length;

            console.log(`MediaComponent:: PreviousSongIndex=${state.currentSongIndex} NewSongIndex=${newIndex}.`)
            dispatch({ type: SET_CURRENT_SONG, data: newIndex });
        }
    }

    const setPlaylist = (name?: string) => {
        let songlist = new Array<SongDetail>();
        console.log("SetPlaylist::", state.songs);
        if (state.songs) {
            if (name) {            
                for (let song of state.songs) {
                    if (song.album === name) {
                        songlist.push(song);
                    }
                }
                console.log("New Playlist::", songlist);
                dispatch({ type: SET_PLAYLIST, data: songlist });
            } else {
                dispatch({ type: SET_PLAYLIST, data: state.songs });
            }
        }
    }

    const handleSongEnd = () => {
        if (!state.songs)
        {
            // If there are no songs, don't worry about it
            return;
        }
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

    // Onload effect
    useEffect( () => {
        console.log("API getting songs");
        SongApi.getSongs().then( (apiSongs) => {
            console.log("API setting songs");
            setSongsArray(apiSongs);
        });
    }, []);

    return (
        <mediaContext.Provider
            value={{
                currentSongIndex: state.currentSongIndex,
                songs: state.songs,
                playlist: state.playlist,
                repeat: state.repeat,
                random: state.random,
                audioPlaying: state.audioPlaying,
                videoShuffle: state.videoShuffle,
                audio: audio,
                setSongsArray,
                toggleMediaPlaying,
                toggleVideoShuffle,
                toggleRandom,
                toggleRepeat,
                setCurrentSong,
                setPlaylist,
            }}
        >
            <audio
                id="backgroundMusic"
                className="bgm"
                onEnded={handleSongEnd}
                ref={audio}
                preload="auto"
                src={state.playlist && state.playlist.length > 0 && state.currentSongIndex >= 0 ? state.playlist[state.currentSongIndex].url : ""}
                autoPlay={state.audioPlaying}
                muted={false}
            />            
            <MediaContainer />
            {props.children}
        </mediaContext.Provider>
    )
}

export default MediaComponent