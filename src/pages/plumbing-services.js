import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import SubHeader from "../components/subheader"
import Hero from "../components/hero"
import Offers from "../components/offers"
import Addit from "../components/additional-offers"
import Premiere from "../components/premiere"
import Services from "../components/plumbing-services"
import Description from "../components/description"

import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />
    <Header />
    <SubHeader />
    <Hero />
    <Offers offers={data.allWpOffer} />
    <Addit />
    <Premiere />
    <Services additImg={data.plumberTools.childImageSharp.fluid} />
    <Description descImg={data.drainImage.childImageSharp.fluid} />
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
    drainImage: file(relativePath: { eq: "drain.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 442) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
