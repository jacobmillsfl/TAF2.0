import ShadowBox from "../../Components/Controls/ShadowBox";

export default function Videos()
{
    return (
        <div style={{paddingBottom:"5em"}}>
            <ShadowBox mode="mid">
                <div style={AboutBodyStyle}>
                    <h2>
                        Featured YouTube Content
                    </h2>
                    <br />
                    <br />
                    <iframe width="100%" height="300px" src="https://www.youtube.com/embed/f6k2nsf9n9A?start=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <br />
                    <br />
                    <iframe width="100%" height="300px" src="https://www.youtube.com/embed/B5hRhu7phUQ?start=12" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <br />
                    <br />
                    <iframe width="100%" height="300px" src="https://www.youtube.com/embed/nifw3O0PkR4?start=8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
