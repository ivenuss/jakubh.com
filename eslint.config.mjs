import path from 'node:path';
import { fileURLToPath } from 'node:url';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import _import from 'eslint-plugin-import';
import { fixupPluginRules } from '@eslint/compat';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import parser from 'svelte-eslint-parser';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

export default [
	{
		ignores: [
			'**/.DS_Store',
			'**/node_modules',
			'build',
			'.svelte-kit',
			'package',
			'**/.env',
			'**/.env.*',
			'!**/.env.example',
			'**/pnpm-lock.yaml',
			'**/package-lock.json',
			'**/yarn.lock'
		]
	},
	...compat.extends(
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier'
	),
	{
		plugins: {
			'@typescript-eslint': typescriptEslint,
			import: fixupPluginRules(_import)
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			},
			parser: tsParser,
			ecmaVersion: 2020,
			sourceType: 'module',
			parserOptions: {
				extraFileExtensions: ['.svelte']
			}
		},
		rules: {
			'import/order': [
				'error',
				{
					'newlines-between': 'never',
					pathGroups: [{ pattern: '$*/**', group: 'internal' }]
				}
			]
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: parser,
			ecmaVersion: 5,
			sourceType: 'script',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	}
];
