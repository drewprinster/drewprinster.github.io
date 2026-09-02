/* Site behavior: mobile nav, theme switcher, and section highlighting. */
(function () {
  'use strict';

  /* ---- Mobile nav toggle ---- */
  var toggler = document.querySelector('.navbar-toggler');
  var collapse = document.getElementById('navbar-content');

  if (toggler && collapse) {
    toggler.addEventListener('click', function () {
      var open = collapse.classList.toggle('is-open');
      toggler.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close the menu after tapping a link (single-page anchors stay visible otherwise).
    collapse.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        collapse.classList.remove('is-open');
        toggler.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- Theme switcher ---- */
  var themeToggle = document.querySelector('.theme-toggle');
  var themeMenu = document.querySelector('.theme-dropdown .dropdown-menu');

  function applyTheme(mode) {
    var dark = mode === 'dark' ||
      (mode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (dark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try {
      if (mode === 'auto') {
        localStorage.removeItem('theme');
      } else {
        localStorage.setItem('theme', mode);
      }
    } catch (e) { /* storage unavailable; the choice just will not persist */ }
  }

  if (themeToggle && themeMenu) {
    themeToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = themeMenu.classList.toggle('is-open');
      themeToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    themeMenu.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-set-theme]');
      if (!btn) return;
      applyTheme(btn.getAttribute('data-set-theme'));
      themeMenu.classList.remove('is-open');
      themeToggle.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('click', function () {
      themeMenu.classList.remove('is-open');
      themeToggle.setAttribute('aria-expanded', 'false');
    });
  }

  /* ---- BibTeX dialog ---- */
  var citeModal = document.getElementById('cite-modal');

  if (citeModal) {
    var citeCode = document.getElementById('cite-modal-code');
    var citePaper = document.getElementById('cite-modal-paper');
    var citeStatus = document.getElementById('cite-status');
    var citeCopy = document.getElementById('cite-copy');
    var lastFocused = null;

    function openCite(source) {
      citeCode.textContent = source.textContent.trim();
      citePaper.textContent = source.getAttribute('data-paper') || '';
      citeStatus.textContent = '';
      lastFocused = document.activeElement;
      citeModal.hidden = false;
      document.body.style.overflow = 'hidden';
      citeCopy.focus();
    }

    function closeCite() {
      citeModal.hidden = true;
      document.body.style.overflow = '';
      if (lastFocused && lastFocused.focus) lastFocused.focus();
    }

    document.addEventListener('click', function (e) {
      var trigger = e.target.closest('.js-bibtex');
      if (trigger) {
        // The hidden <pre> sits next to the button inside .btn-links.
        var source = trigger.parentNode.querySelector('.bibtex-source');
        if (source) openCite(source);
        return;
      }
      if (e.target.closest('[data-cite-close]')) closeCite();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !citeModal.hidden) closeCite();
    });

    citeCopy.addEventListener('click', function () {
      var text = citeCode.textContent;

      function selectInstead() {
        // Clipboard unavailable (older browser, or a non-secure context):
        // select the entry so the reader can copy it by hand.
        var range = document.createRange();
        range.selectNodeContents(citeCode);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        citeStatus.textContent = 'Press Ctrl/Cmd+C to copy';
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          citeStatus.textContent = 'Copied';
        }, selectInstead);
      } else {
        selectInstead();
      }
    });
  }

  /* ---- Highlight the nav link for the section currently in view ----
     Picks the last section whose top has scrolled past just below the navbar,
     so the topmost section stays active at scroll position 0. */
  var sections = Array.prototype.slice.call(document.querySelectorAll('.home-section[id]'));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.navbar-nav .nav-link'));

  if (sections.length && navLinks.length) {
    var ticking = false;

    function updateActive() {
      ticking = false;
      var probe = window.pageYOffset + 80;
      var current = sections[0];

      sections.forEach(function (section) {
        if (section.offsetTop <= probe) current = section;
      });

      // At the very bottom, activate the last section even if it is short.
      // Only when the page actually scrolls: on a viewport taller than the
      // page this condition is always true and would pin the last section.
      var scrollable = document.body.offsetHeight > window.innerHeight + 4;
      if (scrollable && window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2) {
        current = sections[sections.length - 1];
      }

      navLinks.forEach(function (link) {
        var href = link.getAttribute('href') || '';
        link.classList.toggle('active', href.indexOf('#' + current.id) !== -1);
      });
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateActive);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateActive();
  }
})();
