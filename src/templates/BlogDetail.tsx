import React from 'react';
import {graphql} from 'gatsby';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Blog from '../components/Blog';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Img from 'gatsby-image';
import Seo from '../components/Seo';
import Article from '../components/Article';

export default function ({data}: any) {
    const {frontmatter, html, excerpt} = data.blog;

    return (
        <Layout>
            <Seo title={frontmatter.title}
                description={excerpt}
                image={frontmatter.image?.childImageSharp?.fluid?.src ?? undefined}
                tags={frontmatter.tags}
                published={frontmatter.published}
                article/>
            <Container>
                <Header image={<Img alt="Max Hoogenbosch"
                    title="This is me :)"
                    fluid={data.profile.childImageSharp.fluid}/>}/>
                <Article title={frontmatter.title}
                    date={frontmatter.date}
                    content={html}/>
                {data.blogs.nodes.length > 0 && <Blog title="Other blogs" data={data.blogs}/>}
                <Footer/>
            </Container>
        </Layout>
    );
}

export const pageQuery = graphql`
    query($slug: String!) {
        blog: markdownRemark(frontmatter: {slug: {eq: $slug }}) {
            html
            excerpt(pruneLength: 200)
            frontmatter {
                date(formatString: "MMMM D, YYYY")
                published: date(formatString: "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                slug
                title
                image {
                    childImageSharp {
                        fluid(maxWidth: 900, toFormat: JPG) {
                            src
                        }
                    }
                }
            }
        }

        blogs: allMarkdownRemark(
            filter: { frontmatter: {
                publish: {eq: true}
                slug: {ne: $slug}
            }}
            sort: {order: DESC, fields: frontmatter___date}
            limit: 3
        ) {
            ...BlogList
        }

        profile: file(relativePath: { eq: "profile.png" }) {
            ...SmallProfileImage
        }
    }
`;