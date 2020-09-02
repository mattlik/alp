import React from "react"

import "../components/offers.css"

const Offers = () => (
  <div className="offers-section">
    <div className="container column-row section-padding">
      <div className="offers-grid">
        <div className="offer">
          <h3 className="bg-gray">
            <span className="offer-text--big text-yellow">
              24 <sup>Hour</sup>
            </span>{" "}
            <span className="offer-text--middle text-white">Emergency</span>{" "}
            <span className="offer-text--bottom text-white">
              Pluming Services
            </span>
          </h3>
        </div>
        <div className="offer">
          <h3 className="bg-gray">
            <span className="offer-text--big text-yellow">
              <sup>$</sup>49
            </span>{" "}
            <span className="offer-text--middle text-white">Sewer or</span>{" "}
            <span className="offer-text--bottom text-white">
              Drain Cleaning&nbsp;*
            </span>
          </h3>
          <p className="offer-disclaimer">
            *With proper clean out access. Some restrictions may apply.
            Available from 8am-4pm and excludes holidays, nights and weekends.
            Excludes apartments and commercial properties. Offer expires
            09/30/2020 CSLB# 1017727
          </p>
        </div>
        <div className="offer">
          <h3 className="bg-gray">
            <span className="offer-text--big text-yellow">
              <sup>$</sup>499
            </span>{" "}
            <span className="offer-text--middle text-white">
              Hydro Jetting Special
            </span>{" "}
            <span className="offer-text--bottom text-white">
              + FREE Camera Inspection&nbsp;*
            </span>
          </h3>
          <p className="offer-disclaimer">
            *Up to 125 feet. With proper clean out access. Price is for the
            first hour of service, each additional hour starts at $99 per hour.
            Some restrictions may apply. Available from 8am-4pm and excludes
            holidays, nights and weekends. Excludes apartments and commercial
            properties. Offer expires 09/30/2020 CSLB# 1017727
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Offers
