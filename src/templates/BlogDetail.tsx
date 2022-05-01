import React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';
import Article from '../components/Article';

export default function BlogDetail({ data }) {
    const { frontmatter, body, excerpt } = data.blog;

    return (
        <Layout>
            <Seo
                title={frontmatter.title}
                description={excerpt}
                image={frontmatter.image?.childImageSharp?.original?.src}
                tags={frontmatter.tags}
                published={frontmatter.published}
                article
            />
            <Header
                image={
                    <StaticImage
                        src="../img/profile.png"
                        alt="Max Hoogenbosch"
                        width={100}
                        height={100}
                    />
                }
            />
            <Article
                title={frontmatter.title}
                date={frontmatter.date}
                content={body}
            />
            <Container>
                <Footer />
            </Container>
        </Layout>
    );
}

export const query = graphql`
    query MDXQuery($id: String!) {
        blog: mdx(id: { eq: $id }) {
            excerpt(pruneLength: 200)
            body
            frontmatter {
                date(formatString: "MMMM D, YYYY")
                published: date(formatString: "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                title
                image {
                    childImageSharp {
                        original {
                            src
                        }
                    }
                }
            }
        }
    }
`;
