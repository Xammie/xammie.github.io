import Link from 'gatsby-link';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Item({ data }) {
    return (
        <Link
            to={`/blog/${data.slug}`}
            className="flex flex-col rounded-xl bg-white shadow-md ring-blue-200 transition transition-colors duration-100 hover:bg-blue-100 focus:bg-blue-300 focus:ring dark:bg-surface dark:ring-blue-600 dark:hover:bg-gray-800 dark:focus:bg-blue-900"
        >
            {data.frontmatter.image?.childImageSharp && (
                <GatsbyImage
                    className="rounded-t-xl shadow-md"
                    alt={data.frontmatter.title}
                    image={
                        data.frontmatter.image.childImageSharp.gatsbyImageData
                    }
                />
            )}
            <div className="p-5">
                <div className="flex justify-between">
                    <div className="text-lg font-bold leading-tight md:mb-0">
                        {data.frontmatter.title}
                    </div>
                    <div className="hidden text-sm dark:text-gray-400 md:block">
                        {data.frontmatter.date}
                    </div>
                </div>
                <div className="truncate text-gray-500 dark:text-gray-400">
                    {data.excerpt}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 md:hidden">
                    {data.frontmatter.date}
                </div>
            </div>
        </Link>
    );
}
