import React from 'react';

export default function Container({children, ...props}: React.PropsWithChildren<React.HTMLAttributes<any>>) {
    return (
        <div className="container min-h-screen max-w-screen-md pb-5 md:py-6 flex flex-col space-y-5 md:space-y-6"
            {...props}>
            {children}
        </div>
    );
}