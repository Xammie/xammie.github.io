import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Layout({children}) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-background relative"
             style={{minHeight: '-webkit-fill-available'}}>
            {children}
            <ThemeToggle/>
        </div>
    );
}