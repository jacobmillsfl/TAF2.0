import ShadowBox from "../../Components/Controls/ShadowBox";
import { BandMember, BandMemberList } from "../../Components/Controls/BandMemberList";
import { SocialList, SocialListing } from "../../Components/Controls/SocialList";

export default function About() {
    const bandMembers = new Array<BandMember>(
        {
            name: "Brad",
            imgUrl: "Brad.jpg",
            text: "Guitar, Keys",
        },
        {
            name: "Jacob",
            imgUrl: "Jacob.png",
            text: "Guitar, Bass, Keys",
        },
        {
            name: "Clayton",
            imgUrl: "Clayton.jpg",
            text: "Percussion",
        },
        {
            name: "Thomas",
            imgUrl: "Thomas.jpg",
            text: "Vocals",
        },
        {
            name: "Rick",
            imgUrl: "Rick.png",
            text: "Vocals",
        },
    );

    const emailList = new Array<SocialListing>(
        {
            hrefUrl: "mailto:theambientfunk@gmail.com",
            imgUrl: process.env.PUBLIC_URL + "/img/socials/email.png",
            text: "theambientfunk@gmail.com"
        },
    );

    return (
        <div style={PaddingBottomStyle}>
            <ShadowBox mode="top">
                <div style={AboutBodyStyle}>
                    <h2>
                        About Us
                    </h2>
                    <p style={AboutContentStyle}>
                        The Ambient Funk is an alternative rock band combining elements of jazz, funk, blues, rock, and electronica. Founded in 2018, the sounds of The Ambient Funk take listeners on a passively engaging journey through evolving soundscapes.
                        The Ambient Funk released their debut album "TAF" in 2020 and is expected to release a second album in 2023.
                    </p>
                </div>
            </ShadowBox>
            <BandMemberList members={bandMembers} />
            <div style={EmailStyle}>
                <SocialList listings={emailList} heading="Email"></SocialList>
            </div>
        </div>

    );
}

const EmailStyle = {
    "paddingTop": "2em"
}

const AboutBodyStyle = {
    "maxWidth": "600px",
    "textAlign": "center" as const,
    "margin": "auto",
    "marginBotton": "1em"
}

const AboutContentStyle = {
    "color": "white",
    "paddingTop": "2em",
    "fontSize": "22px",
    "fontFamily": "Ariel",
    "textAlign": "justify" as const,
}

const PaddingBottomStyle = {
    paddingBottom: "8em"
}