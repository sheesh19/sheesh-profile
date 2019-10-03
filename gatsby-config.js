/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Hello, From Sheila",
    description: "Looking for a full-stack freelance developer with UX and product management experience? Look no further.",
    url: "https://www.sheilaleveille.com",
    image: "/images/palm.ico",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
