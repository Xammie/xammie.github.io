import React from 'react';
import { OutboundLink } from 'gatsby-plugin-gtag';

export default function Icon({
    children,
    component: Component = OutboundLink,
    ...props
}: any) {
    return (
        <Component
            {...props}
            className="flex-center clickable h-12 w-12 rounded-lg"
        >
            {children}
        </Component>
    );
}
