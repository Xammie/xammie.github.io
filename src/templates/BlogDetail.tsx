import React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import Article from '../components/Article';

export default function BlogDetail({ data, children }) {
    const { frontmatter, excerpt } = data.blog;

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
            <Header/>
            <Article
                title={frontmatter.title}
                date={frontmatter.date}
            >
                {children}
            </Article>
            <Container>
                <Footer />
            </Container>
        </Layout>
    );
}

export const query = graphql`
    query ($id: String!) {
        blog: mdx(id: { eq: $id }) {
            excerpt(pruneLength: 200)
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                published: date(formatString: "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
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
