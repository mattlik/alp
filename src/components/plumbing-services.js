import React from "react"
import Img from "gatsby-image"

function Services(props) {
  return (
    <div className="additional-section bg-gray">
      <div className="container section-padding">
        <div className="grid-2">
          <div className="text-white">
            <h2 className="text-yellow">Our Plumbing Services Include:</h2>
            <ul className="services-list">
              <li>Emergency Plumbing Service</li>
              <li>Plumbing Repair and Replacement</li>
              <li>Water Heater Repair and Replacement</li>
              <li>Full Drain Cleaning Services</li>
              <li>Trenchless Sewer Technology</li>
              <li>Residential and Commercial</li>
              <li>Remodel and New Construction</li>
              <li>Sewer Line and Septic Repair</li>
              <li>Leak Detection and Line Location</li>
              <li>Gas Line Repiping</li>
            </ul>
            <p className="services-more">...and much more</p>
          </div>
          <div>
            <Img fluid={props.additImg} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
