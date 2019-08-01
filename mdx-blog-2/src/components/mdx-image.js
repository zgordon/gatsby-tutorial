import React from "react"

const MDXImage = ({ float, width, margin, children }) => {
  const style = {
    float: float || "none",
    width: width || "50%",
    margin: margin || "10px",
  }
  return (
    <div
      style={{
        width: style.width,
        float: style.float,
        margin: style.margin,
      }}
    >
      {children.props.children}
    </div>
  )
}

export default MDXImage
