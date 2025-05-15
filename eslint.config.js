import js from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react-hooks/exhaustive-deps': ['off'],
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          useTabs: false,
          tabWidth: 2,
          trailingComma: 'es5',
          semi: true,
          singleQuote: true,
          bracketSpacing: true,
          arrowParens: 'always',
          jsxSingleQuote: false,
          bracketSameLine: false,
          endOfLine: 'lf',
        },
      ],
    },
  },
  eslintPluginPrettierRecommended
);
