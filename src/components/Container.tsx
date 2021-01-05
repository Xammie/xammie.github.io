import React from "react";
import classNames from "classnames";

export default function Container({children, className, ...props}: React.PropsWithChildren<React.HTMLAttributes<any>>) {
    return (
        <div className={classNames(className, "container px-2 md:px-5 min-h-screen max-w-screen-md p-5")}
             {...props}>
            {children}
        </div>
    )
}