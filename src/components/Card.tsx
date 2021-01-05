import React from "react";
import classNames from "classnames";

export default function Card({children, className, ...props}: React.PropsWithChildren<React.HTMLAttributes<any>>) {
    return (
        <div
            className={classNames(className, "text-white bg-gradient-to-r from-gray-900 to-gray-800 p-3 md:p-5 rounded-xl mb-3 md:mb-5 shadow-md")}
            {...props}>
            {children}
        </div>
    )
}