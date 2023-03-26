import './Homepage.css';


import { useState, useEffect, useContext } from 'react';
import mediaContext from "../../Contexts/Homepage/MediaContext";
import { Table, ListGroup } from "reactstrap";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { RiVideoFill, RiVideoLine } from "react-icons/ri";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { SongDetail } from "../../Models/SongDetail";
import tafAlbum from "../../media/tafalbum.png";
import CyberBackground from "../../media/cyber_03.mp4";

function HomePage() {
    const {
        currentSongIndex,
        songs,
        playlist,
        audio,
        random,
        audioPlaying,
        videoShuffle,
        toggleVideoShuffle,
        toggleMediaPlaying,
        toggleRandom,
        toggleRepeat,
        setCurrentSong,
        setPlaylist,
    } = useContext(mediaContext)

    const [currentSongDetail, setCurrentSongDetail] = useState<SongDetail | null>(null);
    const [seekDuration, setSeekDuration] = useState(0);
    const [seekValue, setSeekValue] = useState(0);

    /**
     * Onload event
     */
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
        setCurrentSongDetail({ title: "Loading", artist: "", url: "", albumArt: null, album: "", trackNumber: 0 });
        console.log("AudioController::useEffect::onload");
    }, [])

    /**
     * Triggers whenever the current song changes.
     */
    useEffect(() => {
        if (playlist)
        {
            setCurrentSongDetail(playlist[currentSongIndex]);
        }
        console.log("AudioController::useEffect::currentSongIndex");
    }, [currentSongIndex]);

    /**
     * Triggers whenever the list of songs changes
     */
    useEffect(() => {
        if (playlist) 
        {
            setCurrentSong(0);
            setCurrentSongDetail({ title: playlist[0].title, artist: playlist[0].artist, url: playlist[0].url, albumArt: playlist[0].albumArt, album: playlist[0].album, trackNumber: playlist[0].trackNumber });
        }
        console.log("AudioController::useEffect::songs");
    }, [playlist])

    /**
     * Triggers whenever the list of songs changes
     */
    useEffect(() => {
        if (songs) 
        {
            //setCurrentSongDetail(songs![currentSongIndex]);
            //setCurrentSong(0);
            setPlaylist();
        }
        console.log("AudioController::useEffect::songs");
    }, [songs])

    /**
     * CSS hack to re-style seek bar as the seek value changes
     */
    useEffect( () => {
        let target = document.querySelector("#AudioSeekBar") as HTMLInputElement;
        let relativeValue = Number(target.value) - Number(target.min);
        let relativeMax = Number(target.max) - Number(target.min)
        let value = relativeValue / relativeMax * 100;
        target.style.background = 'linear-gradient(to right, #0839b3 0%, #3767e1 ' + value + '%, #fff ' + value + '%, white 100%)'
    }, [seekValue]);


    /**
     * Get album art for the current song
     */
    function getAlbumArt(song: SongDetail | null) {
        return song?.albumArt ?? tafAlbum;
    }

    /**
     * Handle behavior for seekbar changes
     */
    function handleSeekInput(target: EventTarget) {
        const timeSeconds = Number((target as HTMLInputElement).value);
        audio.current!.currentTime = timeSeconds;
    }

    /**
     * Handle behavior for backward media navigation
     */
    function handleBackward() {
        if (seekValue < 5) {
            setCurrentSong(currentSongIndex - 1);
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
                            playlist?.map((song, index) => (
                                <tr key={index} className="song songlistSong" onClick={() => setCurrentSong(index)} >
                                    <td className="nr" ><h5>{index + 1}</h5></td>
                                    <td className="title"><h6>{song.title}</h6></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                {/* <div className="shadow">
                </div> */}

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


                {/* <table className="player">
                    <tbody>
                        <tr>
                            <td><input type="checkbox" id="shuffle" /><label className="shuffle" htmlFor="shuffle" onClick={() => toggleRandom()}></label></td>
                            <td><input type="checkbox" id="backward" onClick={handleBackward} /><label className="backward" htmlFor="backward"></label></td>
                            <td><input type="checkbox" id="play" title="Play" onChange={() => toggleMediaPlaying()} checked={audioPlaying} /><label className="play" htmlFor="play"></label></td>
                            <td><input type="checkbox" id="forward" onClick={() => setCurrentSong(currentSongIndex + 1)} /><label className="forward" htmlFor="forward"></label></td>
                            <td><input type="checkbox" id="repeat" /><label className="repeat" htmlFor="repeat" onClick={() => toggleRepeat()}></label></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><input type="checkbox" id="shuffleVideo" onChange={() => toggleVideoShuffle()} checked={!videoShuffle} /><label className="shuffleVideo" htmlFor="shuffleVideo"></label></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table> */}

                <table className="footer">
                </table>

                {/* <div className="current"><h3>{currentSongDetail?.title}</h3></div> */}

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



export default HomePage;