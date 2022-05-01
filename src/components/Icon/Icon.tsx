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
            className="flex-center clickable aspect-square h-10 rounded-full"
        >
            {children}
        </Component>
    );
}
