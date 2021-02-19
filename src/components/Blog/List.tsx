import React from "react";
import Card from "../Card";
import Button from "../Button";
import Item from "./Item";
import {graphql} from "gatsby";

export default function List({title = 'Blog posts', data}) {
    return (
        <Card>
            <h2 className="font-bold text-xl md:text-2xl">{title}</h2>
            <div className="space-y-3 mt-2">
                {data.nodes.map(({remark}, index) => <Item data={remark} key={index}/>)}
            </div>
            {data.pageInfo.hasNextPage &&
            <div className="flex justify-end mt-3">
                <Button to="/blog">
                    View all
                </Button>
            </div>}
        </Card>
    )
}

export const query = graphql`
    fragment BlogList on FileConnection {
        nodes {
            remark: childMarkdownRemark {
                excerpt(pruneLength: 150)
                frontmatter {
                    title
                    slug
                    date(formatString: "MMMM D, YYYY")
                    tags
                }
            }
        }
        pageInfo {
            hasNextPage
        }
    }
`