module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        //'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        'prettier',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint',
    ],
    plugins: ['prettier'],
    parserOptions: {
        ecmaVersion: 2017,
    },
    rules: {
        'prettier/prettier': 'error',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        '@typescript-eslint/ban-types': [
            'error',
            {
                extendDefaults: true,
                types: {
                    '{}': false,
                    Function: false,
                },
            },
        ],
        'vue/multi-word-component-names': 0,
    },
    overrides: [{
        files: ['**/__tests__/*.{t}s?(x)', '**/tests/unit/**/*.spec.{t}s?(x)'],
        env: {
            mocha: true,
        },
    }, ],
    globals: {
        defineProps: 'readonly',
        uni: true,
        wx: true
    },
};