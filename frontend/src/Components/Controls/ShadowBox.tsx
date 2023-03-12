import { ReactNode } from "react"


type ShadowBoxMode = "top" | "mid" | "bot"

type ShadowBoxProps = {
    children: ReactNode,
    mode: ShadowBoxMode
}


export default function ShadowBox({ children, mode }: ShadowBoxProps) {

    
    // Default to top
    let boxStyle = ShadowBoxTopStyle;
    if (mode === "mid") {
        boxStyle = ShadowBoxMidStyle;
    } else if (mode === "bot") {
        // No bot style yet
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
    "paddingBottom": "5em"
}