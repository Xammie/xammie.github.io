module.exports = {
    siteMetadata: {
        title: `Max Hoogenbosch`,
        titleTemplate: `%s - Max Hoogenbosch`,
        description: `Technical blog about laravel and React`,
        siteUrl: `https://hoogenbos.ch`,
        twitterUsername: `@maxhoogenbosch`,
        lang: `en`,
        locale: `en_US`,
    },
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
                path: `${__dirname}/content/`
            }
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    formats: [`auto`, `webp`, `avif`],
                    placeholder: `blurred`,
                    breakpoints: [750, 1080, 1366, 1920],
                }
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-image`,
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
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            backgroundColor: 'transparent',
                            withWebp: true,
                            showCaptions: false,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            // Class prefix for <pre> tags containing syntax highlighting;
                            // defaults to 'language-' (e.g. <pre class="language-js">).
                            // If your site loads Prism into the browser at runtime,
                            // (e.g. for use with libraries like react-live),
                            // you may use this to prevent Prism from re-processing syntax.
                            // This is an uncommon use-case though;
                            // If you're unsure, it's best to use the default value.
                            classPrefix: "language-",
                            // This is used to allow setting a language for inline code
                            // (i.e. single backticks) by creating a separator.
                            // This separator is a string and will do no white-space
                            // stripping.
                            // A suggested value for English speakers is the non-ascii
                            // character '›'.
                            inlineCodeMarker: null,
                            // This lets you set up language aliases.  For example,
                            // setting this to '{ sh: "bash" }' will let you use
                            // the language "sh" which will highlight using the
                            // bash highlighter.
                            aliases: {},
                            // This toggles the display of line numbers globally alongside the code.
                            // To use it, add the following line in gatsby-browser.js
                            // right after importing the prism color scheme:
                            //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
                            // Defaults to false.
                            // If you wish to only show line numbers on certain code blocks,
                            // leave false and use the {numberLines: true} syntax below
                            showLineNumbers: false,
                            // If setting this to true, the parser won't handle and highlight inline
                            // code used in markdown i.e. single backtick code like `this`.
                            noInlineHighlight: false,
                            // This adds a new language definition to Prism or extend an already
                            // existing language definition. More details on this option can be
                            // found under the header "Add new language definition or extend an
                            // existing language" below.
                            languageExtensions: [
                                {
                                    language: "superscript",
                                    extend: "javascript",
                                    definition: {
                                        superscript_types: /(SuperType)/,
                                    },
                                    insertBefore: {
                                        function: {
                                            superscript_keywords: /(superif|superelse)/,
                                        },
                                    },
                                },
                            ],
                            // Customize the prompt used in shell output
                            // Values below are default
                            prompt: {
                                user: "root",
                                host: "localhost",
                                global: false,
                            },
                            // By default the HTML entities <>&'" are escaped.
                            // Add additional HTML escapes by providing a mapping
                            // of HTML entities and their escape value IE: { '}': '&#123;' }
                            escapeEntities: {},
                        },
                    },
                ],
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                    {
                        site {
                            siteMetadata {
                                title
                                description
                                siteUrl
                                site_url: siteUrl
                            }
                        }
                    }
                `,
                feeds: [
                    {
                        serialize: ({query: {site, blogs}}) => blogs.nodes.map(node => ({
                            title: node.frontmatter.title,
                            description: node.excerpt,
                            date: node.frontmatter.date,
                            url: site.siteMetadata.siteUrl + node.frontmatter.slug,
                            guid: site.siteMetadata.siteUrl + node.frontmatter.slug,
                            custom_elements: [{"content:encoded": node.html}],
                        })),
                        query: `
                            {
                                blogs: allMarkdownRemark(
                                    filter: {frontmatter: {publish: {eq: true}}}
                                    sort: {order: DESC, fields: frontmatter___date}
                                ) {
                                    nodes {
                                        excerpt
                                        html
                                        frontmatter {
                                            title
                                            date
                                            slug
                                        }
                                    }
                                }
                            }
                        `,
                        output: `/rss.xml`,
                        match: `^/blog/`,
                    },
                ],
            }
        },
    ],
}
