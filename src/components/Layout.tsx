import React from "react";

export default function Layout({children}) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-background"
             style={{minHeight: '-webkit-fill-available'}}>
            {children}
        </div>
    );
}