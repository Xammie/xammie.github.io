import React from "react";
import {OutboundLink} from "gatsby-plugin-gtag";

export default function Icon({children, component: Component = OutboundLink, ...props}: any) {
    return (
        <Component
            {...props}
            className="flex-center w-12 h-12 rounded-lg clickable">
            {children}
        </Component>
    );
}
