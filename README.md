# lik-586.github.io

> 李坤（lk）的个人主页 —— 中英双语单页作品集
> Personal homepage of Li Kun — a bilingual single-page portfolio.

纯静态实现：原生 **HTML + CSS + JavaScript**，无框架、无构建步骤，直接托管在 GitHub Pages 上。线上地址：<https://lik-586.github.io/>

---

## 技术栈

| 层 | 选型 |
|---|---|
| 结构 | HTML5 语义化标签（`h1`–`h3` 层级完整）+ ARIA 无障碍属性 |
| 样式 | 原生 CSS：自定义属性、Flex 布局、四个响应式断点、`prefers-reduced-motion` |
| 交互 | 原生 JavaScript（**零运行时依赖**），两个传统脚本文件 |
| 资源 | favicon / apple-touch-icon / OG 分享图 / 头像，全部本地存放，不引用外部 CDN |
| 部署 | GitHub Pages（`main` 分支根目录） |

---

## 目录结构

```
.
├── index.html            单页主体，含三个标签页：通用 / 技术 / 运营
├── 404.html              自定义 404 页（GitHub Pages 会自动使用），双语可切换
├── robots.txt            爬虫规则，并指向 sitemap
├── sitemap.xml           站点地图，含 hreflang 声明
├── css/
│   └── style.css         全部样式，含响应式断点与动效降级
├── js/
│   ├── i18n.js           文案表（en / zh），挂载到 window.translations
│   └── main.js           交互：语言切换、标签页、滚动动画、返回顶部、导航高亮
├── assets/               图标与分享图（favicon / apple-touch-icon / og-cover / avatar）
├── jsconfig.json         编辑器配置（JS 智能提示范围）
├── eslint.config.mjs     ESLint 扁平配置
└── package.json          仅供开发期静态检查使用，站点运行不依赖 npm
```

---

## 本地预览

页面全部使用相对路径加载资源，直接双击 `index.html` 即可打开。但 `file://` 协议下 `localStorage` 会被浏览器禁用，语言偏好无法保存，因此**推荐起一个本地静态服务**：

```bash
npm run serve            # 等价于 python3 -m http.server 8000
# 浏览器访问 http://127.0.0.1:8000
```

若使用 VS Code，安装 Live Server 扩展后右键 `index.html` → *Open with Live Server* 亦可。

---

## 代码检查

```bash
npm install              # 安装开发期依赖（ESLint）
npm run lint             # 检查 js/ 目录
npm run lint:fix         # 自动修复可修复的问题
```

说明：`package.json` 与 `node_modules/` **只服务于开发期的静态检查**，站点本身不依赖任何 npm 包，`node_modules/` 已加入 `.gitignore`。

---

## 多语言（i18n）工作机制

1. `index.html` 中所有需要翻译的元素带 `data-i18n="key"`，其**默认文案为英文**；
2. `js/i18n.js` 导出 `window.translations = { en, zh }`，两种语言的键集必须完全一致；
3. `js/main.js` 在 `DOMContentLoaded` 时读取 `localStorage.lang`，若无记录则按 `navigator.language` 判定，随后调用 `switchLang()` 覆盖文案并同步 `<html lang>`。

### 改动文案时必须遵守的四条约定

1. **HTML 默认文案必须与 `i18n.js` 中 `en` 段的值逐字一致**，包括空格与 `&amp;` 的转义写法。
2. 新增键时 `en` 与 `zh` 必须同时补齐，否则切换语言会残留上一语言的文案。
3. 数值类表述（篇数、时长、分数、人数）全站只允许存在一个版本。
4. 装饰性 emoji 需包成 `<span aria-hidden='true'>`，且 **HTML 与 `i18n.js` 统一使用单引号** —— 双引号会提前终止 `i18n.js` 的字符串字面量，直接造成语法错误、整站脚本失效。

### 首屏防白屏设计（改动时请勿破坏）

- 内容隐藏规则写作 `html.js .fade-in-section`，JS 不可用时内容照常可见；
- `main.js` 的启动流程包在 `try/catch` 内，任一步骤异常都会强制显示全部内容；
- `index.html` 内含 1.2 秒兜底：若 `window.__siteReady` 未置位，则移除隐藏类；
- `localStorage` 读写均有 `try/catch`，隐私模式下不会中断脚本。

---

## 设计与可访问性约定

- **文字不得直接使用品牌色** `--primary-color`（对白底仅 3.62:1，不达 WCAG AA）。正文用 `--primary-text`（5.99:1），白字深底用 `--primary-strong`（5.21:1）。
- 技术栈标签统一「浅色底 + 深色字」，全部 ≥ 4.5:1。
- 标签页遵循 `tablist` / `tab` / `tabpanel` 语义，切换时同步 `aria-selected`；汉堡菜单同步 `aria-expanded`。
- 所有 `target="_blank"` 链接必须带 `rel="noopener noreferrer"`。
- 所有动效尊重 `prefers-reduced-motion`，开启后不再有位移与逐字动画。

---

## 部署

仓库根目录即站点根目录。推送到 `main` 分支后 GitHub Pages 自动发布到 <https://lik-586.github.io/>，通常 1 分钟内生效。自定义 404 页由 GitHub Pages 自动接管，无需额外配置。

---

## 已知限制

- `index.html` 中的两段内联脚本不在 ESLint 检查范围内（ESLint 默认不解析 HTML，如需覆盖可另接 `eslint-plugin-html`）。
- `js/i18n.js` 与 `js/main.js` 是共享全局作用域的传统脚本，二者通过 `window.translations` 通信；这种跨文件的隐式契约无法被静态检查发现，后续若拆分模块建议改用 ES Module。
- 尚未引入 CSS 与 HTML 的检查工具（Stylelint / html-validate）。
- `jsconfig.json` 的 `checkJs` 目前为 `false`，如需编辑器内的类型校验可改为 `true`。

---

## 许可

个人作品集，保留所有权利，未授权转载或复用。文中所涉第三方商标、字体与图标版权归各自所有者。
