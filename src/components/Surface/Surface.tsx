import React from 'react';
import classNames from 'classnames';

interface Props extends React.PropsWithChildren<React.HTMLAttributes<any>> {
    rounded?: string
}

export default function Surface({children, className, rounded = 'md:rounded-xl', ...props}: Props) {
    return (
        <div
            className={classNames(className, 'text-surface dark:text-reading bg-white dark:bg-surface px-4 py-5 md:p-6 md:mx-5 lg:mx-0 shadow', rounded)}
            {...props}>
            {children}
        </div>
    );
}