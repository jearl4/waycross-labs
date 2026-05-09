import type { Translations } from './index';

const en: Translations = {
  meta: {
    siteName: 'Waycross Labs',
    locale: 'en',
    htmlLang: 'en',
    ogLocale: 'en_US',
  },
  nav: {
    skipToContent: 'Skip to content',
    about: 'About',
    founder: 'Founder',
    products: 'Products',
    contact: 'Contact',
    themeLabel: 'Toggle color theme',
    themeLight: 'Switch to light theme',
    themeDark: 'Switch to dark theme',
    localeLabel: 'Change language',
    localeEn: 'English',
    localeEs: 'Español',
  },
  hero: {
    eyebrow: 'Independent software studio',
    wordmarkTop: 'Waycross',
    wordmarkBottom: 'Labs',
    establishment: 'Est. Charlotte, NC · 28214',
    tagline: 'An independent software studio. Built in the Carolina Piedmont.',
    scrollCue: 'Scroll',
  },
  about: {
    eyebrow: 'About',
    heading: 'A workshop, not a factory.',
    body: 'Waycross Labs is an independent engineering studio. We build small, useful software products one at a time — the kind that hold up under real use, not the kind that demo well and crumble. The lab is small on purpose: every product gets built with care, shipped without ceremony, and judged on whether it earns its keep.',
  },
  founder: {
    eyebrow: 'Founder',
    nameDisplay: 'JT Earl',
    nameLong: 'John "JT" Earl',
    role: 'Founder & Engineer',
    body: 'Ten years of software engineering inside heavily regulated finance taught JT Earl to build for the long haul — systems where being wrong was expensive. He carries that rigor into Waycross Labs as Founder & Engineer: AWS Solution Architect and AWS Developer certified, deliberately tech-stack agnostic, picking the right tool for the problem rather than the loudest one. The work itself is the point — build, create, never stop asking why, never finish learning. Waycross Labs is where that runs.',
    credsHeading: 'Credentials',
    credAwsSa: 'AWS Solution Architect',
    credAwsDev: 'AWS Developer',
    socialsHeading: 'Where to find him',
    githubLabel: 'GitHub',
    linkedinLabel: 'LinkedIn',
  },
  products: {
    eyebrow: 'Products',
    heading: 'What the lab is shipping.',
    countLabel: '01 / 01 live',
    framefocal: {
      tagline: 'Photo galleries built for photographers and clients.',
      description:
        'A modern, cost-optimized platform for photographers to share their work with clients through secure, password-protected galleries — with optional watermarking, client favorites, and download analytics. Quietly engineered to keep storage and CDN costs in check while looking the way photography is supposed to look.',
      featureList: [
        'Password-protected client galleries',
        'Optional watermarking & download analytics',
        'EXIF metadata, favorites, expirations',
        'Built on AWS · S3 · CloudFront · Lambda',
      ],
      statusLabel: 'Live',
      cta: 'Visit framefocal.com',
    },
  },
  contact: {
    eyebrow: 'Contact',
    heading: 'Two doors. Pick the right one.',
    body: 'We keep the inboxes separate so messages get to the right place. If you’re not sure, default to support — we’ll route it.',
    devTitle: 'Developer',
    devEmail: 'dev@waycrosslabs.com',
    devUseFor: 'Use this for: developer outreach, partnership inquiries, technical questions, security disclosures.',
    devCta: 'Email the developer',
    supportTitle: 'Support & General',
    supportEmail: 'support@waycrosslabs.com',
    supportUseFor: 'Use this for: product support, account questions, press, and everything else.',
    supportCta: 'Email support',
  },
  footer: {
    location: 'Charlotte, NC · 28214',
    coordinates: '35.2914° N · 80.9659° W',
    rights: '© {year} Waycross Labs LLC. All rights reserved.',
    builtIn: 'Built in the Carolina Piedmont.',
  },
};

export default en;
