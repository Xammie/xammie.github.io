import React from 'react';
import {graphql} from 'gatsby';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Blog from '../components/Blog';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {StaticImage} from 'gatsby-plugin-image';
import Seo from '../components/Seo';
import Article from '../components/Article';

export default function BlogDetail({data}) {
    const {frontmatter, html, excerpt} = data.blog;

    return (
        <Layout>
            <Seo title={frontmatter.title}
                description={excerpt}
                image={frontmatter.image?.childImageSharp?.original?.src}
                tags={frontmatter.tags}
                published={frontmatter.published}
                article/>
            <Container>
                <Header image={
                    <StaticImage src="../img/profile.png" alt="Max Hoogenbosch" width={100}
                        height={100}/>
                }/>
                <Article title={frontmatter.title}
                    date={frontmatter.date}
                    content={html}/>
                <Blog title="Other blogs" data={data.blogs}/>
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
                        original {
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
    }
`;