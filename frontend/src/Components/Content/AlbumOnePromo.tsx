export default function AlbumOnePromo() {
    return (
        <>
            <div style={{ "textAlign": "center" }}>
                <div style={{"fontFamily": "Audiowide", "fontSize": "25pt", "lineHeight": "1.25em", "color": "white" }} translate="no">
                    TAF
                </div>
                <div style={{ "marginTop": "25px", "fontSize": "14pt", "fontWeight": "400", "color": "white" }} translate="no">
                </div>
            </div>
            <div>
                <img className="artCover hyperShadow pointer" style={{ "maxWidth": "50vw", "maxHeight": "50vh", "display": "block", "marginLeft": "auto", "marginRight": "auto", "paddingTop": "20px" }} src={process.env.PUBLIC_URL + "/img/TafAlbumCover.png"} />
            </div>
            <div style={{ "textAlign": "center", "maxWidth": "600px", "margin": "auto" }}>
                <div style={{ "marginTop": "24px", "fontSize": "14pt", "fontWeight": "400", "color": "white" }} translate="no">
                    TAF is the first album by The Ambient Funk. It started as an electronica project and evolved into a sound that can best be described as "Ambient Funk." This album lays the roots for The Ambient Funk's style, from mesmerizing synthesizers to screaming guitars, you'll be taken on a journey through the TAF universe.
                </div>
            </div>
        </>
    )
}
