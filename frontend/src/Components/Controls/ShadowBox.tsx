import { ReactNode } from "react"

type ShadowBoxProps = {
    children: ReactNode
}

export default function ShadowBox({ children }: ShadowBoxProps) {

    return (
        <div className="shadowBox">
            <div style={ShadowBoxOuterStyle}>
                <div style={ShadowBoxInnerStyle}>
                    {children}
                </div>
            </div>
        </div>
    )
}

const ShadowBoxOuterStyle = {
    "backgroundColor": "#000000a8",
    "borderColor": "white",
    "borderRadius": "0 0 2em 2em",
    "minHeight": "40h",
    "minWidth": "40vw",
    "paddingTop": "2em"
}

const ShadowBoxInnerStyle = {
    "margin": "5em",
    "paddingBottom": "5em"
}