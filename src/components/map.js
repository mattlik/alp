import React from "react"
import Img from "gatsby-image"

function Map(props) {
  return (
    <div className="additional-section">
      <div className="container section-padding">
        <Img fluid={props.mapImg} />
      </div>
    </div>
  )
}

export default Map
