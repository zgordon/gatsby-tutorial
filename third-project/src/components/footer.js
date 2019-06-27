import React from "react"
import useSiteMetadata from "../hooks/use-sitemetadata"

export default () => {
  const { title, description } = useSiteMetadata()

  return (
    <footer>
      <hr />
      <p>
        Copyright {title} - {description}
      </p>
    </footer>
  )
}
