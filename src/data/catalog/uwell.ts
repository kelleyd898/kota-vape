import caliburnG2 from '@/assets/products/38.webp';
import caliburnGK3 from '@/assets/products/491.webp';
import type { Product } from './types';
export const uwellProducts: Product[] = [
  { id: 4, slug: 'caliburn-g2-pod-system-kit', name: 'Caliburn G2 Pod System Kit', sku: '38', image: caliburnG2, price: 1149, category: 'Uwell', bestseller: true, relatedProducts: ['caliburn-gk3-25w-pod-system'] },
  { id: 11, slug: 'caliburn-gk3-25w-pod-system', name: 'CALIBURN GK3 25W Pod System', sku: '491', image: caliburnGK3, price: 4599, category: 'Uwell', bestseller: false, relatedProducts: ['caliburn-g2-pod-system-kit'] },
];
