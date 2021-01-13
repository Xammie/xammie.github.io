import Link from "gatsby-link";
import React from "react";

export default function Item({data}) {
    return (
        <Link to={data.frontmatter.slug}
              className="rounded mt-3 p-2 bg-gray-800 md:bg-transparent hover:bg-gray-800 focus:bg-gray-800 focus:ring ring-blue-600 transition transition-colors duration-100 block">
            <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div className="title text-lg mb-2 md:mb-0">
                    {data.frontmatter.title}
                </div>
                <div className="text-sm">
                    {data.frontmatter.tags.map((tag, index) => (
                        <div key={index}
                             className="bg-blue-800 text-white text-sm mr-1 rounded px-1 inline-block">
                            {tag}
                        </div>
                    ))}
                    {data.frontmatter.date}
                </div>
            </div>
            <div className="truncate text-gray-500">{data.excerpt}</div>
        </Link>
    )
}