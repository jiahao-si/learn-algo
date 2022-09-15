/** @format */

module.exports = {
  root: true,
  extends: ['plugin:prettier/recommended'],
  plugins: [],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
};
