module.exports = {
  plugins: ['unicorn'],
  extends: ['plugin:unicorn/all'],
  rules: {
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-keyword-prefix': 'off',
    'unicorn/no-null': 'off',
  },
};
