import React from "react"
import Img from "gatsby-image"

function About(props) {
  return (
    <div className="about-section">
      <div className="container column-row section-padding">
        <div className="grid-2">
          <Img fluid={props.aboutImg} />
          <div>
            <h2>About Our Affordable Plumbing Services</h2>
            <p>
              Welcome to Affordable So Cal Plumbers your one stop shop for
              solving your plumbing problems.
            </p>
            <p>
              My name is Robert and I have been plumbing since 1957. I moved to
              California in 1978 and became a state licensed plumbing contractor
              the following year. I have been providing the public with
              solutions to their plumbing problems and needs ever since. My
              company and my team of plumbers are experts in solving all types
              of plumbing problems. We can do anything from trenchless sewer
              pipe replacement to fixing a simple faucet leak. My main focus is
              to provide professional plumbing services at very reasonable
              prices.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
