module.exports = {
  siteMetadata: {
    title: `Affordable Local Plumbers`,
    description: `We'll find the right plumber for your job`,
    author: `@lilikoiagency`,
    siteUrl: `https://www.affordablelocalplumbers.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `https://afplumbstage.wpengine.com/graphql`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-117747630-1",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#efea5d`,
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
