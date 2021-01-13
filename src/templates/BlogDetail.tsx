import React from "react"
import {graphql} from "gatsby"
import Container from "../components/Container";
import Card from "../components/Card";
import Layout from "../components/Layout";
import {Helmet} from "react-helmet";
import List from "../components/Blog/List";
import Header from "../components/Header";
import Tags from "../components/Tags";
import Footer from "../components/Footer";

export default function BlogDetail({data}) {
    const {frontmatter, html, excerpt} = data.blog.remark;

    return (
        <Layout>
            <Helmet>
                <title>{frontmatter.title}</title>
                <meta name="description" content={excerpt}/>
            </Helmet>
            <Container>
                <Header/>
                <Card>
                    <h1 className="title text-3xl">
                        {frontmatter.title}
                    </h1>
                    <div className="mb-4 text-sm">
                        {frontmatter.date}
                    </div>
                    <article className="markdown"
                             dangerouslySetInnerHTML={{__html: html}}/>
                    {frontmatter.tags.length > 0 &&
                    <div className="flex justify-start mt-4">
                        Tags:
                        &nbsp;
                        <Tags tags={frontmatter.tags}/>
                    </div>}
                </Card>
                {data.blogs.nodes.length > 0 && <List title="Other blogs" data={data.blogs}/>}
                <Footer/>
            </Container>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($slug: String!) {
        blog: file(childMarkdownRemark: {frontmatter: {slug: {eq:  $slug }}}) {
            remark: childMarkdownRemark {
                html
                excerpt(pruneLength: 100)
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    slug
                    title
                    tags
                }
            }
        }
        blogs: allFile(
            filter: {
                childMarkdownRemark: {frontmatter: {slug: {ne: $slug}}}
                sourceInstanceName: {eq: "blog"}
                ext: {eq: ".md"}
            },
            sort: {order: DESC, fields: childMarkdownRemark___frontmatter___date}
            limit: 3
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