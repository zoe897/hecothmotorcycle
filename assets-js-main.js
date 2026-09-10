/* ============================================================
   HECOTH B2B · 通用逻辑（导航、多语言、表单）
   ============================================================ */
(function () {
  'use strict';

  const LS_KEY = 'hecoth-lang';

  /* ---------- 语言切换 ---------- */
  function getLang() {
    return localStorage.getItem(LS_KEY) || 'en';
  }

  function applyTranslations(lang) {
    const dict = window.TRANSLATIONS[lang];
    if (!dict) return;

    // 更新所有 [data-i18n] 文本
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // 更新所有 [data-i18n-placeholder]
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    // 更新按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // RTL 支持（阿拉伯语）
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  }

  function setLang(lang) {
    if (!window.SUPPORTED_LANGS.includes(lang)) return;
    localStorage.setItem(LS_KEY, lang);
    applyTranslations(lang);
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  /* ---------- 导航高亮 ---------- */
  function highlightCurrentNav() {
    const path = window.location.pathname.split('/').pop() || 'home.html';
    document.querySelectorAll('.nav-link').forEach(el => {
      const target = el.getAttribute('href');
      if (target === path) el.classList.add('active');
      else el.classList.remove('active');
    });
  }

  /* ---------- 注入顶部导航 ---------- */
  function injectNav() {
    const navEl = document.getElementById('site-nav');
    if (!navEl) return;

    navEl.innerHTML = `
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <a href="home.html" class="flex items-center gap-3 no-underline">
          <span class="text-gold font-bold text-xl tracking-widest"><i class="fas fa-bolt"></i> HECOTH</span>
          <span class="hidden sm:inline text-xs text-gray-400 border-l border-gray-700 pl-3" data-i18n="site.tagline">B2B · POWERSPORTS</span>
        </a>
        <div class="flex flex-wrap items-center gap-3">
          <div class="flex flex-wrap gap-1 sm:gap-3 text-sm">
            <a href="home.html" class="nav-link" data-i18n="nav.home">Home</a>
            <a href="products.html" class="nav-link" data-i18n="nav.products">Products</a>
            <a href="solutions.html" class="nav-link" data-i18n="nav.solutions">Solutions</a>
            <a href="about.html" class="nav-link" data-i18n="nav.about">About</a>
            <a href="news.html" class="nav-link" data-i18n="nav.news">News</a>
            <a href="contact.html" class="nav-link" data-i18n="nav.contact">Contact</a>
          </div>
          <div class="flex flex-wrap gap-1 text-xs">
            <span class="lang-btn" data-lang="en">🇬🇧 EN</span>
            <span class="lang-btn" data-lang="es">🇪🇸 ES</span>
            <span class="lang-btn" data-lang="fr">🇫🇷 FR</span>
            <span class="lang-btn" data-lang="ar">🇦🇪 AR</span>
            <span class="lang-btn" data-lang="ru">🇷🇺 RU</span>
            <span class="lang-btn" data-lang="pt">🇵🇹 PT</span>
          </div>
        </div>
      </div>
    `;

    navEl.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
  }

  /* ---------- 注入页脚 ---------- */
  function injectFooter() {
    const footerEl = document.getElementById('site-footer');
    if (!footerEl) return;
    footerEl.innerHTML = `
      <div class="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <span>© 2026 HECOTH · B2B Powersports</span>
        <span class="flex gap-4"><i class="fab fa-linkedin"></i><i class="fab fa-youtube"></i><i class="fab fa-instagram"></i></span>
        <span>#electric motorcycle #fuel parts #OEM B2B</span>
      </div>
    `;
  }

  /* ---------- 初始化 ---------- */
  function init() {
    injectNav();
    injectFooter();
    highlightCurrentNav();
    applyTranslations(getLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // 暴露给全局
  window.HECOTH = { setLang, getLang };
})();