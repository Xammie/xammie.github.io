module.exports = {
    env: {
        'browser': true,
        'es2021': true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'prettier',
    ],
    rules: {
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react/no-unescaped-entities': 'off',
        'object-curly-spacing': ['warn', 'always'],
        'array-bracket-spacing': ['warn', 'never'],
        'prettier/prettier': 'error',
    },
    settings: {
        react: {
            "version": "detect",
        },
    }
};
