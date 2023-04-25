module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "airbnb-base"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "script",
  },
  rules: {
    "no-comma-dangle": 0,
    "no-cond-assign": 0, // allow assignment operators in conditional expressions
    "no-constant-condition": 0, // allow constant expressions in conditions
    "no-console": 0, // allow the use of console method
    semi: 0,
    singleQuote: 0,
    quotes: 0,
    "no-plusplus": 0,
    strict: 0,
  },
};
