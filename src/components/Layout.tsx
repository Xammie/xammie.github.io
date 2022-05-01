import React from 'react';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100 text-background dark:bg-background dark:text-reading">
            {children}
        </div>
    );
}
