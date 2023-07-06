import React from "react"

type ContentContainerProps = {
    children: React.ReactNode
}

export const ContentContainer: React.FC<ContentContainerProps> = ({children}) => {
    return (
        <div style={ContentContainerStyle}>
            {children}
        </div>
    )
}

const ContentContainerStyle = {
    "marginBottom": "6em"
}