import React from "react"
import Img from "gatsby-image"

import "../components/map.css"

function Map(props) {
  return (
    <div className="additional-section">
      <div className="container section-padding">
        <figure id="imgContain">
          <Img fluid={props.mapImg} />
        </figure>
      </div>
    </div>
  )
}

export default Map
