module.exports = {
	env: {
		browser: true,
		es2021: true,
		'vue/setup-compiler-macros': true // vue3写法校验
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/base'
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		parser: 'vue-eslint-parser',
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		'@typescript-eslint/no-explicit-any': ['off'], // 关闭any类型校验
		'vue/script-indent': ['error', 'tab', { baseIndent: 1, switchCase: 0, ignores: [] }],
		indent: ['error', 'tab'], // 强制使用制表符缩进
		eqeqeq: 'warn', // 必须使用全等
		'comma-dangle': ['warn', 'never'], // 对象字面量项尾不能有逗号
		'comma-spacing': ['error', { before: false, after: true }], // 控制逗号前后的空格
		'keyword-spacing': ['error', { before: true, after: true }], // 强制在关键字前后使用一致的空格
		'no-const-assign': 'error', // 禁止修改 const 声明的变量
		'no-duplicate-case': 'error', // 禁止出现重复的 case 标签
		'no-empty-character-class': 'error', // 禁止在正则表达式中使用空字符集
		'no-extra-parens': ['error', 'functions'], // 禁止不必要的括号
		'no-unused-vars': ['error', { vars: 'all', args: 'none' }] // 禁止出现未使用过的变量
	}
}