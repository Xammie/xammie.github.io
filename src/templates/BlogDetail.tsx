import React from "react"
import {graphql} from "gatsby"
import Container from "../components/Container";
import Card from "../components/Card";
import Layout from "../components/Layout";
import List from "../components/Blog/List";
import Header from "../components/Header";
import Tags from "../components/Tags";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import Img from "gatsby-image";
import Seo from "../components/Seo";

export default function BlogDetail({data}) {
    const {frontmatter, html, excerpt, fields} = data.blog.remark;

    return (
        <Layout>
            <Seo title={frontmatter.title}
                 description={excerpt}
                 image={frontmatter.image.childImageSharp.fluid.src}
                 article/>
            <Container className="flex flex-col justify-between">
                <div>
                    <Header image={<Img alt="Max Hoogenbosch"
                                        title="This is me :)"
                                        fluid={data.profile.childImageSharp.fluid}/>}/>
                    <Card>
                        <div className="text-sm whitespace-nowrap text-gray-500 dark:text-gray-300 md:hidden">
                            {frontmatter.date}
                        </div>
                        <div className="text-sm flex-wrap items-center hidden md:flex mb-4">
                            <div className="whitespace-nowrap py-1 md:py-0">{frontmatter.date}</div>
                            <Divider/>
                            <div className="whitespace-nowrap py-1 md:py-0">{fields.readingTime.text}</div>
                            {frontmatter.tags.length > 0 &&
                            <>
                                <Divider/>
                                <Tags tags={frontmatter.tags}/>
                            </>}
                        </div>
                        <h1 className="font-bold text-xl md:text-3xl mb-4 leading-tight">
                            {frontmatter.title}
                        </h1>
                        <article className="markdown"
                                 dangerouslySetInnerHTML={{__html: html}}/>
                    </Card>
                    {data.blogs.nodes.length > 0 && <List title="Other blogs" data={data.blogs}/>}
                </div>
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
                    date(formatString: "MMMM D, YYYY")
                    slug
                    title
                    tags
                    image {
                        childImageSharp {
                            fluid(maxWidth: 900, toFormat: JPG) {
                                src
                            }
                        }
                    }
                }
                fields {
                    readingTime {
                        text
                    }
                }
            }
        }
        blogs: allFile(
            filter: {
                childMarkdownRemark: {frontmatter: {
                    publish: {eq: true}
                    slug: {ne: $slug}
                }}
                sourceInstanceName: {eq: "blog"}
                ext: {eq: ".md"}
            },
            sort: {order: DESC, fields: childMarkdownRemark___frontmatter___date}
            limit: 3
        ) {
            ...BlogList
        }
        profile: file(relativePath: { eq: "profile.jpg" }) {
            ...SmallProfileImage
        }
    }
`