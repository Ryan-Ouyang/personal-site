/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
    pathPrefix: "/personal-site",
    plugins: [
      {
        resolve: `gatsby-plugin-styled-components`,
        options: {
          // Add any options here
        },
      },
    ],
}
