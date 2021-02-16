import React from "react"
import classNames from "classnames";

export default function Profile({image, className}) {
    return (
        <div className={classNames(className, "rounded-full shadow-md overflow-hidden")}>
            {image}
        </div>
    );
}