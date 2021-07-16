import Link from 'gatsby-link';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Item({ data }) {
    return (
        <Link to={`/blog/${data.slug}/`}
            className="block flex flex-col p-5 -mx-5 bg-white ring-blue-200 shadow-md transition transition-colors duration-100 md:p-6 md:mx-0 md:rounded-xl dark:ring-blue-600 hover:bg-blue-100 focus:bg-blue-300 focus:ring dark:bg-surface dark:focus:bg-blue-900">
            {data.frontmatter.image?.childImageSharp &&
            <GatsbyImage className="mb-3 rounded-xl shadow-md"
                alt={data.frontmatter.title}
                image={data.frontmatter.image.childImageSharp.gatsbyImageData}/>}
            <div className="flex justify-between md:mb-1">
                <div className="text-lg font-bold leading-tight md:mb-0">
                    {data.frontmatter.title}
                </div>
                <div className="hidden text-sm md:block dark:text-gray-400">
                    {data.frontmatter.date}
                </div>
            </div>
            <div className="text-gray-500 dark:text-gray-400 truncate">{data.excerpt}</div>
            <div className="text-sm text-gray-500 md:hidden dark:text-gray-400">{data.frontmatter.date}</div>
        </Link>
    );
}