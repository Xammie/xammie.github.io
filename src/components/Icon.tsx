import React from "react";
import {OutboundLink} from "gatsby-plugin-gtag";

export default function Icon({children, ...props}: any) {
    return (
        <OutboundLink
            {...props}
            className="flex-center w-12 h-12 rounded-lg clickable">
            {children}
        </OutboundLink>
    );
}
