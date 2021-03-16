import React from "react";
import classNames from "classnames";

interface Props extends React.PropsWithChildren<React.HTMLAttributes<any>> {
    rounded?: string
}

export default function Surface({children, className, rounded = "rounded-xl", ...props}: Props) {
    return (
        <div
            className={classNames(className, "text-surface dark:text-reading bg-white dark:bg-surface p-3 md:p-5 mb-5 shadow-md", rounded)}
            {...props}>
            {children}
        </div>
    )
}