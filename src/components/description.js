import React from "react"
import Img from "gatsby-image"

import "../components/description.css"

function Description(props) {
  return (
    <div className="about-section">
      <div className="container description section-padding column-row">
        <div className="grid-2">
          <Img fluid={props.descImg} />
          <p>
            Our company and plumbers stand upon many values. When our plumbers
            arrive to a job site in Southern California, we believe that a job
            should always be done right the first time. Our plumbing company is
            known in the community of Southern California as the premier
            plumbing repair and replacement specialists. No job is too big or
            small for our experienced Southern California plumbers to handle,
            from a clogged drain or water heater repair to a septic-to-sewer
            conversion. We pride ourselves on such a high standard of service in
            the community of Southern California that our customers keep coming
            back for all their plumbing needs.
          </p>
        </div>
        <p className="mt">
          Our team of skilled plumbers in Southern California are highly trained
          and are always prepared to handle your plumbing emergencies in
          Southern California. Whether it’s a backed-up sewer system, broken
          main, clogged drain, water line leak, clogged garbage disposal or
          general plumbing issues, we understand that these matters are serious
          to our customers in Southern California. Our goal is to fix your
          plumbing problems in a professional, speedy manner.
        </p>
        <p className="mb-0">
          Our experienced Southern California plumbers have successfully handled
          the worst of plumbing nightmares. We work hard for our customers in
          Southern California to resolve their plumbing issues every day in
          order to put our customers at ease. We understand the costs that are
          associated with the maintenance and repair of your plumbing system and
          make every effort to reduce your costs. Let us take your plumbing
          worries away!
        </p>
      </div>
    </div>
  )
}

export default Description
