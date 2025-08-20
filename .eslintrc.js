module.exports = {
  "extends": ["eslint-config-hof/default"],
  "env": {
    "node": true,
    "es6": true,
    "mocha": true
  },
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "rules": {
    "no-console": "warn",
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "prefer-const": "error",
    "no-var": "error"
  },
  "overrides": [
    {
      "files": ["test/**/*.js", "**/*.spec.js"],
      "env": {
        "mocha": true
      },
      "rules": {
        "no-unused-expressions": "off"
      }
    },
    {
      "files": ["dev/**/*.ts", "**/*.spec.ts"],
      "parser": "@typescript-eslint/parser",
      "plugins": ["@typescript-eslint"],
      "extends": ["plugin:@typescript-eslint/recommended"]
    }
  ]
};
