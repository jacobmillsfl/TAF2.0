import ShadowBox from "../../Components/Controls/ShadowBox"
import AlbumTwoPromo from "../../Components/Content/AlbumTwoPromo"
import AlbumOnePromo from "../../Components/Content/AlbumOnePromo"

export default function Promo() {
    return (
        <div style={PromoOuterStyle}>
            <div style={PromoInnerStyle}>
                <ShadowBox mode="top">
                    <AlbumTwoPromo />
                    <hr style={{"color":"white", "margin": "1em"}}></hr>
                    <AlbumOnePromo />
                </ShadowBox>
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