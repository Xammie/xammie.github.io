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
import Enrise from "../img/enrise.svg";
import Footer from "../components/Footer";

export default function Home({data}) {
    return (
        <Layout>
            <Container className="min-h-screen max-w-screen-md p-5">
                <Card className="flex flex-col md:rounded-full">
                    <div className="flex flex-col md:flex-row items-center">
                        <Profile className="h-32 w-32 md:h-48 md:w-48"/>
                        <div className="flex-grow px-5">
                            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center md:text-left"
                                style={{textShadow: "#ff0000bf 4px -4px 4px, blue -4px 4px 4px"}}>
                                Hey, I'm Max
                            </h1>
                            <div className="flex items-center text-xl md:text-2xl">
                                Full Stack developer at
                                <a href="https://enrise.com" target="_blank"
                                   className="block md:inline-block h-12 p-2 mx-1 rounded hover:bg-blue-900 focus:bg-blue-900 focus:ring-4 ring-blue-700">
                                    <Enrise width={null} height="100%"/>
                                </a>
                            </div>
                            <div className="flex">
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
                {/*<Stack/>*/}
                <BlogList title="Recent blog posts"
                          data={data.blogs}/>
                <Projects items={data.projects.nodes}/>
                <Footer/>
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