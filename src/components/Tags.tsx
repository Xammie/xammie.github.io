import React from "react";

export default function Tags({tags}) {
    return (
        <div className="grid grid-flow-col gap-2">
            {tags.map((tag, index) => (
                <div key={index}
                     className="px-2 py-1 bg-blue-800 text-white rounded-full inline-block text-sm leading-none truncate">
                    {tag}
                </div>
            ))}
        </div>
    )
}