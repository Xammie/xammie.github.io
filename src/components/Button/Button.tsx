import React, { PropsWithChildren } from 'react';
import Link, { GatsbyLinkProps } from 'gatsby-link';

export default function Button({ children, ...props }: PropsWithChildren<any | GatsbyLinkProps<any>>) {
    return (
        <Link
            {...props}
            className="inline-block p-2 font-bold bg-blue-700 rounded ring-blue-400 shadow-md transition transition-colors duration-100 dark:text-black dark:bg-blue-400 dark:ring-blue-600 hover:bg-blue-500 focus:ring text-reading dark:hover:bg-blue-500">
            {children}
        </Link>
    );
}
