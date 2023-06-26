module.exports = {
    env: {
        es2022: true,
        node: true
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module'
    },
    ignorePatterns: [
        'dist/*',
        'src/generated/*',
        'bin/*'
    ],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',

        // Error on unused vars
        '@typescript-eslint/no-unused-vars': 'error',
        // Warn for debug require for now
        '@typescript-eslint/no-var-requires': 'warn',
        // 4 space indent
        indent: ['error', 4],
        // Single quotes for strings
        quotes: ['error', 'single', { avoidEscape: true }],
        // Always require semicolons - https://stackoverflow.com/questions/59790657/eslint-says-that-semicolons-are-missing-even-after-adding-them
        '@typescript-eslint/semi': ['error', 'always'],
        // Don't use 'var'
        'no-var': 'error',
        // Only use quotes in object literal keys as needed
        'quote-props': ['error', 'as-needed'],
        // Don't allow trailing spaces after a line
        'no-trailing-spaces': 'error',
        // Require spaces before and after keywords (like "if")
        'keyword-spacing': 'error',
        // Don't allow unused variables, but allow unused function args (e.g. in callbacks) and global vars
        'no-unused-vars': ['error', {vars: 'local', args: 'none', varsIgnorePattern: '^_'}],
        // Require using dot notation (obj.prop instead of obj['prop']) where possible
        'dot-notation': 'error',
        // Don't use spaces before parens in anonymous or named functions
        'space-before-function-paren': ['error', {anonymous: 'never', named: 'never', asyncArrow: 'always'}],
        // Will be enabling eqeqeq for now ...
        eqeqeq: 'error',
        // Always require parens in arrow functions
        'arrow-parens': ['error', 'always']
    }
};
