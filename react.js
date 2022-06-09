module.exports = {
  env: {
    browser: true,
  },
  plugins: ['react', 'react-hooks'],
  extends: [
    // todo add later
    // 'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    // it includes prettier, and it needs to be the last.
    './index.js',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'off',
    'react/prefer-stateless-function': 'error',
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
          '/^_.+$/', // private methods
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['off'],
      },
    },
  ],
  settings: {
    react: { version: 'detect' }, // Tells eslint-plugin-react to automatically detect the version of React to use
    'import/resolver': {
      typescript: {},
    },
  },
};
