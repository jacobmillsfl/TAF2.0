import React, { useState, useEffect, useRef, useContext } from 'react'
import mediaContext from "../../Contexts/Homepage/MediaContext";
import { Table, ListGroup } from "reactstrap";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import SongDetail from "../../Models/SongDetail";
import tafAlbum from "../../media/tafalbum.png";
import CyberBackground from "../../media/cyber_03.mp4";

function AudioController() {
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
    } = useContext(mediaContext)

    const [currentSongDetail, setCurrentSongDetail] = useState<SongDetail | null>(null);
    const [seekDuration, setSeekDuration] = useState(0);
    const [seekValue, setSeekValue] = useState(0);
    // const [statevolum, setStateVolum] = useState(0.3)

    useEffect(() => {        
        if (audio.current) {

            // Add a listener to update the song duration bar
            audio.current.ontimeupdate = ((timeupdateEvent: Event) => {
                setSeekValue((timeupdateEvent.target as HTMLAudioElement).currentTime);
            });

            // Add a listener for when a new song is loaded
            audio.current.onloadeddata = (() => {
                setSeekDuration(audio.current!.duration);
            })
        }

        // Set initial song info
        setCurrentSongDetail(songs[currentSongIndex]);
    }, [])

    // Update song details when the song changes
    useEffect(() => {
        setCurrentSongDetail(songs[currentSongIndex]);
    }, [currentSongIndex])

    function changeSong(index: number) {
        if (random) {
            const newIndex = Math.floor(Math.random() * songs.length)
            console.log("new random index: ", newIndex);
            setCurrentSong(newIndex);
        } else {
            setCurrentSong(index);
        }

        toggleMediaPlaying(true);
    }

    function getAlbumArt(song: SongDetail | null) {
        return song?.albumArt ?? tafAlbum;
    }

    function togglePlay() {
        toggleMediaPlaying();
    }

    function getPlayIcon() {
        return (<td><input type="checkbox" id="play" title="Play" onChange={() => togglePlay()} checked={audioPlaying} /><label className="play" htmlFor="play"></label></td>);
    }

    function handleSeekInput(target: EventTarget) {
        const timeSeconds = Number((target as HTMLInputElement).value);
        //setSeekValue(timeSeconds);
        audio.current!.currentTime = timeSeconds;
    }

    function handleBackward() {
        if (seekValue < 5) {
            changeSong(currentSongIndex - 1);
        } else {
            // Restart current song
            audio.current!.currentTime = 0;
        }
    }

    return (
        <>
            <article className="screen" style={{ backgroundImage: `url(${CyberBackground})` }} >
                <input type="checkbox" value="None" id="magicButton" name="check" />
                <label className="main" htmlFor="magicButton"></label>

                <img className="coverImage" src={getAlbumArt(currentSongDetail)}></img>
                <div className="bodyPlayer"></div>

                <table className="list songlist">
                    <tbody>
                        {
                            songs.map((song, index) => (
                                <tr key={index} className="song songlistSong" onClick={() => changeSong(index)} >
                                    <td className="nr" ><h5>{index + 1}</h5></td>
                                    <td className="title"><h6>{song.title}</h6></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <div className="shadow">
                </div>

                <div className="bar">
                    <input
                        id="AudioSeekBar"
                        type="range"
                        step="any"
                        value={seekValue}
                        min="0"
                        max={seekDuration}
                        onChange={(event) => handleSeekInput(event.target)}
                        style={{ "width": "100%" }}
                    />
                </div>

                <div className="info">
                    <h4>{currentSongDetail?.title}</h4>
                    <h3>{currentSongDetail?.artist}</h3>
                </div>


                <table className="player">
                    <tbody>
                        <tr>
                            <td><input type="checkbox" id="shuffle" /><label className="shuffle" htmlFor="shuffle" onClick={() => toggleRandom()}></label></td>
                            <td><input type="checkbox" id="backward" onClick={handleBackward} /><label className="backward" htmlFor="backward"></label></td>
                            {getPlayIcon()}
                            <td><input type="checkbox" id="forward" onClick={() => changeSong(currentSongIndex + 1)} /><label className="forward" htmlFor="forward"></label></td>
                            <td><input type="checkbox" id="repeat" /><label className="repeat" htmlFor="repeat" onClick={() => toggleRepeat()}></label></td>
                        </tr>
                    </tbody>
                </table>

                <table className="footer">
                </table>

                <div className="current"><h2>{currentSongDetail?.title}</h2></div>

            </article>
        </>
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



export default AudioController;