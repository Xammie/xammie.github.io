import React from "react"
import Layout from "../components/Layout";
import Container from "../components/Container";
import List from "../components/Blog/List";
import {graphql} from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Helmet} from "react-helmet";
import Img from "gatsby-image";

export default function Blog({data}) {
    return (
        <Layout>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <Container className="flex flex-col justify-between">
                <div>
                    <Header image={<Img alt="Max Hoogenbosch"
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
            sort: {order: DESC, fields: childMarkdownRemark___frontmatter___date}
        ) {
            nodes {
                remark: childMarkdownRemark {
                    excerpt(pruneLength: 150)
                    frontmatter {
                        date(formatString: "MMMM D, YYYY")
                        slug
                        title
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
                fluid(maxWidth: 150, maxHeight: 150) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`