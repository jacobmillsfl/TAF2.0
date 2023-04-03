export default function AlbumOnePromo() {
    return (
        <>
            <div style={AlbumNameAlignStyle}>
                <div style={AlbumNameStyle} translate="no">
                    TAF
                </div>
                <div style={AlbumNameSpacingStyle} translate="no">
                </div>
            </div>
            <div>
                <img className="artCover hyperShadow pointer" style={AlbumArtStyle} src={process.env.PUBLIC_URL + "/img/TafAlbumCover.png"} />
            </div>
            <div style={AlbumAboutParagraphStyle}>
                <div style={AlbumAboutContentsStyle} translate="no">
                    TAF is the first album by The Ambient Funk. It started as an electronica project and evolved into a sound that can best be described as "Ambient Funk." This album lays the roots for The Ambient Funk's style, from mesmerizing synthesizers to screaming guitars, you'll be taken on a journey through the TAF universe.
                </div>
            </div>
        </>
    )
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
