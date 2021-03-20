module.exports = {
    purge: [
        './src/**/*.tsx',
        './*.js',
        './.storybook/*.js',
    ],
    darkMode: 'class',
    variants: {
        extend: {
            display: ['dark'],
            typography: ['dark'],
        }
    },
    plugins: [
        require('@tailwindcss/typography')({modifiers: []}),
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                'background': '#121212',
                'surface': '#303030',
                'reading': '#ffffffDE',
            },
            typography: theme => ({
                DEFAULT: {
                    css: {
                        img: {
                            borderRadius: theme('borderRadius.lg'),
                            boxShadow: theme('boxShadow.lg'),
                        },
                        pre: {
                            borderRadius: theme('borderRadius.lg'),
                        },
                        strong: {
                            color: null,
                            fontWeight: '600',
                        },
                        a: {
                            color: theme('colors.blue.600'),
                        },
                        code: {
                            color: null,
                            fontWeight: null,
                        },
                        'code::before': {
                            'content': null,
                        },
                        'code::after': {
                            'content': null,
                        },
                    },
                },
                dark: {
                    css: {
                        color: theme('colors.gray.200'),
                        a: {
                            color: theme('colors.blue.400'),
                        },
                        h1: {
                            color: theme('colors.reading'),
                        },
                        h2: {
                            color: theme('colors.reading'),
                        },
                        h3: {
                            color: theme('colors.reading'),
                        },
                        h4: {
                            color: theme('colors.reading'),
                        },
                        'ol > li::before': {
                            color: theme('colors.gray.300'),
                        },
                        blockquote: {
                            color: theme('colors.gray.200'),
                            borderLeftColor: theme('colors.gray.200'),
                        },
                    }
                }
            }),
        },
    },
}
