import React from "react"
import { ContentContainer } from "../ContentContainer/ContentContainer"
import Auth from "../../Utilities/Auth"


export const LogOutComponent: React.FC = () => {
  Auth.setAuthToken("");
  window.location.href = "/login";

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