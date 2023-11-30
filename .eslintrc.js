module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:prettier/recommended',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next'],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        //  ===========================
        'prettier/prettier': 0,
        'object-curly-newline': 'off',
        semi: 'off',
        'func-names': 'off',
        //   'max-len': ['error', { ignoreComments: true }],
        'max-len': 'off',
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'consistent-return': 'off',
        'no-use-before-define': 'off', // a lot off errors
        radix: 'error',
        //   indent: ['error', 4],
        'padded-blocks': [
            'off',
            { blocks: 'never', classes: 'always', switches: 'never' },
        ],
        'import/no-extraneous-dependencies': 'off',
        'import/no-cycle': 'off',
        'import/no-duplicates': 'off',
        'no-prototype-builtins': 'error',
        'no-restricted-syntax': 'off', // need sort it out
        //   'implicit-arrow-linebreak': ['error', 'below'],
        camelcase: 'off',
        'max-classes-per-file': ['error', { max: 2 }],
        'no-shadow': 'off', // a lot of errors
        'new-cap': 'off',
        'no-lonely-if': 'error',
        'no-useless-escape': 'error',
        'no-return-await': 'error',
        'no-nested-ternary': 'off', // a ? xxx : bbb ? ccc : ddd
        'no-unused-expressions': 'error',
        'no-bitwise': 'off',
        'computed-property-spacing': 'off',
        'guard-for-in': 'error',
        'no-unused-vars': 'off',
        'no-throw-literal': 'off',
        'no-trailing-spaces': 'off',
        'no-return-assign': 'error',
        'no-useless-return': 'off',
        'no-empty': ['error', { allowEmptyCatch: true }],
        'no-fallthrough': 'error',
        'operator-assignment': 'off',
        'no-console': 'off',
        'no-alert': 'off', // we use window.prompt
        'no-constant-condition': 'off',
        'no-unreachable': 'off',
        'no-multi-assign': 'error',
        'no-tabs': 'off',
        'array-callback-return': 'off',
        'no-debugger': 'warn',
        'default-case': 'error',
        'import/named': 'off',
        'no-undef': 'off',
        'no-underscore-dangle': 'off',
        'prefer-promise-reject-errors': 'off',
        'prefer-destructuring': 'off',
        'prefer-rest-params': 'off',
        'prefer-const': 'off',
        'import/prefer-default-export': 'off',
        'import/order': 'off',
        'import/namespace': 'off',
        'import/no-unresolved': 'off',
        'class-methods-use-this': 'off',
        'no-param-reassign': ['off', { props: false }],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'import/extensions': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'react/button-has-type': 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true }],
		  'no-restricted-globals': 'off'
    },
    globals: {
        __IS_DEV__: true,
    },
}
