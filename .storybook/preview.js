import {action} from "@storybook/addon-actions";
import {themes} from '@storybook/theming';
import React from 'react';
import Layout from "/src/components/Layout";
import '/src/css/index.css';
import '/src/css/prism.css';

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
    enqueue: () => null,
    hovering: () => null,
}

// This global variable is prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/"

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
window.___navigate = pathname => {
    action("NavigateTo:")(pathname)
}

const theme = {
    brandTitle: 'hoogenbos.ch',
    brandUrl: 'https://hoogenbos.ch',
}

export const parameters = {
    layout: 'fullscreen',
    actions: {
        argTypesRegex: '^on[A-Z].*',
    },
    backgrounds: {
        disable: true,
    },
    previewTabs: {
        'storybook/docs/panel': {
            hidden: true,
        },
    },
    darkMode: {
        stylePreview: true,
        classTarget: 'html',
        dark: {...themes.dark, ...theme},
        light: {...themes.normal, ...theme}
    }
};

export const decorators = [
    Story => <Layout><Story/></Layout>,
];
