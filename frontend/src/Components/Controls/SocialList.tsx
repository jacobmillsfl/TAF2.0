
export type SocialListing = {
    hrefUrl: string,
    imgUrl: string,
    text: string
}

export function SocialList({ listings }: { listings: Array<SocialListing> }) {
    return (
        <div style={SocialListStyle}>
            <h2 style={SocialHeadingStyle}>
                Social Media Links
            </h2>
            {
                listings.map( listing =>
                    <a target="_blank" href={listing.hrefUrl} style={SocialListAttributeStyle}>
                        <span className="hyperDspLink hyperShadow">
                            <div style={SocialListSpanStyle}>
                                <div>
                                    <img style={SocialListImgStyle} src={listing.imgUrl} />
                                </div>
                                <div style={SocialListTextStyle}>
                                    {listing.text}
                                </div>
                                <div style={SocialListIconStyle}>
                                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                                </div>
                            </div>
                        </span>
                    </a>
                )
            }
        </div>
    )
}

const SocialHeadingStyle = {
    "textShadow": "3px 2px black",
    "background": "#0000008c",
    "borderRadius": "5px"
}

const SocialListStyle = {
    "maxWidth": "600px",
    "textAlign": "center" as const,
    "margin": "auto"
}

const SocialListAttributeStyle = {
    "textDecoration": "none",
    "color": "inherit",
    "margin": "1em"
}

const SocialListSpanStyle = {
    "display": "flex",
    "alignItems": "center"
}

const SocialListImgStyle = {
    "display": "block",
    "height": "62px",
    "boxShadow": "0px 0px 5px #000000"
}

const SocialListTextStyle = {
    "flex": "1",
    "padding": "20px",
    "color": "white",
    "background": "rgb(0 0 0 / 50%)"
}

const SocialListIconStyle = {
    "padding": "20px",
    "color": "white",
    "background": "rgb(102 102 102 / 50%)",
    "borderRadius": "0px 5px 5px 0px"
    
}