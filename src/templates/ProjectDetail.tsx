import React from "react"
import {graphql} from "gatsby"
import Container from "../components/Container";
import Card from "../components/Card";
import Layout from "../components/Layout";
import {Helmet} from "react-helmet";
import BlogList from "../components/BlogList";
import Header from "../components/Header";
import Tags from "../components/Tags";
import Footer from "../components/Footer";

export default function BlogDetail({data}) {
    const {frontmatter, html, excerpt} = data.blog;

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
                {data.blogs.nodes.length > 0 && <BlogList title="Other blogs" data={data.blogs}/>}
                <Footer/>
            </Container>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($slug: String!) {
        blog: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            excerpt(pruneLength: 100)
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
                tags
            }
        }
        blogs: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {slug: {ne: $slug}}}, limit: 3) {
            nodes {
                excerpt(pruneLength: 150)
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    slug
                    title
                    tags
                }
            }
            pageInfo {
                hasNextPage
            }
        }
    }
`