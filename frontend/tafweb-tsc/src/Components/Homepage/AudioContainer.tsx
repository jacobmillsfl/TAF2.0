import React, { useState, useEffect, useRef, useContext } from 'react'
import CyberBackground from "../../media/cyber_02.mp4";
import mediaContext from "../../Contexts/Homepage/MediaContext";
import { Table, ListGroup } from "reactstrap";
import AudioController from "./AudioController";

function AudioContainer() {
    const {
        currentSongIndex,
        songs,
        audio,
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

    const [songTitle, setSongTitle] = useState("TAFers.net");

    // self State
    // const [statevolum, setStateVolum] = useState(0.3)
    // const [dur, setDur] = useState(0)
    // const [currentTime, setCurrentTime] = useState(0)

    useEffect(() => {
        console.log("USING EFFECT")
        console.log(audio.current);
        console.log({
            currentSongIndex,
            songs,
            audio,
            repeat,
            random,
            audioPlaying,
            videoPlaying
        })

        setSongTitle(songs[currentSongIndex].title);
    })


    return (
        <div className="layer1">
            <div className="layer1Container">
                <AudioController />
            </div>
        </div>
    );
}

type cssProperties = Record<string | number, string & {}>

const musicPlayer: cssProperties = {
    color: "white",
    maxHeight: "600px",
    display: "inline-block",
    width: '100%',
    height: '100%',
    overflow: 'scroll',
    position: 'relative'
};


const musicPlayerBody: cssProperties = {
    overflowY: "auto",
    maxHeight: "575px",
    display: "inline-block",
};

const musicPlayerSong: cssProperties = {
    padding: "0px 10px 0px 10px"
}

export default AudioContainer;