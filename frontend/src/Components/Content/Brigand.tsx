export default function Brigand() {
  return (
      <>
          <div style={AlbumNameAlignStyle}>
              <div style={AlbumNameStyle} translate="no">
                  Brigand Album Name
              </div>
              <div style={AlbumNameSpacingStyle} translate="no">
              </div>
          </div>
          <div>
              <img className="artCover hyperShadow pointer" style={AlbumArtStyle} src={process.env.PUBLIC_URL + "/img/TafAlbumCover.png"} />
          </div>
          <div style={AlbumAboutParagraphStyle}>
              <div style={AlbumAboutContentsStyle} translate="no">
                  Brigand Album paragraph Text
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
