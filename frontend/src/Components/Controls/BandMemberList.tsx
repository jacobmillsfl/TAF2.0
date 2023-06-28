
export type BandMember = {
    imgUrl: string,
    name: string,
    text: string
}

type BandMemberProps = {
    members: Array<BandMember>
}

export const BandMemberList: React.FC<BandMemberProps> = ({ members }) => {
    function generateMemberImage(member: BandMember) {
        return (
            <div>
                <img style={BandListImgStyle} src={process.env.PUBLIC_URL + "/img/photos/" + member.imgUrl} />
            </div>
        )
    }

    function generateMemberInfo(member: BandMember) {
        return (
            <div style={BandListTextStyle}>
                <p style={BandMemberNameStyle}>{member.name}</p>
                <hr />
                <p style={BandMemberTextStyle}>{member.text}</p>
            </div>
        )
    }

    function generateInnerContent(member: BandMember, key: number) {
        const position = key % 2;

        if (position == 0) {
            return (
                <span key={key} className="" style={BandListSpanStyle}>
                    {generateMemberImage(member)}
                    {generateMemberInfo(member)}
                </span>
            )
        } else {
            return (
                <span key={key} className="" style={BandListSpanStyle}>
                    {generateMemberInfo(member)}
                    {generateMemberImage(member)}
                </span>
            )
        }
    }

    return (
        <div style={BandFrameStyle}>
            {
                members.map((member, key) => generateInnerContent(member, key))
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