import React from 'react'

const Content = ({ children }) => (
  <div
    className="Content"
    style={{
      width: "calc(100% - 200px)",
      padding: "20px",
      background: "#121212",
    }}
  >
    {children}
  </div>
)

export default Content