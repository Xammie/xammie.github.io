import React from "react"
import Layout from "../components/Layout";
import Container from "../components/Container";
import List from "../components/Blog/List";
import {graphql} from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Blog({data}) {
    return (
        <Layout>
            <Container className="min-h-screen max-w-screen-md p-5">
                <Header/>
                <List data={data.blogs}/>
                <Footer/>
            </Container>
        </Layout>
    );
}

export const pageQuery = graphql`
    {
        blogs: allFile(
            filter: {sourceInstanceName: {eq: "blog"}, ext: {eq: ".md"}},
            sort: {order: DESC, fields: childMarkdownRemark___frontmatter___date}
        ) {
            nodes {
                remark: childMarkdownRemark {
                    excerpt(pruneLength: 150)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
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
    }
`