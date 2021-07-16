import React from 'react';

export default function Container({ children, ...props }: React.PropsWithChildren<React.HTMLAttributes<any>>) {
    return (
        <div className="container flex flex-col p-5 space-y-5 max-w-screen-md min-h-screen md:p-6 md:space-y-6"
            {...props}>
            {children}
        </div>
    );
}