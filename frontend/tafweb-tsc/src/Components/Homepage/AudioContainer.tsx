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
    } = useContext(mediaContext)

    useEffect(() => {
        // console.log("AudioContainer useEffect::")
        // console.log({
        //     currentSongIndex,
        //     songs,
        //     audio,
        //     repeat,
        //     random,
        //     audioPlaying,
        //     videoPlaying
        // })
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