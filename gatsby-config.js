/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX:         true,
                allExtensions: true,
            },
        },
        `gatsby-plugin-postcss`,
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /img/
                }
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name:             `Max's Portfolio`,
                short_name:       `Max`,
                start_url:        `/`,
                lang:             `en`,
                background_color: `#fff`,
                theme_color:      `rgb(17, 24, 39)`,
                display:          `standalone`,
                icon:             `src/img/icon.png`,
            },
        },
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `img`,
                path: `${__dirname}/src/img/`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                // your google analytics tracking id
                trackingId: `UA-181396331-1`,
                // Puts tracking script in the head instead of the body
                head:       false,
                // enable ip anonymization
                anonymize:  true,
            },
        },
    ],
}
