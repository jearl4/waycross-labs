import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import astro from 'eslint-plugin-astro';
import globals from 'globals';

const unusedVarsRule = [
  'error',
  {
    argsIgnorePattern: '^_',
    varsIgnorePattern: '^_',
    caughtErrorsIgnorePattern: '^_',
  },
];

export default [
  js.configs.recommended,
  ...astro.configs.recommended,

  // TypeScript files only — .astro is handled by the astro plugin's own parser
  {
    files: ['src/**/*.{ts,tsx,mts,cts}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: { ...globals.browser },
    },
    plugins: { '@typescript-eslint': tseslint },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': unusedVarsRule,
    },
  },

  // Astro frontmatter / inline scripts run in the browser
  {
    files: ['src/**/*.astro'],
    languageOptions: {
      globals: { ...globals.browser },
    },
    rules: {
      'no-unused-vars': unusedVarsRule,
    },
  },

  // Build/tooling scripts (node context)
  {
    files: ['scripts/**/*.{js,mjs,ts}', '*.{js,mjs,cjs}', 'astro.config.mjs', 'eslint.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.node },
    },
  },

  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**'],
  },
];
