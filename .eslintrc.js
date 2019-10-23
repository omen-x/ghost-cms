module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb-typescript'
  ],
  env: {
    node: true,
    es6: true,
    browser: true
  },
  rules: {
    'import/prefer-default-export': 0,
    'lines-between-class-members': ['error', 'always',  {exceptAfterSingleLine: true}],
    '@typescript-eslint/no-var-requires': 0,
    'consistent-return': 1
  }
};
