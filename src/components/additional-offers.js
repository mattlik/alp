import React from "react"
import "../components/additional-offers.css"

function Addit(props) {
  return (
    <div className="additional-section bg-yellow">
      <div className="container section-padding column-row">
        <h2>Additional Plumbing Specials:</h2>
        <ul className="additional-specials">
          <li>$50 OFF Water Heater Installation&nbsp;*</li>
          <li>$100 OFF Tankless Water Heater Installation&nbsp;*</li>
          <li>$20 OFF Garbage Disposal Installation&nbsp;*</li>
          <li>$25 OFF Toilet Repair&nbsp;*</li>
          <li>$20 OFF Faucet Installation&nbsp;*</li>
          <li>5% OFF up to $500 Trench-less Sewer Repairs&nbsp;*</li>
        </ul>
        <p className="additional-disclaimer">
          <small>
            * Some restrictions may apply. Call for details. Available from
            8am-4pm and excludes holidays, nights and weekends. Excludes
            apartments and commercial properties. Offer expires 09/30/2020 CSLB#
            1017727
          </small>
        </p>
      </div>
    </div>
  )
}

export default Addit
