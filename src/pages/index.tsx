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
import About from "../components/About";

export default function Home({data}) {
    return (
        <Layout>
            <Container className="min-h-screen max-w-screen-md p-5">
                <About/>
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