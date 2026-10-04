import xros2Asset from '@/assets/products/797.webp';
import luxeQsAsset from '@/assets/products/791.webp';
import luxeQ2SeAsset from '@/assets/products/789.webp';
import type { Product } from './types';
export const vaporessoProducts: Product[] = [
  { id: 30, slug: 'vaporesso-xros-2-16w-pod-system', name: 'Vaporesso XROS 2 16W Pod System', sku: '797', image: xros2, price: 3700, category: 'Vaporesso', bestseller: true, relatedProducts: ['vaporesso-luxe-qs', 'vaporesso-luxe-q2-se'] },
  { id: 31, slug: 'vaporesso-luxe-qs', name: 'Vaporesso Luxe QS', sku: '791', image: luxeQs, price: 3699, category: 'Vaporesso', bestseller: true, relatedProducts: ['vaporesso-xros-2-16w-pod-system', 'vaporesso-luxe-q2-se'] },
  { id: 32, slug: 'vaporesso-luxe-q2-se', name: 'Vaporesso LUXE Q2 SE', sku: '789', image: luxeQ2Se, price: 3699, category: 'Vaporesso', bestseller: true, relatedProducts: ['vaporesso-luxe-qs', 'vaporesso-xros-2-16w-pod-system'] },
];
