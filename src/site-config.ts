export const SITE = {
  name: "CalcBottleneck",
  origin: "https://www.calcbottleneck.com",
  language: "en",
  locale: "en_US",
  themeColor: "#07101f",
  version: "1.0",
  lastReviewed: "2026-08-15",
  lastReviewedHuman: "August 15, 2026",
  description:
    "CalcBottleneck is a free, benchmark-informed CPU & GPU bottleneck calculator for comparing PC balance at 1080p, 1440p and 4K with confidence-aware estimates and upgrade guidance.",
} as const;

export const SITE_PAGES = [
  "/",
  "/cpu-vs-gpu-bottleneck/",
  "/bottleneck-and-resolution/",
  "/is-10-percent-bottleneck-bad/",
  "/how-to-fix-pc-bottleneck/",
  "/research/pc-hardware-balance-report-2026/",
  "/rtx-5070-bottleneck/",
  "/rtx-5060-bottleneck/",
  "/rtx-5060-ti-bottleneck/",
  "/rtx-5070-ti-bottleneck/",
  "/about/",
  "/methodology/",
  "/privacy/",
  "/terms/",
] as const;

export const SITE_PAGE_LASTMOD = {
  "/": "2026-08-29",
  "/cpu-vs-gpu-bottleneck/": "2026-08-22",
  "/bottleneck-and-resolution/": "2026-08-15",
  "/is-10-percent-bottleneck-bad/": "2026-08-15",
  "/how-to-fix-pc-bottleneck/": "2026-08-15",
  "/research/pc-hardware-balance-report-2026/": "2026-08-29",
  "/rtx-5070-bottleneck/": "2026-08-22",
  "/rtx-5060-bottleneck/": "2026-08-22",
  "/rtx-5060-ti-bottleneck/": "2026-08-22",
  "/rtx-5070-ti-bottleneck/": "2026-08-22",
  "/about/": "2026-08-15",
  "/methodology/": "2026-08-15",
  "/privacy/": "2026-08-15",
  "/terms/": "2026-08-15",
} as const satisfies Record<(typeof SITE_PAGES)[number], string>;

export function absoluteUrl(path = "/") {
  return new URL(path, `${SITE.origin}/`).toString();
}