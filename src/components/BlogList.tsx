import React from "react";
import Link from "gatsby-link";
import Card from "./Card";
import Button from "./Button";

export default function BlogList({title = 'Blog', data}) {
    return (
        <Card>
            <h2 className="title text-2xl">{title}</h2>
            {data.nodes.map(({remark}, index) => (
                <Link key={index}
                      to={remark.frontmatter.slug}
                      className="rounded mt-3 p-2 hover:bg-gray-800 focus:bg-gray-800 focus:ring ring-blue-600 transition transition-colors duration-100 block">
                    <div className="flex flex-col md:flex-row justify-between md:items-center">
                        <div className="title text-lg mb-2 md:mb-0">
                            {remark.frontmatter.title}
                        </div>
                        <div className="text-sm">
                            {remark.frontmatter.tags.map((tag, index) => (
                                <span key={index}
                                      className="bg-blue-800 text-white text-sm mr-1 rounded px-1">
                                        {tag}
                                    </span>
                            ))}
                            {remark.frontmatter.date}
                        </div>
                    </div>
                    <div className="truncate text-gray-500">{remark.excerpt}</div>
                </Link>
            ))}
            {data.pageInfo.hasNextPage &&
            <div className="flex justify-end mt-2">
                <Button to="/blog">
                    View all
                </Button>
            </div>}
        </Card>
    )
}