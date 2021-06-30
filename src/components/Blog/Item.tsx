import Link from 'gatsby-link';
import React from 'react';
import {GatsbyImage} from 'gatsby-plugin-image';

export default function Item({data}) {
    return (
        <Link to={data.frontmatter.slug}
            className="rounded-lg -mx-2 p-2 clickable block flex flex-col hover:shadow-md">
            {data.frontmatter.image?.childImageSharp &&
            <GatsbyImage className="rounded-lg shadow-md mb-3"
                alt={data.frontmatter.title}
                image={data.frontmatter.image.childImageSharp.gatsbyImageData}/>}
            <div className="flex justify-between md:mb-1">
                <div className="font-bold text-lg md:mb-0 leading-tight">
                    {data.frontmatter.title}
                </div>
                <div className="hidden md:block text-sm dark:text-gray-400">
                    {data.frontmatter.date}
                </div>
            </div>
            <div className="truncate text-gray-500 dark:text-gray-400">{data.excerpt}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 md:hidden">{data.frontmatter.date}</div>
        </Link>
    );
}