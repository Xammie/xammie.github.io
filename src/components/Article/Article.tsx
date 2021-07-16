import React from 'react';
import Surface from '../Surface';
import { MDXRenderer } from 'gatsby-plugin-mdx';

interface Props {
    title: string
    date: string
    content: string
}

export default function Article({ title, date, content }: Props) {
    return (
        <Surface>
            <p className="mb-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-300">
                {date}
            </p>
            <h1 className="mx-auto mb-8 text-3xl font-extrabold tracking-tight leading-8 text-black sm:text-4xl prose dark:text-reading">
                {title}
            </h1>
            <article
                className="mx-auto text-base leading-relaxed prose dark:prose-dark">
                <MDXRenderer>{content}</MDXRenderer>
            </article>
        </Surface>
    );
}
