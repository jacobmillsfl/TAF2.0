import React from 'react'

const Topbar = ({ children }) => (
  <div
    className="Topbar"
    style={topbarStyle}
  >
    {children}
    topbar
  </div>
)

const topbarStyle = {
  position: "absolute",
  background: "#070707",
  width: "100%",
  padding: "20px",
}

export default Topbar