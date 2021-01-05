module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true,
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
                name: `Max Hoogenbosch`,
                short_name: `Max`,
                start_url: `/`,
                lang: `en`,
                background_color: `#fff`,
                theme_color: `rgb(17, 24, 39)`,
                display: `standalone`,
                icon: `src/img/icon.png`,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `img`,
                path: `${__dirname}/src/img/`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/src/blog/`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${__dirname}/src/projects/`
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
                head: false,
                // enable ip anonymization
                anonymize: true,
            },
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `red`,
                showSpinner: false,
            },
        },
        `gatsby-plugin-react-helmet`,
    ],
}
