/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
  /* Your site config here */
    // pathPrefix: "/personal-site",
    plugins: [
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          name: "Ryan Ouyang's Personal Website",
          short_name: "Ryan Ouyang",
          start_url: "/",
          background_color: "#fffff4",
          theme_color: "#fffff4",
          display: "standalone",
          icon: "src/assets/images/icon.png",
          crossOrigin: `use-credentials`,
        },
      },
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: path.join(__dirname, 'src', 'assets', 'images')
        }
      },
      {
        resolve: `gatsby-plugin-styled-components`,
        options: {
          // Add any options here
        },
      },
    ],
}
