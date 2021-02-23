import React from "react"
import Layout from "../components/Layout";
import Container from "../components/Container";
import List from "../components/Blog/List";
import {graphql} from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Img from "gatsby-image";
import Seo from "../components/Seo";

export default function Blog({data}) {
    return (
        <Layout>
            <Seo title="Blog"/>
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
            ...BlogList
        }
        profile: file(relativePath: { eq: "profile.jpg" }) {
            ...SmallProfileImage
        }
    }
`