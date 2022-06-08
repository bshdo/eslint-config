module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-airbnb-base/rules/best-practices',
    'eslint-config-airbnb-base/rules/errors',
    'eslint-config-airbnb-base/rules/node',
    'eslint-config-airbnb-base/rules/style',
    'eslint-config-airbnb-base/rules/variables',
    'eslint-config-airbnb-base/rules/es6'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    tsconfigRootDir: __dirname
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 0,
    'no-console': 1,
    'function-paren-newline': ['warn', { minItems: 3 }],
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/no-use-before-define': 1,
    '@typescript-eslint/explicit-function-return-type': 1,
    camelcase: 0,
    '@typescript-eslint/no-var-requires': 1,
    'consistent-return': 1,
    semi: 1,
    'comma-dangle': 0,
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    'import/no-extraneous-dependencies': 1,
    'import/order': 1,
    'object-shorthand': 1,
    'operator-linebreak': 1,
    'no-return-await': 1,
    'no-useless-escape': 1,
    'no-useless-return': 1,
    'require-await': 1,
    'no-unused-vars': 1,
    'no-shadow': 0,
    'no-nested-ternary': 0,
    '@typescript-eslint/no-shadow': 1,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/']
      },
      typescript: {}
    }
  }
};
