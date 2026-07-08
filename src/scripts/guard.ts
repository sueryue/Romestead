import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { GUARD } from '../consts';

/**
 * Abnormal-access detection.
 * 1. FingerprintJS derives a stable visitor id.
 * 2. We keep a rolling log of interactions per visitor in localStorage.
 * 3. If the rate exceeds GUARD.maxRequests within GUARD.windowMs, we show a
 *    challenge overlay and (best-effort) report to /api/guard.
 *
 * Client-side only, so it works on static hosting; the report endpoint is
 * optional (wire it to an edge function / SSR route for real enforcement).
 */

const KEY_PREFIX = 'romestead_guard_';

function readHits(key: string): number[] {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const arr = JSON.parse(raw) as number[];
    const now = Date.now();
    return arr.filter((t) => now - t < GUARD.windowMs);
  } catch {
    return [];
  }
}

function showGuard(lang: string): void {
  const overlay = document.getElementById('guard-overlay');
  if (!overlay) return;
  const title = overlay.querySelector<HTMLElement>('[data-guard="title"]');
  const body = overlay.querySelector<HTMLElement>('[data-guard="body"]');
  // Pull localized strings from the page (set by i18next on load).
  const t = (k: string, fb: string) =>
    document.querySelector<HTMLElement>(`[data-i18n="${k}"]`)?.textContent || fb;
  if (title) title.textContent = t('guard.title', 'Hold, traveler');
  if (body) body.textContent = t('guard.body', 'Unusual activity detected.');
  overlay.classList.add('show');
  const until = Date.now() + GUARD.cooldownMs;
  const tick = () => {
    const left = Math.ceil((until - Date.now()) / 1000);
    const c = overlay.querySelector<HTMLElement>('[data-guard="count"]');
    if (c) c.textContent = String(Math.max(0, left));
    if (left <= 0) overlay.classList.remove('show');
    else setTimeout(tick, 500);
  };
  tick();
}

async function report(visitorId: string, score: number): Promise<void> {
  try {
    await fetch(GUARD.reportEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        visitorId,
        score,
        route: location.pathname,
        ts: Date.now(),
      }),
      keepalive: true,
    });
  } catch {
    /* best-effort; ignore network errors on static hosts */
  }
}

async function main(): Promise<void> {
  let visitorId = 'unknown';
  try {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    visitorId = result.visitorId;
  } catch {
    /* fingerprinting optional */
  }

  const key = KEY_PREFIX + visitorId;
  const now = Date.now();
  const hits = readHits(key);
  hits.push(now);
  localStorage.setItem(key, JSON.stringify(hits));

  const lang = document.documentElement.lang || 'en';
  const reportingOn = import.meta.env.PUBLIC_GUARD_REPORT === 'true';
  if (hits.length > GUARD.maxRequests) {
    showGuard(lang);
    if (reportingOn) void report(visitorId, hits.length);
  }

  // Track further interactions in the same window.
  document.addEventListener(
    'click',
    () => {
      const arr = readHits(key);
      arr.push(Date.now());
      localStorage.setItem(key, JSON.stringify(arr));
      if (arr.length > GUARD.maxRequests) showGuard(lang);
    },
    { passive: true }
  );
}

void main();
