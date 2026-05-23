/**
 * Theme toggle. Persists override in localStorage; falls back to OS preference.
 * The FOUC-prevention sibling script in Base.astro runs synchronously in <head>
 * before paint to set data-theme; this module hydrates the toggle button.
 */

type Theme = 'light' | 'dark';
const STORAGE_KEY = 'wl-theme';

function getEffectiveTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  document.dispatchEvent(new CustomEvent<Theme>('wl:themechange', { detail: theme }));
}

function toggleTheme(): void {
  const next: Theme = getEffectiveTheme() === 'dark' ? 'light' : 'dark';
  localStorage.setItem(STORAGE_KEY, next);
  applyTheme(next);
}

function syncButtonState(button: HTMLButtonElement): void {
  const current = getEffectiveTheme();
  button.dataset.theme = current;
  const nextLabel =
    current === 'dark' ? button.dataset.labelLight : button.dataset.labelDark;
  if (nextLabel) button.setAttribute('aria-label', nextLabel);
}

function initThemeToggle(): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]');
  buttons.forEach((btn) => {
    syncButtonState(btn);
    btn.addEventListener('click', () => {
      toggleTheme();
      buttons.forEach(syncButtonState);
    });
  });

  // react to OS changes only when the user hasn't set a manual override
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener('change', () => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(mq.matches ? 'dark' : 'light');
      buttons.forEach(syncButtonState);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initThemeToggle);
} else {
  initThemeToggle();
}
