module.exports = {
  env: {
    es6: true,
    node: true,
  },
  plugins: [
    // runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
    'prettier',
  ],
  extends: [
    // todo - eslint-plugin-jest
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'max-params': ['warn', 5],

    'no-console': 'warn',
    'object-shorthand': 'warn',
    'no-nested-ternary': 'off',
    'no-restricted-exports': 'off',

    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        // Allow `let { ignored, ...rest} = foo`.
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': ['error', {
      'functions': false,
    }],

    'import/prefer-default-export': ['off'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.*', '**/.storybook/**/*.*'],
        peerDependencies: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
