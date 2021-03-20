import React from "react";
import Surface from "../Surface";

interface Props {
    title: string
    date: string
    content: string
}

export default function Article({title, date, content}: Props) {
    return (
        <Surface>
            <p className="text-sm whitespace-nowrap text-gray-500 dark:text-gray-300 mb-3">
                {date}
            </p>
            <h1 className="text-3xl text-black dark:text-reading leading-8 font-extrabold tracking-tight sm:text-4xl mb-8 prose mx-auto">
                {title}
            </h1>
            <article
                className="text-base prose dark:prose-dark mx-auto leading-relaxed"
                dangerouslySetInnerHTML={{__html: content}}/>
        </Surface>
    );
}
