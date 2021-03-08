import React from 'react';
import ThemeToggle from "./ThemeToggle";

export default {
    title: 'Theme Toggle',
    decorators: [(Story) => <div className="text-background bg-gray-100 dark:text-reading dark:bg-background min-h-screen relative"><Story/></div>],
    parameters: {
        layout: 'fullscreen',
        themes: {
            disabled: true,
            clearable: true,
            list: [],
        },
    }
};

export {ThemeToggle};
