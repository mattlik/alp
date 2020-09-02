import React from "react"

import "../components/offers.css"

function Offers(props) {
  return (
    <div className="offers-section" id="offers">
      <div className="container column-row section-padding">
        <div className="offers-grid">
          {props.offers.edges.map(offer => (
            <div className="offer" key={offer.node.id}>
              <h3 className="bg-gray">
                {offer.node.offer.top !== null && (
                  <span className="offer-text--big text-yellow">
                    {offer.node.offer.supTopFront !== null && (
                      <sup>{offer.node.offer.supTopFront}</sup>
                    )}
                    {offer.node.offer.top !== null && (
                      <span className="top-bg">{offer.node.offer.top}</span>
                    )}
                    {offer.node.offer.supTopEnd !== null && (
                      <sup>{offer.node.offer.supTopEnd}</sup>
                    )}
                  </span>
                )}
                {offer.node.offer.middle !== null && (
                  <span className="offer-text--middle text-white">
                    {offer.node.offer.middle}
                  </span>
                )}
                {offer.node.offer.bottom !== null && (
                  <span className="offer-text--bottom text-white">
                    {offer.node.offer.bottom}
                  </span>
                )}
              </h3>
              {offer.node.offer.disclaimer !== null && (
                <p className="offer-disclaimer">
                  {offer.node.offer.disclaimer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Offers
