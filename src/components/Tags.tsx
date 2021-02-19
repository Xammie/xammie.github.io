import React from "react";

export default function Tags({tags}) {
    return (
        <div className="space-x-2 py-1 md:py-0">
            {tags.map((tag, index) => (
                <div key={index}
                     className="px-2 py-1 bg-gray-200 dark:bg-gray-900 rounded-md inline-block text-sm leading-none">
                    {tag}
                </div>
            ))}
        </div>
    )
}