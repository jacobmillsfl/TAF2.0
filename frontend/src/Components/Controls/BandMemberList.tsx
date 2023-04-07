
export type BandMember = {
    imgUrl: string,
    name: string,
    text: string,
    position: "left" | "right"
}

export function BandMemberList({ members }: { members: Array<BandMember>}) {

    function generateInnerContent(member: BandMember) {
        if (member.position == "left") {
            return (
                <span className="" style={BandListSpanStyle}>
                    <div>
                        <img style={BandListImgStyle} src={process.env.PUBLIC_URL + "/img/photos/" + member.imgUrl} />
                    </div>
                    <div style={BandListTextStyle}>
                        <p style={BandMemberNameStyle}>{member.name}</p>
                        <hr />
                        <p style={BandMemberTextStyle}>{member.text}</p>
                    </div>
                </span>
            )
        } else {
            return (
                <span className="" style={BandListSpanStyle}>
                    <div style={BandListTextStyle}>
                        <p style={BandMemberNameStyle}>{member.name}</p>
                        <hr />
                        <p style={BandMemberTextStyle}>{member.text}</p>
                    </div>
                    <div>
                        <img style={BandListImgStyle} src={process.env.PUBLIC_URL + "/img/photos/" + member.imgUrl} />
                    </div>
                </span>
            )
        }
    }

    return (
        <div style={BandFrameStyle}>
            {
                members.map( member => generateInnerContent(member) )
            }
        </div>
    )
}

const BandFrameStyle = {
    "maxWidth": "600px",
    "textAlign": "center" as const,
    "margin": "auto"
}

// const SocialListAttributeStyle = {
//     "textDecoration": "none",
//     "color": "inherit",
//     "margin": "1em"
// }

const BandListSpanStyle = {
    "display": "flex",
    "paddingTop": "1em"
}

const BandListImgStyle = {
    "display": "block",
    "height": "150px",
    "width": "100%",
    "boxShadow": "0px 0px 5px #000000"
}

const BandListTextStyle = {
    "flex": "1",
    "padding": "20px",
    "color": "white",
    "background": "rgb(0 0 0 / 50%)"
}

const BandMemberNameStyle = {
    "fontFamily": "Audiowide"
}

const BandMemberTextStyle = {
    "fontStyle": "Italic"
}