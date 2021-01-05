import React from "react";
import Link, {GatsbyLinkProps} from "gatsby-link";

export default function Button({children, ...props}: GatsbyLinkProps<any>) {
    return (
        <Link
            {...props}
            className="p-2 text-black bg-white font-bold border-2 border-white bg-gradient-to-r from-white to-gray-100 hover:bg-gray-400 focus:ring ring-blue-600 transition duration-100 transition-colors shadow-md transform -skew-x-6 inline-block rounded">
            {children}
        </Link>
    );
}
