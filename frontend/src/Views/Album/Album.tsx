import ShadowBox from "../../Components/Controls/ShadowBox";
import { ContentContainer } from "../ContentContainer/ContentContainer";

export type Album = {
    name: string,
    imgUrl: string,
    description: string
}

export const AlbumComponent: React.FC = () => {
    const albums = new Array<Album>(
        {
            name: "Coming Soon!",
            imgUrl: "/img/soultransparent.png",
            description: "Soul on Fire is the second studio length album by The Ambient Funk. Titled after a featured track, this album represents a self transformation, burning past internal barriers and rising from the ashes. In this release, The Ambient Funk is pushing boundaries in the realm of ambient, progressive, rock, funk, and electronica music. This album also features multiple guest artists."
        },
        {
            name: "TAF",
            imgUrl: "/img/TafAlbumCover.png",
            description: "The Ambient Funk's debut album 'TAF' is a soulful and introspective exploration of the human condition. Drawing on a range of musical influences, the album weaves intricate rhythms and dynamic instrumental arrangements into a rich tapestry of sound. This album lays the roots for The Ambient Funk's style, from mesmerizing synthesizers to screaming guitars, you'll be taken on a journey through the TAF universe."
        },
        {
            name: "The Vault",
            imgUrl: "/img/the_vault.jpg",
            description: "The Vault is a collection of previously unreleased Brigand material. It includes 6 of the first songs Brigand ever wrote, recorded in various settings from live performances to radio edits. The Vault captures the raw essense and heavy sounds of the early Brigand days."
        },
    )

    function generateInnerContent(album: Album) {
        return (
            <div>
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
            </div>
        )
    }

    return (
        <ContentContainer>
            <ShadowBox mode="top">
                <div style={AlbumFrameStyle}>
                    {
                        albums.map(album => generateInnerContent(album))
                    }
                </div>
            </ShadowBox>
        </ContentContainer>
    )
}



const AlbumFrameStyle = {
    "maxWidth": "6000px",
    "textAlign": "center" as const,
    "margin": "auto"
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
