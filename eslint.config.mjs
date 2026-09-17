/**
 * ESLint 扁平配置（Flat Config）
 * ------------------------------------------------------------
 * 适用范围：仅 js 目录下的 JavaScript 文件。HTML 与 CSS 不在此配置的检查范围内。
 *
 * 两个关键决定：
 *   1. sourceType 固定为 'script' —— js/i18n.js 与 js/main.js 是通过
 *      <script src> 直接引入的传统脚本，不是 ES Module。若改为 'module'，
 *      顶层 const 会被当作模块私有作用域，ESLint 将无法正确判断全局使用。
 *   2. globals 取 globals.browser —— 否则 window / document / navigator /
 *      localStorage / IntersectionObserver / requestAnimationFrame 等
 *      浏览器内置对象会被 no-undef 全部误报。
 *
 * 注意：index.html 中还有两段内联脚本（js 类名注入、首屏兜底），
 * ESLint 默认不解析 HTML，这两段不由本配置覆盖。
 */

import js from '@eslint/js';
import globals from 'globals';

export default [
    {
        // 构建产物与依赖目录不参与检查
        ignores: ['node_modules/**', 'assets/**']
    },

    // ESLint 官方推荐规则集（no-undef / no-redeclare / no-unreachable 等）
    js.configs.recommended,

    {
        files: ['js/**/*.js'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'script',
            globals: {
                ...globals.browser
            }
        },
        linterOptions: {
            reportUnusedDisableDirectives: 'warn'
        },
        rules: {
            // 未使用的变量降级为警告，便于渐进清理
            'no-unused-vars': ['warn', { args: 'none', caughtErrors: 'none' }],

            // 强制全等，避免隐式类型转换
            eqeqeq: ['warn', 'smart'],

            // 不会被重新赋值的 let 应改为 const
            'prefer-const': 'warn',

            // 禁止 var（本仓库统一使用 const / let）
            'no-var': 'error',

            // 开发期需要 console 输出诊断信息
            'no-console': 'off',

            // 显式关闭：顶层函数声明会挂到 window，但这是与 i18n.js
            // 共享全局作用域的既定设计，改用 ES Module 前不引入该规则
            'no-implicit-globals': 'off'
        }
    }
];
