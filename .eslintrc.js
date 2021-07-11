module.exports = {
  root: true,
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['jest', 'prettier'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react-native/no-inline-styles': 'off',
    'import/no-var-requires': 'off',
    'import/default': 'off',
    'import/first': 'error',
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'off',
    'import/order': [
      'warn',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'unknown',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'internal',
            pattern: '~/**/*',
          },
          {
            group: 'internal',
            pattern: 'helpers',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'object'],
      },
    ],
    'no-console': 'warn',
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'sort-imports': [
      'off',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'spaced-comment': ['warn', 'always', { block: { balanced: true } }],
    // Temporary overrides that we'll want to change back to errors
    'no-inner-declarations': 'warn',
    'no-prototype-builtins': 'warn',
    'no-redeclare': 'warn',
    'no-unused-vars': 'warn',
  },
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'],
    'import/resolver': {
      'babel-module': {},
    },
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
};
