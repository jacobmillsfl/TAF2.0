import ShadowBox from "../../Components/Controls/ShadowBox";
import { BandMember, BandMemberList } from "../../Components/Controls/BandMemberList";

export default function About()
{
    const bandMembers = new Array<BandMember>(
        {
            name: "Brad",
            imgUrl: "Brad.jpg",
            text: "Guitar, Keys",
            position: "left"
        }, 
        {
            name: "Jacob",
            imgUrl: "Jacob.png",
            text: "Guitar, Bass, Keys",
            position: "right"
        }, 
        {
            name: "Clayton",
            imgUrl: "Clayton.jpg",
            text: "Percussion",
            position: "left"
        }, 
        {
            name: "Thomas",
            imgUrl: "Thomas.jpg",
            text: "Vocals",
            position: "right"
        }, 
        {
            name: "Rick",
            imgUrl: "Rick.png",
            text: "Vocals",
            position: "left"
        }, 
    );

    return (
        <div style={{paddingBottom:"5em"}}>
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
        </div>
        
    );
}

const AboutBodyStyle = {
    "maxWidth": "600px",
    "textAlign": "center" as const,
    "margin": "auto",
    "marginBotton":"1em"
}

const AboutContentStyle = {
    "color": "white",
    "paddingTop": "2em",
    "fontSize": "22px",
    "fontFamily": "Ariel",
    "textAlign": "justify" as const,
}