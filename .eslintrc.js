module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'security', 'react', 'react-hooks'],
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
    'object-curly-newline': ['error', {
      ImportDeclaration: 'never',
    }],
    'no-underscore-dangle': 0,
    'max-len': 0,
    'implicit-arrow-linebreak': 0,
    'no-plusplus': 0,
    // JSX
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 1,
    // Typescript
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-empty-interface': 0,
  }
};
