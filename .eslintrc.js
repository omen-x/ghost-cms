module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'security', 'react'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': [ '.js', '.jsx', '.ts', '.tsx' ],
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb-typescript',
  ],
  env: {
    node: true,
    es6: true,
    browser: true
  },
  rules: {
    'import/prefer-default-export': 0,
    'lines-between-class-members': ['error', 'always',  {exceptAfterSingleLine: true}],
    'consistent-return': 0,
    'import/no-unused-modules': [2, {'unusedExports': true}],
    // JSX
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    // Typescript
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
  }
};
