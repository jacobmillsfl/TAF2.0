import React, { useState, useEffect, useRef, useContext } from 'react';
import mediaContext from "../../Contexts/Homepage/MediaContext";

function Footer() {
    const {
        currentSongIndex,
        songs,
    } = useContext(mediaContext);

    const [footerText, setfooterText] = useState("");

    useEffect( () => {
        if (songs && songs.length > 0) {
            setfooterText(songs[currentSongIndex].title);
        }
    }, [currentSongIndex, songs]);
    return (
        <div className="footerLayer">
            <div className="footerLayerBg">
                <a className="footerLayerAuthor" href="#">
                    { footerText }
                </a>
            </div>
        </div>
    )
}

export default Footer;