import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

interface Props {
    title: string;
    date: string;
    content: string;
}

export default function Article({ title, date, content }: Props) {
    return (
        <main className="bg-white px-4 py-5 text-surface dark:bg-surface dark:text-reading md:p-6">
            <div className="mx-auto flex w-full max-w-[65ch] flex-col gap-6">
                <div className="flex flex-col gap-1">
                    <p className="whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        {date}
                    </p>
                    <h1 className="text-3xl font-extrabold leading-8 tracking-tight text-black dark:text-reading sm:text-4xl">
                        {title}
                    </h1>
                </div>
                <article className="markdown mx-auto text-base leading-relaxed dark:markdown-dark w-full">
                    <MDXRenderer>{content}</MDXRenderer>
                </article>
            </div>
        </main>
    );
}
