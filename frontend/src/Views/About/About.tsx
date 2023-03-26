import ShadowBox from "../../Components/Controls/ShadowBox";

export default function About()
{
    return (
        <div style={{paddingBottom:"5em"}}>
            <ShadowBox mode="mid">
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