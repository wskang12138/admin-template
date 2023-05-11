module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        'plugin:react/jsx-runtime'
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
         "prettier"
    ],
    "rules": {
        'no-var': 'error', // 要求使用 let 或 const 而不是 var
        'no-multiple-empty-lines': ['error', { max: 1 }], // 不允许多个空行
        'no-use-before-define': 'off', // 禁止在 函数/类/变量 定义之前使用它们
        'prefer-const': 'off', // 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
        'no-irregular-whitespace': 'off', // 禁止不规则的空白
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'react/jsx-uses-react': 2,
        'eqeqeq': 2, // 强制使用 === 和 !==
        'default-case': 1, // 要求 switch 语句中有 default 分支
        'no-else-return': 1, // 禁止 if 语句中 return 语句之后有 else 块
        'no-empty-function': 0, // 禁止出现空函数
        'no-multi-spaces': 1, // 禁止使用多个空格
        'radix': 1, // 强制在parseInt()使用基数参数
        'no-unused-vars': 'off',
        'init-declarations': ['error', 'always'], // 声明变量必须赋值
        // 'array-bracket-spacing': ['error', 'always'], // 数组方括号内必须空格
        'array-bracket-spacing': 0, // 数组方括号内必须空格
        // 双峰驼命名格式
        'camelcase': 2,
        // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
        // always-multiline：多行模式必须带逗号，单行模式不能带逗号
        'comma-dangle': [2, 'never'],
        // 控制逗号前后的空格
        'comma-spacing': [2, { before: false, after: true }],
        'comma-style': [2, 'last'], // 逗号风格，换行时在行首还是行尾
        'eol-last': 2, // 要求文件末尾存在空行
        // 对象冒号前禁止空格，冒号后必须空格
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],
        // 关键字（if、else等）前后必须有空格
        'keyword-spacing': ['error', { before: true, after: true }],
        'semi': ['error', 'never'], // 禁止末尾分号
        'quotes': ['error', 'single'], // 单引号
        'space-infix-ops': 2, // 操作符周围必须有空格
        'spaced-comment': ['error', 'always'], // 注释后面必须跟随至少一个空白
    
        /**
         * ECMAScript6
         */
        'arrow-spacing': ['error', { before: true, after: true }], // 强制箭头函数的箭头前后使用空格
        'object-shorthand': 2, // 要求使用对象方法名和属性名简写
        'prefer-arrow-callback': 2, // 要求回调函数使用箭头函数
        'prefer-rest-params': 2, // 要求使用剩余参数而不是 arguments
        'endOfline': 0,
        // typeScript (https://typescript-eslint.io/rules)
        '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
        '@typescript-eslint/no-inferrable-types': 'off', // 可以轻松推断的显式类型可能会增加不必要的冗长
        '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
        '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
        '@typescript-eslint/ban-ts-ignore': 'off', // 禁止使用 @ts-ignore
        '@typescript-eslint/ban-types': 'off', // 禁止使用特定类型
        '@typescript-eslint/explicit-function-return-type': 'off', // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
        '@typescript-eslint/no-var-requires': 'off', // 不允许在 import 语句中使用 require 语句
        '@typescript-eslint/no-empty-function': 'off', // 禁止空函数
        '@typescript-eslint/no-use-before-define': 'off', // 禁止在变量定义之前使用它们
        '@typescript-eslint/ban-ts-comment': 'off', // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
        '@typescript-eslint/no-non-null-assertion': 'off', // 不允许使用后缀运算符的非空断言(!)
        '@typescript-eslint/explicit-module-boundary-types': 'off', // 要求导出函数和类的公共类方法的显式返回和参数类型
        // react (https://github.com/jsx-eslint/eslint-plugin-react)
        'react-hooks/rules-of-hooks': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react/prop-types':'off'
    },
    "settings": {
      react: {
        version: 'detect'
      }
    }
}
