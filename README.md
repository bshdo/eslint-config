## Installation

```sh
yarn add -D @bshdo/eslint-config @rushstack/eslint-patch eslint prettier
```

Create `.eslintrc.js` file with following code:

```javascript
// This is a workaround for: https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  // use @bshdo/eslint-config/react for React/NextJs projects
  extends: ['@bshdo/eslint-config'],
};
```

### For monorepos, use this configuration
```javascript
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['@bshdo/eslint-config'],
  rules: {
    "import/no-extraneous-dependencies": 'off'
  }
};

```

Create a file called `.prettierrc.js`

```javascript
module.exports = require('@bshdo/eslint-config/prettier.config');
```

Add the following script to your package.json

```
"lint": "eslint '*/**/*.{js,ts,tsx}'"
"lint:fix": "eslint '*/**/*.{js,ts,tsx}' --fix"
```

## VSCode autoformat

Add the following snippet to your settings.json to autoformat your code on every save

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Note

The package currently makes use of a patched version of eslint (@rushstack/eslint-patch), which eliminates the need of installing all used eslint plugins in the target repository as well. Therefore it's important to load the patched version using the .eslintrcjs snippet from above
