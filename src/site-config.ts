export const SITE = {
  name: "PC Balance",
  origin: "https://pc-balance.pages.dev",
  language: "en",
  locale: "en_US",
  themeColor: "#07101f",
  version: "1.0",
  lastReviewed: "2026-08-13",
  lastReviewedHuman: "August 13, 2026",
  description:
    "Independent, benchmark-informed PC hardware decision-support tools for comparing CPU and GPU balance, resolution behavior, and upgrade paths.",
} as const;

export const SITE_PAGES = [
  "/",
  "/about/",
  "/methodology/",
  "/privacy/",
  "/terms/",
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${SITE.origin}/`).toString();
}
