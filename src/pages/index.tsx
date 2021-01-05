import React from "react"
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import Container from "../components/Container";
import {OutboundLink} from "gatsby-plugin-gtag";
import Github from "../img/github.svg";
import Linkedin from "../img/linkedin.svg";
import Card from "../components/Card";
import BlogList from "../components/BlogList";
import {graphql} from "gatsby";
import Projects from "../components/Projects";
import Stack from "../components/Stack";

export default function Home({data}) {
    return (
        <Layout>
            <Container className="min-h-screen max-w-screen-md p-5">
                <Card className="flex flex-col md:rounded-full">
                    <div className="flex flex-col md:flex-row items-center">
                        <Profile className="h-16 w-16 sm:h-32 sm:w-32 md:h-48 md:w-48"/>
                        <div className="flex-grow">
                            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-5 text-center">
                                Hey, I'm Max
                            </h1>
                            <div className="text-lg md:text-2xl font-bold mb-3 md:mb-5 text-center">
                                <span className="bg-white text-gray-900 p-1">
                                    Fullstack Developer
                                </span>
                            </div>
                            <div className="flex-center">
                                <OutboundLink title="My Github Profile"
                                              href="https://github.com/Xammie"
                                              className="flex-center w-12 h-12 rounded transition transition-colors duration-100 hover:bg-blue-900 focus:bg-blue-900 focus:bg-gray-900 focus:ring-4 focus:ring-blue-700">
                                    <Github className="h-8"/>
                                </OutboundLink>
                                <OutboundLink title="My LinkedIn Profile"
                                              href="https://www.linkedin.com/in/maxhoogenbosch/"
                                              className="flex-center w-12 h-12 rounded transition transition-colors duration-100 hover:bg-blue-900 focus:bg-blue-900 focus:bg-gray-900 focus:ring-4 focus:ring-blue-700">
                                    <Linkedin className="h-8"/>
                                </OutboundLink>
                            </div>
                        </div>
                    </div>
                </Card>
                <Stack/>
                <BlogList data={data.blogs}/>
                <Projects items={data.projects.nodes}/>
            </Container>
        </Layout>
    );
}

export const pageQuery = graphql`
    {
        blogs: allFile(
            filter: {sourceInstanceName: {eq: "blog"}, ext: {eq: ".md"}},
            sort: {order: DESC, fields: childMarkdownRemark___frontmatter___date},
            limit: 3
        ) {
            nodes {
                remark: childMarkdownRemark {
                    excerpt(pruneLength: 150)
                    frontmatter {
                        title
                        slug
                        date(formatString: "MMMM DD, YYYY")
                        tags
                    }
                }
            }
            pageInfo {
                hasNextPage
            }
        }
        projects: allProjectsJson(sort: {fields: index}, limit: 1) {
            nodes {
                title
                image {
                    childImageSharp {
                        fluid(maxWidth: 500, maxHeight: 350, cropFocus: CENTER, toFormat: JPG) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`