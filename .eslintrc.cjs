/**
 * @type {import('@typescript-eslint/utils/dist/ts-eslint').CLIEngine.Options}
 */
module.exports = {
  env: {
    node: true,
  },
  extends: ['airbnb-base', 'plugin:unicorn/recommended', 'plugin:playwright/playwright-test', 'prettier'],
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
      },
      plugins: ['@typescript-eslint', 'typescript-sort-keys'],
      rules: {
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never',
          },
        ],
        'typescript-sort-keys/interface': 'error',
      },
      settings: {
        'import/extensions': ['.ts'],
        'import/resolver': {
          node: {
            extensions: ['.ts'],
          },
          typescript: {},
        },
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['unicorn', 'sort-keys-fix', 'unused-imports'],
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
      },
    ],
    'sort-keys-fix/sort-keys-fix': 'error',
    'unused-imports/no-unused-imports': 'error',
  },
}
