import React from "react"
import Layout from "../components/Layout";
import Container from "../components/Container";
import List from "../components/Blog/List";
import {graphql} from "gatsby";
import Footer from "../components/Footer";
import About from "../components/About";

export default function Home({data}) {
    return (
        <Layout>
            <Container className="min-h-screen max-w-screen-md p-5">
                <About/>
                <List title="Recent blog posts"
                      data={data.blogs}/>
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
    }
`