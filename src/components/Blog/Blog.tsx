import React from 'react';
import Button from '../Button/Button';
import Item from './Item';
import { graphql } from 'gatsby';

export default function Blog({ title = 'Blog posts', data }) {
    return (
        <div>
            <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
            <div className="mt-2 space-y-3">
                {data.nodes.map((data, index) => <Item data={data} key={index}/>)}
            </div>
            {data.pageInfo.hasNextPage &&
            <div className="flex justify-end mt-3">
                <Button to="/blog">
                    View all
                </Button>
            </div>}
        </div>
    );
}

export const query = graphql`
    fragment BlogList on MdxConnection {
        nodes {
            excerpt(pruneLength: 150)
            slug
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                image {
                    childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED, width: 750, height: 210, transformOptions: {
                            cropFocus: NORTH
                        })
                    }
                }
            }
        }
        pageInfo {
            hasNextPage
        }
    }
`;