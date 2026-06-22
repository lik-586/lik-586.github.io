// 打字机效果
const typeWriterElement = document.getElementById('typewriter');
let idx = 0;
let typeWriterTimeout = null;

function startTypeWriter(text) {
    // 清除之前的定时器
    if (typeWriterTimeout) {
        clearTimeout(typeWriterTimeout);
        typeWriterTimeout = null;
    }
    
    typeWriterElement.textContent = '';
    idx = 0;
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

// 语言切换功能
let currentLang = 'en'; // 默认英文

function switchLang(lang, btn) {
    currentLang = lang;
    
    // 清除当前的打字机定时器
    if (typeWriterTimeout) {
        clearTimeout(typeWriterTimeout);
        typeWriterTimeout = null;
    }
    
    // 更新按钮状态
    document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.remove('active');
    });
    btn.classList.add('active');
    
    // 更新页面内容
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (window.translations[lang][key]) {
            el.innerHTML = window.translations[lang][key];
        }
    });
    
    // 重新启动打字机
    const typeText = lang === 'zh' ? "你好，我是 lk，计算机专业学生。" : "Hi, I'm lk. CS Undergraduate.";
    startTypeWriter(typeText);
}

// 页面加载时设置语言
function initLanguage() {
    if (currentLang === 'en') {
        setTimeout(() => startTypeWriter("Hi, I'm lk. CS Undergraduate."), 100);
    } else {
        setTimeout(() => startTypeWriter("你好，我是 lk，计算机专业学生。"), 100);
    }
}

// 滚动动画 (Intersection Observer)
function initScrollAnimations() {
    const sections = document.querySelectorAll('.fade-in-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// 返回顶部按钮
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 页面卸载清理
window.addEventListener('beforeunload', () => {
    if (typeWriterTimeout) {
        clearTimeout(typeWriterTimeout);
    }
});

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initScrollAnimations();
    initBackToTop();
});