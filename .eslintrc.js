module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/recommended',
  ],
  plugins: [
    'react-hooks',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-unused-vars': ['error', {
      ignoreRestSiblings: true,
    }],
    // prop validation is unnecessary for this workshop
    'react/prop-types': 'off',
    // Next.js doesn't require React to be in scope for JSX
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  overrides: [
    {
      files: 'src/**/',
    },
  ],
}
