import React from 'react';

export default function Layout({children}) {
    return (
        <div className="bg-gray-100 text-background dark:text-reading dark:bg-background min-h-screen">
            {children}
        </div>
    );
}