import React from 'react';
import ThemeToggle from './ThemeToggle';

export default {
    title: 'Theme Toggle',
    decorators: [Story => <div className="p-8"><Story/></div>],
    parameters: {
        layout: 'fullscreen',
    },
};

export {ThemeToggle};
