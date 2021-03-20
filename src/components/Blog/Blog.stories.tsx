import React from 'react';
import BlogComponent from "./Blog";
import Container from "../Container";

export default {
    title: 'Blog',
    decorators: [Story => <Container><Story/></Container>],
    argTypes: {
        count: {
            name: 'Items',
            control: {
                type: 'range',
                min: 1,
                max: 10,
                step: 1,
            },
            defaultValue: 3,
        },
        hasNextPage: {
            name: 'Has more items',
            control: 'boolean',
            defaultValue: true,
        },
    },
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

export const Blog = ({count, hasNextPage}) => {
    let items = []

    for (let i = 0; i < count; i++) {
        items[i] = data;
    }

    return <BlogComponent data={{nodes: items, pageInfo: {hasNextPage}}}/>
}
