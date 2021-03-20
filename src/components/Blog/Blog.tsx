import React from "react";
import Surface from "../Surface";
import Button from "../Button/Button";
import Item from "./Item";
import {graphql} from "gatsby";

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
    )
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
                        fluid(maxWidth: 700, maxHeight: 200, quality: 70, toFormat: JPG)  {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
        pageInfo {
            hasNextPage
        }
    }
`