import React from "react"

export type Album = {
    name: string,
    imgUrl: string,
    description: string
}

type AlbumProps = {
    albums: Array<Album>
}

export const AlbumComponent: React.FC<AlbumProps> = ({ albums }) => {

    // this is former code. Leaving in for documentation.
    // export default function AlbumComponent({ albums }: AlbumProps) {
    // export default function AlbumComponent({ albums }: { albums: Array<Album> }) {
    function generateInnerContent(album: Album) {
        return (
            <>
                <div style={AlbumNameAlignStyle}>
                    <div style={AlbumNameStyle} translate="no">{album.name}
                    </div>
                    <div style={AlbumNameSpacingStyle} translate="no">
                    </div>
                </div>
                <div>
                    <img className="artCover hyperShadow pointer" style={AlbumArtStyle} src={process.env.PUBLIC_URL + album.imgUrl} />
                </div>
                <div style={AlbumAboutParagraphStyle}>
                    <div style={AlbumAboutContentsStyle}> {album.description}
                    </div>
                </div>
                <hr style={HorizontalLineStyle}></hr>
            </>
        )
    }

    return (
        <div style={AlbumFrameStyle}>
            {
                albums.map(album => generateInnerContent(album))
            }
        </div>
    )
}

const AlbumFrameStyle = {
    "maxWidth": "6000px",
    "textAlign": "center" as const,
    "margin": "auto"
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
const AlbumTwoStyle = {
    "color": "white",
    "margin": "1em"
}
const AlbumNameAlignStyle = {
    "textAlign": "center" as const
}
const AlbumNameStyle = {
    "fontFamily": "Audiowide",
    "fontSize": "25pt",
    "lineHeight": "1.25em",
    "color": "white"
}
const AlbumNameSpacingStyle = {
    "marginTop": "25px",
    "fontSize": "14pt",
    "fontWeight": "400",
    "color": "white"
}
const AlbumArtStyle = {
    "maxWidth": "50vw",
    "maxHeight": "50vh",
    "display": "block",
    "marginLeft": "auto",
    "marginRight": "auto",
    "paddingTop": "20px"
}
const AlbumAboutParagraphStyle = {
    "textAlign": "center" as const,
    "maxWidth": "600px",
    "margin": "auto"
}
const AlbumAboutContentsStyle = {
    "marginTop": "24px",
    "fontSize": "14pt",
    "fontWeight": "400",
    "color": "white"
}
const HorizontalLineStyle = {
    "color": "white",
    "margin": "1em"
}
