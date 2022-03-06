import React from 'react'

const Playbar = ({ children }) => (
  <div
    className="Playbar"
    style={{
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "100%",
      height: "75px",
      background: "#282828",
      zIndex: "99",
      padding: "20px",
    }}
  >
    {children}
  </div>
)

export default Playbar