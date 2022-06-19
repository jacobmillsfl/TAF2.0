import React, { useState, useEffect, useRef, useContext } from 'react'
import CyberBackground from "../../media/cyber_03.mp4";
import mediaContext from "../../Contexts/Homepage/MediaContext";
import getSongs from "../../Apis/SongApi";

function MediaContainer() {
    const {
        currentSongIndex,
        songs,
        repeat,
        random,
        audioPlaying,
        videoPlaying,
        setSongsArray,
        toggleMediaPlaying,
        toggleRandom,
        toggleRepeat,
        setCurrentSong,
        setPreviousSong,
        handleSongEnd,
    } = useContext(mediaContext)
    

    return (
        <div className="backgroundContainer">
            <video id="background" muted autoPlay loop>
                <source src={CyberBackground} type="video/mp4" />
            </video>
        </div>
    )
}

export default MediaContainer;