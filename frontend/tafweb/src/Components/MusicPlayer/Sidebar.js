import React from 'react'

const Sidebar = ({ children }) => (
  <div
    className="Sidebar"
    style={{
      width: "200px",
      height: "100%",
      background: "#000000",
      padding: "20px",
    }}
  >
    {children}
  </div>
)

export default Sidebar