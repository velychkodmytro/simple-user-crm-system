'use strict';

module.exports = {
    extends: [
        'plugin:promise/recommended',
        'eslint:recommended',
        'google',
        // "plugin:@typescript-eslint/eslint-recommended",
        // "plugin:@typescript-eslint/recommended",
    ],
    plugins: [
        'promise',
        // "@typescript-eslint"
    ],
    parserOptions: {
        ecmaVersion: '2018',
        sourceType: 'module',
    },
    env: {
        node: true,
        es6: true,
        mocha: true,
        mongo: true,
    },
    rules: {
        // it originally was es5
        // core part
        'arrow-parens': ['off', 'as-needed'],
        eqeqeq: ['warn', 'always'],
        'guard-for-in': 'warn',
        'handle-callback-err': 'error',
        'max-len': ['warn', 140],
        'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1, maxEOF: 0 }],
        'promise/always-return': 'off',
        'promise/catch-or-return': 'off',
        'new-cap': 'off',
        'new-parens': 'error',
        'no-await-in-loop': 'off',
        'no-return-await': 'error',
        'no-eval': 'error',
        'no-undefined': 'off',
        'no-eq-null': 'error',
        'no-floating-decimal': 'error',
        'no-template-curly-in-string': 'error',
        'no-prototype-builtins': 'error',
        'no-extra-parens': ['error', 'functions'],
        'no-implicit-coercion': [
            'error',
            {
                allow: ['!!'],
            },
        ],
        'no-implied-eval': 'error',
        'no-labels': 'error',
        'no-loop-func': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-octal-escape': 'error',
        'no-return-assign': ['error', 'always'],
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-void': 'error',
        'object-curly-spacing': ['warn', 'always'],
        'quote-props': ['error', 'as-needed'],
        'require-jsdoc': 'off',
        'require-await': 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'never',
            },
        ],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'unicode-bom': ['error', 'never'],
        // plugins part
        'promise/no-callback-in-promise': 'off',
        semi: ['error', 'always'],
        quotes: 'off',
        'no-underscore-dangle': 'off',
        'prefer-rest-params': 'off',
        indent: ['error', 4],
        'comma-dangle': 'off',
    },
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json',
            },
            plugins: ['@typescript-eslint'],
            extends: ['plugin:@typescript-eslint/recommended'],
            rules: {
                // TypeScript rules
                '@typescript-eslint/ban-ts-comment': 'off',
                '@typescript-eslint/no-var-requires': 'warn',
                '@typescript-eslint/no-explicit-any': 'warn',
                '@typescript-eslint/ban-types': 'warn',
                '@typescript-eslint/no-empty-interface': 'warn',
                '@typescript-eslint/no-namespace': 'warn',
            },
        },
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './test/tsconfig.json',
            },
            plugins: ['@typescript-eslint'],
            extends: ['plugin:@typescript-eslint/recommended'],
            rules: {
                // TypeScript rules
                '@typescript-eslint/ban-ts-comment': 'off',
                '@typescript-eslint/no-var-requires': 'warn',
                '@typescript-eslint/no-explicit-any': 'warn',
                '@typescript-eslint/ban-types': 'warn',
                '@typescript-eslint/no-empty-interface': 'warn',
                '@typescript-eslint/no-namespace': 'warn',
            },
        },
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './e2e/tsconfig.json',
            },
            plugins: ['@typescript-eslint'],
            extends: ['plugin:@typescript-eslint/recommended'],
            rules: {
                // TypeScript rules
                '@typescript-eslint/ban-ts-comment': 'off',
                '@typescript-eslint/no-var-requires': 'warn',
                '@typescript-eslint/no-explicit-any': 'warn',
                '@typescript-eslint/ban-types': 'warn',
                '@typescript-eslint/no-empty-interface': 'warn',
                '@typescript-eslint/no-namespace': 'warn',
            },
        },
    ],
};
