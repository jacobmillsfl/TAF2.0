import React, { useState, useEffect, useContext } from 'react'
import mediaContext from "../../Contexts/Homepage/MediaContext";
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

    let defaultVideo = { name: "default", video: cyberBackground, playbackRate: 1 };
    const [currentVideo, setCurrentVideo] = useState<VideoDetail>(defaultVideo);
    const videos = VideoUtility.getVideos();

    useEffect(() => {
        if (videoPlaying) {
            const index = Math.floor(Math.random() * videos.length);
            setCurrentVideo(videos[index]);
        }
    }, [currentSongIndex])

    function videoChanged() {
        let videoElement = document.querySelector("#background") as HTMLVideoElement;
        videoElement.playbackRate = currentVideo.playbackRate;
    }

    return (
        <div className="backgroundContainer">
            <video id="background" muted autoPlay loop src={currentVideo.video} onLoadedData={videoChanged} >
                <source type="video/mp4" />
            </video>
        </div>
    )
}

export default MediaContainer;