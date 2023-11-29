module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/eslint-recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:react/jsx-runtime'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
}
