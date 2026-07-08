/**
 * Right-click / DevTools protection — CSS-mask + event-listener combo.
 *
 * Design goal (per request): protect assets without harming normal users.
 *  - Right-click is blocked ONLY on protected zones (.shield, img.protected,
 *    .no-copy). Normal reading text stays fully selectable / copyable.
 *  - F12 / open-devtools shortcuts are intercepted; a full-screen mask appears
 *    only when DevTools is actually detected — ordinary users never see it.
 */

const SELECTOR = '.shield, img.protected, .no-copy';

document.addEventListener('contextmenu', (e) => {
  const target = e.target as HTMLElement | null;
  if (target && target.closest(SELECTOR)) {
    e.preventDefault();
  }
});

document.addEventListener(
  'keydown',
  (e) => {
    const block =
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
      (e.ctrlKey && e.key === 'U');
    if (block) {
      e.preventDefault();
      document.getElementById('devtools-mask')?.classList.add('show');
    }
  },
  { capture: true }
);

// DevTools-open detector (viewport-size heuristic — non-intrusive, no debugger).
function detectDevtools(): void {
  const opened =
    window.outerWidth - window.innerWidth > 160 ||
    window.outerHeight - window.innerHeight > 160;
  if (opened) {
    document.getElementById('devtools-mask')?.classList.add('show');
  }
}
setInterval(detectDevtools, 1000);
