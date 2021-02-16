import React from "react"
import Layout from "../components/Layout";
import Container from "../components/Container";
import List from "../components/Blog/List";
import {graphql} from "gatsby";
import Footer from "../components/Footer";
import About from "../components/About";
import Img from "gatsby-image";

export default function Home({data}) {
    return (
        <Layout>
            <Container className="flex flex-col justify-between">
                <div>
                    <About image={<Img alt="Max Hoogenbosch"
                                       title="This is me :)"
                                       fluid={data.profile.childImageSharp.fluid}/>}/>
                    <List data={data.blogs}/>
                </div>
                <Footer/>
            </Container>
        </Layout>
    );
}

export const pageQuery = graphql`
    {
        blogs: allFile(
            filter: {
                sourceInstanceName: {eq: "blog"}, ext: {eq: ".md"}
                childMarkdownRemark: {frontmatter: {publish: {eq: true}}}
            },
            sort: {order: DESC, fields: childMarkdownRemark___frontmatter___date},
        ) {
            nodes {
                remark: childMarkdownRemark {
                    excerpt(pruneLength: 150)
                    frontmatter {
                        title
                        slug
                        date(formatString: "MMMM D, YYYY")
                        tags
                    }
                }
            }
            pageInfo {
                hasNextPage
            }
        }
        profile: file(relativePath: { eq: "profile.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 300, maxHeight: 300) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`