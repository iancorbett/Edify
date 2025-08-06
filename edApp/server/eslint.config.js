import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
    rules: {
      'no-console': 'off', // allow console.log (helpful for server logs)
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // ignore unused params starting with _
      'consistent-return': 'warn', // ensures consistent return behavior in functions
      'eqeqeq': ['error', 'always'], // use === over ==
      'no-undef': 'error', // catch undefined variables
    },
  },
])
