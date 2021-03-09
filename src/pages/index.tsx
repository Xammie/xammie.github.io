import React from "react"
import Layout from "../components/Layout";
import Container from "../components/Container";
import Blog from "../components/Blog";
import {graphql} from "gatsby";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Img from "gatsby-image";
import Seo from "../components/Seo";

export default function ({data}) {
    return (
        <Layout>
            <Seo/>
            <Container className="flex flex-col justify-between">
                <div>
                    <Intro image={<Img alt="Max Hoogenbosch"
                                       title="This is me :)"
                                       fluid={data.profile.childImageSharp.fluid}/>}/>
                    <Blog data={data.blogs}/>
                </div>
                <Footer/>
            </Container>
        </Layout>
    );
}

export const pageQuery = graphql`
    {
        blogs: allMarkdownRemark(
            filter: {frontmatter: {publish: {eq: true}}}
            sort: {order: DESC, fields: frontmatter___date}
            limit: 3
        ) {
            ...BlogList
        }

        profile: file(relativePath: { eq: "profile.jpg" }) {
            ...LargeProfileImage
        }
    }
`