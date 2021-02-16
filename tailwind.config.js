module.exports = {
    purge: [
        './src/**/*.tsx',
        './*.js',
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
        },
    },
    darkMode: 'class',
    variants: {
        extend: {
            display: ['dark'],
        }
    }
}
