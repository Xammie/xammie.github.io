import type { GatsbyConfig } from 'gatsby';
import { resolve } from 'path';

const config: GatsbyConfig = {
    siteMetadata: {
        title: 'Max Hoogenbosch',
        titleTemplate: '%s - Max Hoogenbosch',
        description: 'Technical blog about laravel and React',
        siteUrl: 'https://hoogenbos.ch',
        twitterUsername: '@maxhoogenbosch',
        lang: 'en',
        locale: 'en_US',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-typescript',
            options: {
                isTSX: true,
                allExtensions: true,
            },
        },
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /img/,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Max Hoogenbosch',
                short_name: 'Max',
                start_url: '/',
                lang: 'en',
                background_color: '#fff',
                theme_color: 'rgb(17, 24, 39)',
                display: 'standalone',
                icon: 'src/img/icon.png',
            },
        },
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'img',
                path: resolve('./src/img/'),
            },
        },
        {
            resolve: 'gatsby-plugin-sharp',
            options: {
                defaults: {
                    formats: ['auto', 'webp', 'avif'],
                    placeholder: 'blurred',
                    breakpoints: [750, 1080, 1366, 1920],
                },
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-plugin-gtag',
            options: {
                trackingId: 'UA-181396331-1',
                head: false,
                anonymize: true,
            },
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                output: '/',
            },
        },
        {
            resolve: 'gatsby-plugin-feed',
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
                        title: 'Feed',
                        serialize: ({ query: { site, blogs } }) => blogs.nodes.map(node => ({
                            title: node.frontmatter.title,
                            description: node.excerpt,
                            date: node.frontmatter.date,
                            url: `${site.siteMetadata.siteUrl}/blog/${node.slug}`,
                            guid: `${site.siteMetadata.siteUrl}/blog/${node.slug}`,
                        })),
                        query: `
                            {
                                blogs: allMdx(
                                    sort: {order: DESC, fields: frontmatter___date}
                                ) {
                                    nodes {
                                        excerpt
                                        slug
                                        frontmatter {
                                            title
                                            date
                                        }
                                    }
                                }
                            }
                        `,
                        output: '/rss.xml',
                        match: '^/blog/',
                    },
                ],
            },
        },
        'gatsby-remark-images',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                remarkPlugins: [
                    require('remark-prism'),
                ],
                gatsbyRemarkPlugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            backgroundColor: 'transparent',
                            withWebp: true,
                            showCaptions: false,
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'blogs',
                path: resolve('./content'),
            },
        },
    ],
};

export default config;