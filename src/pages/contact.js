import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import SubHeader from "../components/subheader"
import Hero from "../components/hero"
import Offers from "../components/offers"
import Addit from "../components/additional-offers"
import Services from "../components/plumbing-services"

import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />
    <Header />
    <SubHeader />
    <Hero />
    <Offers offers={data.allWpOffer} />
    <Addit />
    <Services additImg={data.plumberTools.childImageSharp.fluid} />
  </Layout>
)

export const pageQuery = graphql`
  query {
    allWpOffer {
      edges {
        node {
          id
          offer {
            supTopFront
            top
            supTopEnd
            middle
            bottom
            disclaimer
          }
        }
      }
    }
    plumberTools: file(relativePath: { eq: "plumber-tools.png" }) {
      childImageSharp {
        fluid(maxWidth: 720) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mapImage: file(relativePath: { eq: "lsp-service@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 996) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
