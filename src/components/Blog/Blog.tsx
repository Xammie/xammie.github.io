import React from 'react';
import Surface from '../Surface';
import Button from '../Button/Button';
import Item from './Item';
import {graphql} from 'gatsby';

export default function Blog({title = 'Blog posts', data}) {
    return (
        <Surface>
            <h2 className="font-bold text-xl md:text-2xl">{title}</h2>
            <div className="space-y-3 mt-2">
                {data.nodes.map((data, index) => <Item data={data} key={index}/>)}
            </div>
            {data.pageInfo.hasNextPage &&
            <div className="flex justify-end mt-3">
                <Button to="/blog">
                    View all
                </Button>
            </div>}
        </Surface>
    );
}

export const query = graphql`
    fragment BlogList on MarkdownRemarkConnection {
        nodes {
            excerpt(pruneLength: 150)
            frontmatter {
                title
                slug
                date(formatString: "MMMM D, YYYY")
                image {
                    childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED, width: 750, height: 210)
                    }
                }
            }
        }
        pageInfo {
            hasNextPage
        }
    }
`;