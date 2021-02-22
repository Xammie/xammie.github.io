import React from "react";
import classNames from "classnames";

export default function Card({children, className, ...props}: React.PropsWithChildren<React.HTMLAttributes<any>>) {
    return (
        <div
            className={classNames(className, "text-surface dark:text-reading bg-white dark:bg-surface p-3 md:p-5 rounded-xl mb-5 shadow-md")}
            {...props}>
            {children}
        </div>
    )
}