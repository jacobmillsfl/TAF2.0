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
        setPreviousSong,
        handleSongEnd,
    } = useContext(mediaContext)

    const [currentSongDetail, setCurrentSongDetail] = useState<SongDetail | null>(null);
    const [seekDuration, setSeekDuration] = useState(0);
    const [seekValue, setSeekValue] = useState(0);
    // const [statevolum, setStateVolum] = useState(0.3)


    useEffect(() => {
        // Add a listener to update the song duration bar
        if (audio.current) {
            audio.current.ontimeupdate = ((timeupdateEvent: Event) => {
                setSeekValue((timeupdateEvent.target as HTMLAudioElement).currentTime);
            });
        }

        // Log the current state
        console.log("USING EFFECT INITIAL",{
            currentSongIndex,
            songs,
            audio,
            repeat,
            random,
            audioPlaying,
            videoPlaying
        })

        // Update state
        setCurrentSongDetail(songs[currentSongIndex]);
        setSeekDuration(Math.floor(audio.current.duration) ?? 0);
    }, [])

    function changeSong(index: number) {
        console.log("SETTING SONG")
        setCurrentSong(index);
        setCurrentSongDetail(songs[index]);
        //toggleMediaPlaying(true);
    }

    function getAlbumArt(song: SongDetail | null) {
        return song?.albumArt ?? tafAlbum;
    }

    function togglePlay() {
        toggleMediaPlaying();
    }

    function skipTrack() {
        setCurrentSong(currentSongIndex + 1);
    }

    function backTrack() {
        setCurrentSong(currentSongIndex - 1);
    }

    function getPlayIcon() {
        if (!audioPlaying) {
            return (<td><input type="checkbox" id="play" title="Play" onClick={() => togglePlay()} /><label className="play" htmlFor="play"></label></td>);
        } else {
            return (<td><input type="checkbox" id="play" title="Play" onClick={() => togglePlay()} checked /><label className="play" htmlFor="play"></label></td>);
        }
    }

    function handleSeekInput(target: EventTarget) {
        console.log("SEEK CHANGED")
        const timeSeconds = Number((target as HTMLInputElement).value);
        setSeekValue(timeSeconds);
        audio.current.currentTime = timeSeconds;
    }

    return (
        <>
            <article className="screen" style={{ backgroundImage: `url(${CyberBackground})` }} >
                <input type="checkbox" value="None" id="magicButton" name="check" />
                <label className="main" htmlFor="magicButton"></label>

                <img className="coverImage" src={getAlbumArt(currentSongDetail)}></img>
                <div className="bodyPlayer"></div>

                <table className="list songlist">
                    {
                        songs.map((song, index) => (
                            <tr className="song songlistSong" onClick={() => changeSong(index)} >
                                <td className="nr" ><h5>{index + 1}</h5></td>
                                <td className="title"><h6>{song.title}</h6></td>
                            </tr>
                        ))

                    }
                </table>

                <div className="shadow">
                </div>

                <div className="bar">
                    <input
                        type="range"
                        step="any"
                        value={seekValue}
                        min="0"
                        max={seekDuration}
                        onInput={(event) => handleSeekInput(event.target)}
                        onChange={(event) => handleSeekInput(event.target)}
                        style={{ "width": "100%" }}
                    />
                </div>

                <div className="info">
                    <h4>{currentSongDetail?.title}</h4>
                    <h3>{currentSongDetail?.artist}</h3>
                </div>


                <table className="player">
                    <td><input type="checkbox" id="shuffle" /><label className="shuffle" htmlFor="shuffle"></label></td>
                    <td><input type="checkbox" id="backward" onClick={() => backTrack()} /><label className="backward" htmlFor="backward"></label></td>
                    {getPlayIcon()}
                    <td><input type="checkbox" id="forward" onClick={() => skipTrack()} /><label className="forward" htmlFor="forward"></label></td>
                    <td><input type="checkbox" id="repeat" /><label className="repeat" htmlFor="repeat"></label></td>
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