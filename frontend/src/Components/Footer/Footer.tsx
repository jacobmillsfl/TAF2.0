import { useState, useEffect, useContext } from 'react';
import mediaContext from "../../Contexts/Homepage/MediaContext";
import {
	Row,
    Col
} from 'reactstrap';

function Footer() {
    const {
        currentSongIndex,
        songs,
        audio,
        random,
        audioPlaying,
        videoShuffle,
        toggleVideoShuffle,
        toggleMediaPlaying,
        toggleRandom,
        toggleRepeat,
        setCurrentSong,
    } = useContext(mediaContext)

    const [artistText, setArtistText] = useState("");
    const [songText, setSongText] = useState("");

    useEffect( () => {
        if (songs && songs.length > 0) {
            setSongText(songs[currentSongIndex].title);
            setArtistText(songs[currentSongIndex].artist);
        }
    }, [currentSongIndex, songs]);
    return (
        <div className="footerLayer">
            <div className="footerLayerBg">
                <div className="footerLayerAuthor">
                    <Row>
                        <Col className="col-md-3 d-none d-md-block" style={{fontFamily: "izayoi"}}>{artistText}</Col>
                        <Col className="col-md-6 col-sm-12" style={{fontSize: "26px", lineHeight: "initial", letterSpacing: "25px"}}>
                            <input type="checkbox" id="shuffle" /><label className="shuffle" htmlFor="shuffle" onClick={() => toggleRandom()}></label>
                            <input type="checkbox" id="backward" onClick={() => setCurrentSong(currentSongIndex - 1)} /><label className="backward" htmlFor="backward"></label>
                            <input type="checkbox" id="play" title="Play" onChange={() => toggleMediaPlaying()} checked={audioPlaying} /><label className="play" htmlFor="play"></label>
                            <input type="checkbox" id="forward" onClick={() => setCurrentSong(currentSongIndex + 1)} /><label className="forward" htmlFor="forward"></label>
                            <input type="checkbox" id="repeat" /><label className="repeat" htmlFor="repeat" onClick={() => toggleRepeat()}></label>
                        </Col>
                        <Col className="col-md-3 d-none d-md-block" style={{fontFamily: "izayoi"}}>{songText}</Col>
                    </Row>
            
                </div>
            </div>
        </div>
    )
}

export default Footer;