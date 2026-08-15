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
  "/about/",
  "/methodology/",
  "/privacy/",
  "/terms/",
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${SITE.origin}/`).toString();
}