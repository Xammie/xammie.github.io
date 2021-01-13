import React from "react";
import {OutboundLink} from "gatsby-plugin-gtag";

export default function Icon({children, ...props}: any) {
    return (
        <OutboundLink
            {...props}
            className="flex-center w-12 h-12 rounded transition transition-colors duration-100 hover:bg-blue-900 focus:bg-blue-900 focus:bg-gray-900 focus:ring-4 focus:ring-blue-700">
            {children}
        </OutboundLink>
    );
}
