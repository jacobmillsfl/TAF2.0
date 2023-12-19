import React from "react"
import { ContentContainer } from "../ContentContainer/ContentContainer"


export const LogOutComponent: React.FC = () => {

  return (
    <ContentContainer>
      <div style={FrameStyle}>
        
      </div>
    </ContentContainer>
  )
}


const FrameStyle = {
  "maxWidth": "80vw",
  "textAlign": "center" as const,
  "margin": "auto",
}