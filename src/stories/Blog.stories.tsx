import React from 'react';
import Item from "../components/Blog/Item";
import Card from "../components/Card";
import List from "../components/Blog/List";
import Container from "../components/Container";

export default {
    title: 'Layout/Blog',
    decorators: [(Story) => <Container><Story/></Container>],
    parameters: {
        layout: 'fullscreen',
    }
};

const blogData = {
    remark: {
        frontmatter: {
            title: 'This is a random test blog',
            slug: '/blog/test',
            tags: ['random', 'tags'],
            date: 'January 1, 2021',
        },
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis dignissim leo et pulvinar. Praesent dictum congue luctus. In consequat velit ut tempus tristique. Maecenas eget justo tortor.',
    }
};

export const BlogList = () => <List data={{nodes: [blogData, blogData, blogData], pageInfo: {hasNextPage: true}}}/>

export const BlogItem = () => <Card><Item data={blogData.remark}/></Card>



