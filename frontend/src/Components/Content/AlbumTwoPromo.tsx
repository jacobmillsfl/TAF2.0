export default function AlbumTwoPromo() {
    return (
        <>
            <div style={{ "textAlign": "center" }}>
                <div style={{"fontFamily": "Audiowide", "fontSize": "25pt", "lineHeight": "1.25em", "color": "white" }} translate="no">
                    Coming soon!
                </div>
                <div style={{ "marginTop": "25px", "fontSize": "14pt", "fontWeight": "400", "color": "white" }} translate="no">
                    Soul on Fire by The Ambient Funk
                </div>
            </div>
            <div>
                <img className="artCover hyperShadow pointer" style={{ "maxWidth": "50vw", "maxHeight": "50vh", "display": "block", "marginLeft": "auto", "marginRight": "auto", "paddingTop": "20px" }} src={process.env.PUBLIC_URL + "/img/soulonfire.png"} />
            </div>
            <div style={{ "textAlign": "center", "maxWidth": "600px", "margin": "auto" }}>
                <div style={{ "marginTop": "24px", "fontSize": "14pt", "fontWeight": "400", "color": "white" }} translate="no">
                    The Ambient Funk yada yada.
                </div>
            </div>
        </>
    )
}

const ShadowBoxOuterStyle = {
    "backgroundColor": "#000000a8",
    "borderColor": "white",
    "borderRadius": "0 0 2em 2em",
    "minHeight": "40h",
    "minWidth": "40vw",
    "paddingTop": "2em"
}
