import React from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Blog from '../components/Blog';
import {graphql} from 'gatsby';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import { GatsbyImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';

export default function PageHome({data}: any) {
    return (
        <Layout>
            <Seo/>
            <Container>
                <Intro image={<GatsbyImage alt="Max Hoogenbosch"
                    title="This is me :)"
                    image={data.profile.childImageSharp.gatsbyImageData}/>}/>
                <Blog data={data.blogs}/>
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

        profile: file(relativePath: { eq: "profile.png" }) {
            ...LargeProfileImage
        }
    }
`;