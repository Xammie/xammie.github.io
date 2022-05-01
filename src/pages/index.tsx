import React from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Blog from '../components/Blog';
import { graphql } from 'gatsby';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import { GatsbyImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';

export default function PageHome({ data }: any) {
    return (
        <Layout>
            <Seo />
            <Container>
                <Intro
                    image={
                        <GatsbyImage
                            alt="Max Hoogenbosch"
                            title="This is me :)"
                            image={data.profile.childImageSharp.gatsbyImageData}
                        />
                    }
                />
                <main>
                    <Blog data={data.blogs} />
                </main>
                <Footer />
            </Container>
        </Layout>
    );
}

export const pageQuery = graphql`
    {
        blogs: allMdx(sort: { order: DESC, fields: frontmatter___date }) {
            ...BlogList
        }

        profile: file(relativePath: { eq: "profile.png" }) {
            ...LargeProfileImage
        }
    }
`;
