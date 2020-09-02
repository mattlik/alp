import React from "react"
import { Link } from "gatsby"

function Premiere(props) {
  return (
    <div className="about-section">
      <div className="container column-row section-padding">
        <div className="grid-2">
          <div className="align-top">
            <h2>The Premier Plumbers in Southern California</h2>
            <p className="highlight-text">24-hour Service</p>
            <p>
              For a free written plumbing estimate,{" "}
              <Link to="tel:+18189276188">
                call us to get connected to a Southern California plumber
              </Link>{" "}
              today. Your Prompt 24-hour Southern California plumbing company.
            </p>
          </div>
          <div>
            <p>
              Looking for plumbing companies in Southern California? Our
              plumbers have you covered. Our plumbing company has been providing
              superior plumbing service to Southern California area for over 20
              years. Our company works with some of the best plumbers in Los
              Angeles County. We work with Southern California local companies
              and homeowners when it comes to plumbing repairs. Customer
              satisfaction at our company is a top priority for our team of
              plumbers in Southern California. Our experienced plumbers in Los
              Angeles County always provide prompt, speedy service, usually to
              your door in 60 minutes or less.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Premiere
