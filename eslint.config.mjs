import eslintPluginReact from 'eslint-plugin-react';

export default [
  {
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
];
