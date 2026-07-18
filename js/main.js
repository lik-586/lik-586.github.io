const typeWriterElement = document.getElementById('typewriter');
let idx = 0;
let typeWriterTimeout = null;

function startTypeWriter(text) {
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

let currentLang = 'en';

function switchLang(lang, btn) {
    currentLang = lang;
    
    if (typeWriterTimeout) {
        clearTimeout(typeWriterTimeout);
        typeWriterTimeout = null;
    }
    
    document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.remove('active');
    });
    btn.classList.add('active');
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (window.translations[lang] && window.translations[lang][key]) {
            el.innerHTML = window.translations[lang][key];
        }
    });
    
    const typeText = lang === 'zh' ? '\u4f60\u597d\uff0c\u6211\u662f lk\uff0c\u8ba1\u7b97\u673a\u4e13\u4e1a\u5b66\u751f\u3002' : "Hi, I'm lk. CS Undergraduate.";
    startTypeWriter(typeText);
}

function initLanguage() {
    if (currentLang === 'en') {
        setTimeout(() => startTypeWriter("Hi, I'm lk. CS Undergraduate."), 100);
    } else {
        setTimeout(() => startTypeWriter('\u4f60\u597d\uff0c\u6211\u662f lk\uff0c\u8ba1\u7b97\u673a\u4e13\u4e1a\u5b66\u751f\u3002'), 100);
    }
}

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

function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;
    
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

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const tabSection = targetElement.closest('.tab-section');
                if (tabSection && !tabSection.classList.contains('active')) {
                    const tabName = tabSection.id.replace('-section', '');
                    const tabBtn = document.querySelector(`.tab-btn[data-tab="${tabName}"]`);
                    if (tabBtn) {
                        tabBtn.click();
                    }
                }
                
                setTimeout(() => {
                    const element = document.querySelector(targetId);
                    if (element) {
                        const offsetTop = element.offsetTop - 20;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                    closeMobileNav();
                }, 300);
            }
        });
    });
}

function initNavHighlight() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let currentSection = '';
        
        const activeTabSection = document.querySelector('.tab-section.active');
        if (activeTabSection) {
            const sections = activeTabSection.querySelectorAll('.content-block');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });
        }
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    });
}

function initMobileNav() {
    const navToggle = document.getElementById('nav-toggle');
    const navbar = document.getElementById('navbar');
    if (!navToggle || !navbar) return;
    
    const navLinks = document.querySelectorAll('.nav-link');
    
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navbar.classList.toggle('open');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });
    
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && !navToggle.contains(e.target)) {
            closeMobileNav();
        }
    });
}

function closeMobileNav() {
    const navToggle = document.getElementById('nav-toggle');
    const navbar = document.getElementById('navbar');
    if (!navToggle || !navbar) return;
    
    navToggle.classList.remove('active');
    navbar.classList.remove('open');
}

function updateNavVisibility(tabName) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const linkTab = link.getAttribute('data-tab');
        if (linkTab === tabName) {
            link.parentElement.style.display = 'block';
        } else {
            link.parentElement.style.display = 'none';
        }
    });
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
    return (
        rect.top < windowHeight &&
        rect.bottom > 0 &&
        rect.left < windowWidth &&
        rect.right > 0
    );
}

function initTabSwitch() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabSections = document.querySelectorAll('.tab-section');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.getAttribute('data-tab');
            
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            tabSections.forEach(section => {
                section.classList.remove('active');
            });
            
            const targetSection = document.getElementById(`${tabName}-section`);
            if (targetSection) {
                targetSection.classList.add('active');
                
                updateNavVisibility(tabName);
                
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                
                setTimeout(() => {
                    const fadeSections = targetSection.querySelectorAll('.fade-in-section');
                    fadeSections.forEach(section => {
                        section.classList.remove('visible');
                    });
                    
                    setTimeout(() => {
                        fadeSections.forEach(section => {
                            if (isInViewport(section)) {
                                section.classList.add('visible');
                            }
                        });
                    }, 50);
                }, 100);
            }
        });
    });
}

window.addEventListener('beforeunload', () => {
    if (typeWriterTimeout) {
        clearTimeout(typeWriterTimeout);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initScrollAnimations();
    initBackToTop();
    initSmoothScroll();
    initNavHighlight();
    initMobileNav();
    initTabSwitch();
    updateNavVisibility('general');
});
