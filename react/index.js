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
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/hooks',
    'eslint-config-airbnb-base/rules/style',
    'eslint-config-airbnb-base/rules/variables',
    'eslint-config-airbnb-base/rules/es6',
    'plugin:react-hooks/recommended'
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
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
    'react/prefer-stateless-function': 'off',
    'react/jsx-no-bind': 'off',
    'import/no-extraneous-dependencies': 1,
    'import/order': 1,
    'object-shorthand': 1,
    'operator-linebreak': 1,
    'no-return-await': 1,
    'no-useless-escape': 1,
    'no-useless-return': 1,
    'comma-dangle': 0,
    'require-await': 1,
    'no-unused-vars': 1,
    'import/prefer-default-export': 0,
    'no-console': 1,
    '@typescript-eslint/ban-ts-ignore': 1,
    '@typescript-eslint/no-use-before-define': 1,
    '@typescript-eslint/explicit-function-return-type': 1,
    '@typescript-eslint/camelcase': 1,
    '@typescript-eslint/no-var-requires': 1,
    'import/extensions': 0,
    'consistent-return': 1,
    'react/sort-comp': [
      'error',
      {
        order: [
          'displayName',
          'statics',
          'static-methods',
          'defaultProps',
          'state',
          'constructor',
          'render',
          '/^(_)?render.+$/', // any auxiliary render methods
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          '/^on[A-Z].+$/', // event handlers
          'everything-else',
          '/^_.+$/' // private methods
        ]
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
