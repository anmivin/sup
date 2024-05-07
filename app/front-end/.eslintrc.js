module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['import', '@typescript-eslint', 'react', 'prettier'],
  extends: ['next/core-web-vitals'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './']],
        extensions: ['.ts', '.js', '.tsx'],
      },
    },
  },
  rules: {
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],

    'react/jsx-curly-brace-presence': ['error'],
    'react/jsx-tag-spacing': ['error'],
    'jsx-quotes': ['error'],

    'react/react-in-jsx-scope': ['off'],

    'no-nested-ternary': ['error'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],

      rules: {
        '@typescript-eslint/no-unnecessary-condition': ['warn'],
      },

      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
