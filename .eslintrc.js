module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        semi: true,
        trailingComma: 'es5',
      },
    ],
    'no-console': 'warn',
    'no-debugger': 'error',
    camelcase: ['error', { allow: ['id_token'] }],
    eqeqeq: 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    // 'unused-imports/no-unused-imports-ts': 'error',
    'prefer-const': [
      'error',
      { destructuring: 'any', ignoreReadBeforeAssign: false },
    ],
    'no-var': 'error',
  },
};
