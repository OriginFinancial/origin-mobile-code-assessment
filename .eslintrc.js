// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'airbnb', 'airbnb-typescript', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: false,
      },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    'jsx-quotes': ['error', 'prefer-double'],
    camelcase: ['error', { properties: 'always' }],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/style-prop-object': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'no-console': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['babel.config.js', 'jest.config.js', 'metro.config.js', '.eslintrc.js'],
};
