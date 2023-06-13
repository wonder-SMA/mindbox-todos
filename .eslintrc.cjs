module.exports = {
  env: {
    commonjs: true,
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2',
    },
    'import/resolver': {
      alias: {
        map: [
          ['@/main', './src/main'],
          ['@/components', './src/components'],
          ['@/helpers', './src/helpers'],
          ['@/store', './src/store'],
          ['@/styles', './src/styles'],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
};
