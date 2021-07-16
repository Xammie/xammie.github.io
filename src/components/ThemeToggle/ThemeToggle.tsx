import React, { useEffect, useState } from 'react';
import Sun from '../../img/sun.svg';
import Moon from '../../img/moon.svg';

export default function ThemeToggle() {
    const [isDarkMode, setDarkMode] = useState(undefined);

    useEffect(() => {
        setDarkMode(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches));
    }, []);

    const onToggle = () => {
        localStorage.theme = isDarkMode ? 'light' : 'dark';

        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }

        setDarkMode(!isDarkMode);
    };

    return (
        <button
            className="p-2 rounded-full focus:outline-none clickable"
            onClick={onToggle}
            aria-label="Switch theme"
            aria-checked={isDarkMode ? 'true' : 'false'}
            role="switch"
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
            {isDarkMode ? <Sun className="w-8 h-8"/> : <Moon className="w-8 h-8"/>}
        </button>
    );
}