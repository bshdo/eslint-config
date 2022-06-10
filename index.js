module.exports = {
  env: {
    es6: true,
    node: true,
  },
  // todo import organizer
  plugins: ['import', '@typescript-eslint', 'prettier'],
  extends: [
    // todo - eslint-plugin-jest
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'array-callback-return': 'error',
    // Enforce curly braces even for one liners.
    curly: ['error', 'all'],

    'no-console': 'warn',

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    // this is noisy while refactoring.
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        // Allow `let { ignored, ...rest} = foo`.
        ignoreRestSiblings: true,
      },
    ],

    // we're all grown ups here...
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',

    'consistent-return': 'error',
    'constructor-super': 'error',

    'default-case': 'error',
    'default-case-last': 'error',

    'dot-notation': 'error',
    'func-names': 'error',

    'max-params': ['error', 7],
    'max-statements-per-line': ['error', { max: 1 }],

    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.*', '**/.storybook/**/*.*'],
        peerDependencies: true,
      },
    ],
    'import/order': 'error',
    'import/prefer-default-export': ['off'],
    'object-shorthand': 'warn',
    'no-constant-condition': 'error',
    'no-return-await': 'warn',
    'no-restricted-exports': 'off',
    'no-useless-escape': 'warn',
    'no-useless-return': 'warn',
    'no-await-in-loop': 'error',
    'require-await': 'error',
    'no-nested-ternary': 'off',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
