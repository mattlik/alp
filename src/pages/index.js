import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import SubHeader from "../components/subheader"
import Hero from "../components/hero"
import About from "../components/about"
import Addit from "../components/additional-offers"
import Services from "../components/plumbing-services"
import Map from "../components/map"

import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />
    <Header />
    <SubHeader />
    <Hero />
    <About aboutImg={data.plumbingImage.childImageSharp.fluid} />
    <Addit />
    <Services additImg={data.plumberTools.childImageSharp.fluid} />
    <Map mapImg={data.mapImage.childImageSharp.fluid} />
  </Layout>
)

export const pageQuery = graphql`
  query {
    plumberTools: file(relativePath: { eq: "plumber-tools.png" }) {
      childImageSharp {
        fluid(maxWidth: 720, toFormat: JPG) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    plumbingImage: file(relativePath: { eq: "plumbing-image.png" }) {
      childImageSharp {
        fluid(maxWidth: 720, toFormat: JPG) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mapImage: file(relativePath: { eq: "lsp-service@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 996, toFormat: JPG) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
