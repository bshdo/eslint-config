module.exports = {
  env: {
    browser: true,
  },
  plugins: ['react', 'react-hooks', 'tailwindcss'],
  extends: ['./unicorn.js', './index.js'].map(require.resolve).concat([
    // todo add later
    // 'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
  ]),
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/no-contradicting-classname': 'error',
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
