import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "../components/footer.css"

const Footer = ({ siteTitle }) => (
  <footer>
    <p className="text-center">
      <span className="text-white">
        &copy; {new Date().getFullYear()} <Link to="/">{siteTitle}</Link>. All
        Rights Reserved.{" "}
      </span>
      <Link to="/privacy-policy">Privacy Policy</Link>
    </p>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
