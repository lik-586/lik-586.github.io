/* ============================================================
 * 个人主页交互脚本
 * ------------------------------------------------------------
 * 约定：
 *   1. 语言状态存于 localStorage.lang，首访按浏览器语言自动判定；
 *   2. 切换语言必须同步 <html lang>，否则屏幕阅读器会用错音库；
 *   3. 内容可见性不得依赖 JS —— .fade-in-section 的隐藏规则限定在 html.js 之下，
 *      且 IntersectionObserver 不可用时必须立即显示全部内容（防白屏）。
 * ============================================================ */

const typeWriterElement = document.getElementById('typewriter');
let typeWriterTimeout = null;

const PREFERS_REDUCED_MOTION =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const LANG_STORAGE_KEY = 'lang';

/* localStorage 在隐私模式 / 禁用 Cookie 时可能直接抛错，统一做安全包装，
   避免因存储异常导致整脚本中断（进而白屏）。 */
function safeGetStored(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
}

function safeSetStored(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* 忽略 */ }
}

/* ---------------- 语言 ---------------- */

function detectInitialLang() {
    const saved = safeGetStored(LANG_STORAGE_KEY);
    if (saved === 'zh' || saved === 'en') return saved;
    const nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    return nav.indexOf('zh') === 0 ? 'zh' : 'en';
}

let currentLang = detectInitialLang();

function startTypeWriter(text) {
    if (!typeWriterElement) return;
    if (typeWriterTimeout) {
        clearTimeout(typeWriterTimeout);
        typeWriterTimeout = null;
    }

    // 尊重「减少动态效果」系统设置：直接显示完整文本
    if (PREFERS_REDUCED_MOTION) {
        typeWriterElement.textContent = text;
        typeWriterElement.style.borderRight = 'none';
        typeWriterElement.style.animation = 'none';
        return;
    }

    typeWriterElement.textContent = '';
    let idx = 0;
    typeWriterElement.style.borderRight = '2px solid var(--primary-color)';
    typeWriterElement.style.animation = 'blink-caret 0.75s step-end infinite';

    function type() {
        if (idx < text.length) {
            typeWriterElement.textContent += text.charAt(idx);
            idx++;
            typeWriterTimeout = setTimeout(type, 100);
        } else {
            typeWriterElement.style.borderRight = 'none';
            typeWriterElement.style.animation = 'none';
        }
    }
    type();
}

/**
 * 切换语言。
 * @param {string} lang 'zh' | 'en'
 * 不再依赖传入的按钮对象：按钮状态由 data-lang 反查，便于从任意入口调用。
 */
function switchLang(lang) {
    if (lang !== 'zh' && lang !== 'en') return;
    currentLang = lang;
    safeSetStored(LANG_STORAGE_KEY, lang);

    // 同步文档语言（可访问性 + SEO）
    document.documentElement.lang = (lang === 'zh') ? 'zh-CN' : 'en';

    // 按钮状态
    document.querySelectorAll('.lang-btn').forEach(b => {
        const on = b.dataset.lang === lang;
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', String(on));
    });

    // 文案替换
    const dict = window.translations && window.translations[lang];
    if (dict) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) el.innerHTML = dict[key];
        });
    }

    const typeText = (lang === 'zh')
        ? '\u4f60\u597d\uff0c\u6211\u662f lk\uff0c\u8ba1\u7b97\u673a\u4e13\u4e1a\u5b66\u751f\u3002'
        : "Hi, I'm lk. CS Undergraduate.";
    startTypeWriter(typeText);
}

function initLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => switchLang(btn.dataset.lang));
    });
}

/* ---------------- 滚动动画 ---------------- */

function initScrollAnimations() {
    const sections = document.querySelectorAll('.fade-in-section');

    // 降级：不支持 IntersectionObserver 时直接全部显示，避免整页空白
    if (!('IntersectionObserver' in window)) {
        sections.forEach(s => s.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    sections.forEach(section => observer.observe(section));
}

/* ---------------- 工具 ---------------- */

// 用 requestAnimationFrame 节流，避免滚动时反复读取布局属性
function rafThrottle(fn) {
    let ticking = false;
    return function (...args) {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            fn.apply(this, args);
            ticking = false;
        });
    };
}

function onScroll(handler) {
    window.addEventListener('scroll', rafThrottle(handler), { passive: true });
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    return (rect.top < windowHeight && rect.bottom > 0 && rect.left < windowWidth && rect.right > 0);
}

/* ---------------- 返回顶部 ---------------- */

function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    onScroll(() => {
        backToTopBtn.classList.toggle('visible', window.scrollY > 300);
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: PREFERS_REDUCED_MOTION ? 'auto' : 'smooth' });
    });
}

/* ---------------- 移动端导航 ---------------- */

function openOrCloseMobileNav(open) {
    const navToggle = document.getElementById('nav-toggle');
    const navbar = document.getElementById('navbar');
    if (!navToggle || !navbar) return;

    const isOpen = (typeof open === 'boolean') ? open : !navbar.classList.contains('open');
    navbar.classList.toggle('open', isOpen);
    navToggle.classList.toggle('active', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
}

function closeMobileNav() { openOrCloseMobileNav(false); }

function initMobileNav() {
    const navToggle = document.getElementById('nav-toggle');
    const navbar = document.getElementById('navbar');
    if (!navToggle || !navbar) return;

    navToggle.addEventListener('click', () => openOrCloseMobileNav());

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });

    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && !navToggle.contains(e.target)) closeMobileNav();
    });

    // Esc 收起菜单（键盘可达性）
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMobileNav();
    });
}

/* ---------------- 标签页 ---------------- */

function updateNavVisibility(tabName) {
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkTab = link.getAttribute('data-tab');
        link.parentElement.style.display = (linkTab === tabName) ? 'block' : 'none';
    });
}

/**
 * 激活某个标签页。
 * @param {string} tabName general | tech | operation
 * @param {boolean} updateHash 是否把状态写入 URL（便于分享与前进后退）
 */
function activateTab(tabName, updateHash) {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabSections = document.querySelectorAll('.tab-section');
    const targetSection = document.getElementById(`${tabName}-section`);
    if (!targetSection) return;

    tabBtns.forEach(b => {
        const on = b.getAttribute('data-tab') === tabName;
        b.classList.toggle('active', on);
        b.setAttribute('aria-selected', String(on));
    });

    tabSections.forEach(section => section.classList.remove('active'));
    targetSection.classList.add('active');

    updateNavVisibility(tabName);

    if (updateHash) history.replaceState(null, '', '#' + tabName);

    window.scrollTo({ top: 0, behavior: PREFERS_REDUCED_MOTION ? 'auto' : 'smooth' });

    // 重新播放入场动画
    const fadeSections = targetSection.querySelectorAll('.fade-in-section');
    fadeSections.forEach(section => section.classList.remove('visible'));
    setTimeout(() => {
        fadeSections.forEach(section => {
            if (PREFERS_REDUCED_MOTION || isInViewport(section)) section.classList.add('visible');
        });
    }, 50);
}

function initTabSwitch() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => activateTab(btn.getAttribute('data-tab'), true));
    });
}

// 从 URL 解析初始标签页：既支持 #tech，也支持 #tech-projects 这类锚点
function resolveInitialTab() {
    const hash = location.hash.replace('#', '');
    if (!hash) return null;
    if (document.querySelector(`.tab-btn[data-tab="${hash}"]`)) return hash;
    const el = document.getElementById(hash);
    if (el) {
        const sec = el.closest('.tab-section');
        if (sec) return sec.id.replace('-section', '');
    }
    return null;
}

/* ---------------- 平滑滚动 ---------------- */

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            e.preventDefault();

            const tabSection = targetElement.closest('.tab-section');
            if (tabSection && !tabSection.classList.contains('active')) {
                activateTab(tabSection.id.replace('-section', ''), false);
            }

            setTimeout(() => {
                const element = document.querySelector(targetId);
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop - 20,
                        behavior: PREFERS_REDUCED_MOTION ? 'auto' : 'smooth'
                    });
                }
                closeMobileNav();
            }, 300);
        });
    });
}

/* ---------------- 导航高亮 ---------------- */

function initNavHighlight() {
    const navLinks = document.querySelectorAll('.nav-link');

    onScroll(() => {
        let currentSection = '';
        const activeTabSection = document.querySelector('.tab-section.active');

        if (activeTabSection) {
            activeTabSection.querySelectorAll('.content-block').forEach(section => {
                const id = section.getAttribute('id');
                if (!id) return;                       // 无 id 的板块（如引用块）不参与高亮
                const sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + section.offsetHeight) {
                    currentSection = id;
                }
            });
        }

        navLinks.forEach(link => {
            const on = (currentSection !== '') && (link.getAttribute('href') === '#' + currentSection);
            link.classList.toggle('active', on);
        });
    });
}

/* ---------------- 页脚年份 ---------------- */

function initFooterYear() {
    const el = document.getElementById('copyright-year');
    if (el) el.textContent = String(new Date().getFullYear());
}

/* ---------------- 启动 ---------------- */

document.addEventListener('DOMContentLoaded', () => {
    try {
        initLangButtons();
        switchLang(currentLang);        // 首屏统一走一次 i18n，避免中英混排

        initScrollAnimations();
        initBackToTop();
        initSmoothScroll();
        initNavHighlight();
        initMobileNav();
        initTabSwitch();
        initFooterYear();

        const initialTab = resolveInitialTab();
        activateTab(initialTab || 'general', false);
    } catch (err) {
        // 任一模块异常都不应导致整页空白：打印错误并强制显示全部内容
        if (window.console && console.error) console.error('[site] init failed:', err);
        document.querySelectorAll('.fade-in-section').forEach(s => s.classList.add('visible'));
    } finally {
        // 通知首屏兜底逻辑：主脚本已接管
        window.__siteReady = true;
    }
});
