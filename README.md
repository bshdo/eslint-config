## Installation

```sh
yarn add -D @bshdo/eslint-config @bshdo/prettier-config @rushstack/eslint-patch prettier
```

Create `.eslintrc.js` file with following code:
```javascript
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: ['@bshdo/eslint-config'],
};
```

Create a file called `.prettierrc.js`
```javascript
module.exports = require('@bshdo/prettier-config');
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
