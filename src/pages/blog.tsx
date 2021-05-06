import React from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Blog from '../components/Blog';
import {graphql} from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Img from 'gatsby-image';
import Seo from '../components/Seo';

export default function ({data}) {
    return (
        <Layout>
            <Seo title="Blog"/>
            <Container>
                <Header image={<Img alt="Max Hoogenbosch"
                    title="This is me :)"
                    fluid={data.profile.childImageSharp.fluid}/>}/>
                <Blog data={data.blogs}/>
                <Footer/>
            </Container>
        </Layout>
    );
}

export const pageQuery = graphql`
    {
        blogs: allMarkdownRemark(
            filter: {frontmatter: {publish: {eq: true}}},
            sort: {order: DESC, fields: frontmatter___date}
        ) {
            ...BlogList
        }

        profile: file(relativePath: { eq: "profile.png" }) {
            ...SmallProfileImage
        }
    }
`;