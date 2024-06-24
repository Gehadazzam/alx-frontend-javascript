export default [
  {
    files: ['**/*.js', '**/*.jsx'],
    ignores: ['node_modules'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module'
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single']
      // Add your custom rules here
    }
  }
];
