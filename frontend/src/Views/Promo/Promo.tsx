import ShadowBox from "../../Components/Controls/ShadowBox"
import { SocialList, SocialListing } from "../../Components/Controls/SocialList"
import AlbumTwoPromo from "../../Components/Content/AlbumTwoPromo"

export default function Promo() {

    const album2SocialList = new Array<SocialListing>(
        {
            hrefUrl: "https://open.spotify.com/album/2x6ud6V4iFkBWXer2wa6jJ",
            imgUrl: process.env.PUBLIC_URL + "/img/spotify.jpg",
            text: "Spotify"
        },
        {
            hrefUrl: "https://www.youtube.com/channel/UCsazgqlooNADQr14A7HQdFw",
            imgUrl: process.env.PUBLIC_URL + "/img/youtube.jpg",
            text: "YouTube"
        },
        {
            hrefUrl: "https://music.apple.com/us/album/taf/1545717073",
            imgUrl: process.env.PUBLIC_URL + "/img/itunes.jpg",
            text: "iTunes"
        },
        {
            hrefUrl: "https://music.apple.com/us/album/taf/1545717073",
            imgUrl: process.env.PUBLIC_URL + "/img/applemusic.jpg",
            text: "Apple Music"
        },
        {
            hrefUrl: "https://music.apple.com/us/album/taf/1545717073",
            imgUrl: process.env.PUBLIC_URL + "/img/soundcloud.jpg",
            text: "SoundCloud"
        },
    );

    return (
        <div style={PromoOuterStyle}>
            <div style={PromoInnerStyle}>
                <ShadowBox mode="top">
                    <AlbumTwoPromo />
                </ShadowBox>
                <SocialList listings={album2SocialList}></SocialList>
            </div>
        </div>
    );
}

const PromoOuterStyle = {
    "paddingBottom": "10vh"
}
const PromoInnerStyle = {
    /*"margin": "10% 20px 10px 20px",*/
    "display": "contents",
    /*"display": "flex",*/
    "justifyContent": "center",
    "lineHeight": "1.5rem",
}