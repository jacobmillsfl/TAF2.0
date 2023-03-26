export default function AlbumTwoPromo() {
    return (
        <>
            <div style={{ "textAlign": "center" }}>
                <div style={{"fontFamily": "Audiowide", "fontSize": "25pt", "lineHeight": "1.25em", "color": "white" }} translate="no">
                    Soul on Fire - Coming soon!
                </div>
                <div style={{ "marginTop": "25px", "fontSize": "14pt", "fontWeight": "400", "color": "white" }} translate="no">
                </div>
            </div>
            <div>
                <img className="artCover hyperShadow pointer" style={{ "maxWidth": "50vw", "maxHeight": "50vh", "display": "block", "marginLeft": "auto", "marginRight": "auto", "paddingTop": "20px" }} src={process.env.PUBLIC_URL + "/img/soulonfire.png"} />
            </div>
            <div style={{ "textAlign": "center", "maxWidth": "600px", "margin": "auto" }}>
                <div style={{ "marginTop": "24px", "fontSize": "14pt", "fontWeight": "400", "color": "white" }} translate="no">
                Soul on Fire is the second studio length album by The Ambient Funk. Titled after a featured track, this album represents a self transformation, burning past internal barriers and rising from the ashes. In this release, The Ambient Funk is pushing boundaries in the realm of ambient, progressive, rock, funk, and electronica music. This album also features multiple guest artists.
                </div>
            </div>
        </>
    )
}
