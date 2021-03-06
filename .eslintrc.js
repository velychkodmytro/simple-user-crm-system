module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: ['google'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
    },
    plugins: ['@typescript-eslint'],
    rules: {
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
                asyncArrow: 'always',
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
};
