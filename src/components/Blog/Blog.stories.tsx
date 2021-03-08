import React from 'react';
import BlogComponent from "./Blog";
import Container from "../Container";

export default {
    title: 'Blog',
    decorators: [(Story) => <Container><Story/></Container>],
    parameters: {
        layout: 'fullscreen',
    }
};

const data = {
    frontmatter: {
        title: 'This is a random test blog',
        slug: '/blog/test',
        tags: ['random', 'tags'],
        date: 'January 1, 2021',
    },
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis dignissim leo et pulvinar. Praesent dictum congue luctus. In consequat velit ut tempus tristique. Maecenas eget justo tortor.',
};

export const Blog = () => <BlogComponent data={{nodes: [data, data, data], pageInfo: {hasNextPage: true}}}/>
