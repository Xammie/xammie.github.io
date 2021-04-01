import React, {PropsWithChildren} from 'react';
import Link, {GatsbyLinkProps} from 'gatsby-link';

export default function Button({children, ...props}: PropsWithChildren<any | GatsbyLinkProps<any>>) {
    return (
        <Link
            {...props}
            className="p-2 text-reading dark:text-black bg-blue-700 hover:bg-blue-500 dark:bg-blue-400 dark:hover:bg-blue-500 font-bold focus:ring ring-blue-400 dark:ring-blue-600 transition duration-100 transition-colors shadow-md inline-block rounded">
            {children}
        </Link>
    );
}
