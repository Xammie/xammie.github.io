import '../src/css/index.css';
import '../src/css/prism.css';
import {action} from "@storybook/addon-actions";

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

export const parameters = {
    actions: {
        argTypesRegex: '^on[A-Z].*',
    },
    themes: {
        clearable: false,
        list: [
            {
                name: 'Dark',
                class: ['dark', 'text-reading', 'bg-background'],
                color: '#000000',
                default: true,
            },
            {
                name: 'Light',
                class: ['text-background', 'bg-gray-100'],
                color: '#ffffff',
            },
        ],
    },
    backgrounds: {
        disable: true,
    },
}