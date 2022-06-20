import React, { useState, useEffect, useRef, useContext } from 'react'
import mediaContext from "../../Contexts/Homepage/MediaContext";
import getSongs from "../../Utilities/SongApi";
import VideoUtility from "../../Utilities/VideoUtility";
import VideoDetail from "../../Models/VideoDetail";
import cyberBackground from "../../media/cyber_01.mp4";

function MediaContainer() {
    const {
        currentSongIndex,
        songs,
        repeat,
        random,
        audioPlaying,
        videoPlaying,
    } = useContext(mediaContext)

    let defaultVideo = { name: "default", video: cyberBackground, playspeed: 1 };
    const [currentVideo, setCurrentVideo] = useState<VideoDetail>(defaultVideo);
    const videos = VideoUtility.getVideos();

    useEffect(() => {
        const index = Math.floor(Math.random() * videos.length);
        setCurrentVideo(videos[index]);
    }, [currentSongIndex])

    return (
        <div className="backgroundContainer">
            <video id="background" muted autoPlay loop src={currentVideo.video}>
                <source type="video/mp4" />
            </video>
        </div>
    )
}

export default MediaContainer;