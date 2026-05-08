import type { Locale } from './index';

interface SeoCopy {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}

const seo: Record<Locale, SeoCopy> = {
  en: {
    title: 'Waycross Labs — Independent Software Studio · Charlotte, NC',
    description:
      'Waycross Labs is an independent software studio in Charlotte, NC. Founded by JT Earl — AWS Solution Architect and Developer certified — currently shipping FrameFocal, a photo-gallery platform for photographers.',
    keywords: [
      'Waycross Labs',
      'JT Earl',
      'John Earl software engineer',
      'independent software studio Charlotte',
      'AWS Solution Architect Charlotte',
      'FrameFocal',
      'engineering studio NC',
      'Carolina Piedmont software',
    ],
    ogImage: '/og-image.png',
  },
  es: {
    title: 'Waycross Labs — Estudio de Software Independiente · Charlotte, NC',
    description:
      'Waycross Labs es un estudio de software independiente en Charlotte, NC. Fundado por JT Earl — certificado AWS Solution Architect y Developer — actualmente desarrollando FrameFocal, una plataforma de galerías para fotógrafos.',
    keywords: [
      'Waycross Labs',
      'JT Earl',
      'estudio de software Charlotte',
      'AWS Solution Architect Charlotte',
      'FrameFocal',
      'estudio de ingeniería NC',
    ],
    ogImage: '/og-image-es.png',
  },
};

export default seo;
