import { ReactNode } from "react"


type ShadowBoxMode = "top" | "mid" | "bot" | "form";

type ShadowBoxProps = {
    children: ReactNode,
    mode: ShadowBoxMode
}


export default function ShadowBox({ children, mode }: ShadowBoxProps) {
    let boxStyle: React.CSSProperties | undefined = undefined;

    if (mode === "top") {
        boxStyle = ShadowBoxTopStyle;
    } else if (mode === "mid") {
        boxStyle = ShadowBoxMidStyle;
    } else if (mode === "bot") {
        // No bot style yet
    } else if (mode === "form") {
        boxStyle = ShadowBoxFormStyle;
    }

    return (
        <div className="shadowBox">
            <div style={boxStyle}>
                <div style={ShadowBoxInnerStyle}>
                    {children}
                </div>
            </div>
        </div>
    )
}

const ShadowBoxTopStyle = {
    "backgroundColor": "#000000a8",
    "borderColor": "white",
    /*"borderRadius": "0 0 2em 2em",*/
    "minHeight": "40h",
    "minWidth": "40vw",
    "paddingTop": "2em"
}

const ShadowBoxMidStyle = {
    "backgroundColor": "#000000a8",
    "borderColor": "white",
    "borderRadius": "2em 2em 2em 2em",
    "margin": "2em",
    "minHeight": "40h",
    "minWidth": "40vw",
    "paddingTop": "2em"
}

const ShadowBoxInnerStyle = {
    "margin": "2em",
    "paddingBottom": "1em"
}

const ShadowBoxFormStyle = {
    "backgroundColor": "#000000a8",
    "borderRadius": "5px",
    "marginLeft": "auto",
    "marginRight": "auto",
    "marginTop": "100px",
    "paddingBottom": "1em",
    "paddingTop": "2em",
    "maxWidth": "600px",
    "color": "#FFF"
}