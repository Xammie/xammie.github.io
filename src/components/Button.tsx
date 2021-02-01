import React, {PropsWithChildren} from "react";
import Link, {GatsbyLinkProps} from "gatsby-link";

export default function Button({children, ...props}: PropsWithChildren<any | GatsbyLinkProps<any>>) {
    return (
        <Link
            {...props}
            className="p-2 text-black bg-reading font-bold clickable shadow-md inline-block rounded">
            {children}
        </Link>
    );
}
