module.exports = {
    content: [
        './content/*.mdx',
        './src/**/*.tsx',
        './*.js',
    ],
    plugins: [
        require('@tailwindcss/typography')({
            modifiers: [],
            className: 'markdown',
        }),
    ],
    theme: {
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
                            backgroundColor: theme('colors.gray.900'),
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
                            color: theme('colors.reading'),
                            backgroundColor: theme('colors.gray.900'),
                            borderRadius: theme('borderRadius.md'),
                            fontWeight: null,
                            hyphens: 'none',
                            padding: '4px',
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
