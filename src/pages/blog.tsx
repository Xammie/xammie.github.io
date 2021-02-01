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
            <Container className="flex flex-col justify-between">
                <div>
                    <Header/>
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
    }
`