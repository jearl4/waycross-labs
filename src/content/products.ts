import type { Locale } from '@/i18n/index';

export interface Product {
  id: string;
  name: string;
  url: string;
  status: 'live' | 'coming-soon';
  accent: 'clay' | 'pine' | 'gold';
  /** translation key under `t.products` that contains this product's localized copy */
  copyKey: 'framefocal';
}

export const products: readonly Product[] = [
  {
    id: 'framefocal',
    name: 'FrameFocal',
    url: 'https://framefocal.com',
    status: 'live',
    accent: 'clay',
    copyKey: 'framefocal',
  },
];

export function liveProductsCount(_locale: Locale): number {
  return products.filter((p) => p.status === 'live').length;
}
