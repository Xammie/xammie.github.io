import React from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Blog from '../components/Blog';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GatsbyImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';

export default function PageBlog({ data }) {
    return (
        <Layout>
            <Seo title="Blog"/>
            <Container>
                <Header image={<GatsbyImage alt="Max Hoogenbosch"
                    image={data.profile.childImageSharp.gatsbyImageData}/>}/>
                <Blog data={data.blogs}/>
                <Footer/>
            </Container>
        </Layout>
    );
}

export const pageQuery = graphql`
    {
        blogs: allMdx(
            sort: {order: DESC, fields: frontmatter___date}
        ) {
            ...BlogList
        }

        profile: file(relativePath: { eq: "profile.png" }) {
            ...SmallProfileImage
        }
    }
`;