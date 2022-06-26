import React from 'react';
import Item from './Item';
import { graphql } from 'gatsby';

export default function Blog({ title = 'Blog posts', data }) {
    return (
        <div className="mx-auto flex max-w-xl flex-col gap-3">
            <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
            {data.nodes.map((data, index) => (
                <Item data={data} key={index} />
            ))}
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
                        gatsbyImageData(
                            layout: CONSTRAINED
                            width: 750
                            height: 210
                            transformOptions: { cropFocus: NORTH }
                        )
                    }
                }
            }
        }
    }
`;
