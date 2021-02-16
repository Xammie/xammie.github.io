import Link from "gatsby-link";
import React from "react";

export default function Item({data}) {
    return (
        <Link to={data.frontmatter.slug}
              className="rounded p-2 clickable block">
            <div className="flex flex-col md:flex-row justify-between md:items-center md:mb-2">
                <div className="font-bold text-lg md:mb-0 leading-tight">
                    {data.frontmatter.title}
                </div>
                <div className="hidden md:block text-sm dark:text-gray-400">
                    {data.frontmatter.date}
                </div>
            </div>
            <div className="truncate text-gray-500 dark:text-gray-400">{data.excerpt}</div>
            <div className="text-gray-500 dark:text-gray-400 md:hidden">{data.frontmatter.date}</div>
        </Link>
    )
}