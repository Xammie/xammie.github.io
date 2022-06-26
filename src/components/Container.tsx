import React from 'react';

export default function Container({
    children,
    ...props
}: React.PropsWithChildren<React.HTMLAttributes<any>>) {
    return (
        <div
            className="container mx-auto flex h-auto max-w-screen-md flex-col gap-5 p-5 md:gap-6 md:p-6"
            {...props}
        >
            {children}
        </div>
    );
}
