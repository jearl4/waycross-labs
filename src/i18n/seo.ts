import type { Locale } from './index';

interface SeoCopy {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}

const seo: Record<Locale, SeoCopy> = {
  en: {
    title: 'Waycross Labs — A Small Software Lab · Charlotte, NC',
    description:
      'Waycross Labs is a small software lab in Charlotte, NC, where JT Earl builds useful software one product at a time. Currently shipping FrameFocal, a photo-gallery platform for photographers.',
    keywords: [
      'Waycross Labs',
      'JT Earl',
      'John Earl software engineer',
      'software lab Charlotte',
      'AWS Solution Architect Charlotte',
      'FrameFocal',
      'Carolina Piedmont software',
    ],
    ogImage: '/og-image.png',
  },
  es: {
    title: 'Waycross Labs — Un Pequeño Laboratorio de Software · Charlotte, NC',
    description:
      'Waycross Labs es un pequeño laboratorio de software en Charlotte, NC, donde JT Earl construye software útil, un producto a la vez. Actualmente desarrollando FrameFocal, una plataforma de galerías para fotógrafos.',
    keywords: [
      'Waycross Labs',
      'JT Earl',
      'laboratorio de software Charlotte',
      'AWS Solution Architect Charlotte',
      'FrameFocal',
    ],
    ogImage: '/og-image-es.png',
  },
};

export default seo;
