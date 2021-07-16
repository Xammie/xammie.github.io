import React from 'react';
import classNames from 'classnames';

export default function Surface({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={classNames(className, 'text-surface dark:text-reading bg-white dark:bg-surface -mx-5 md:mx-0 px-4 py-5 md:p-6 md:mx-5 lg:mx-0 shadow-md md:rounded-xl')}
            {...props}>
            {children}
        </div>
    );
}