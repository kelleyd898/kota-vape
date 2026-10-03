import image from '@/assets/product-pods.jpg';
import type { Product } from './types';
export const uwellProducts: Product[] = [
  { id: 1, slug: 'classic-pod-device', name: 'Classic Pod Device', sku: null, image, price: null, category: 'Uwell', bestseller: true, relatedProducts: ['graphite-pod-profile'] },
  { id: 5, slug: 'graphite-pod-profile', name: 'Graphite Pod Profile', sku: null, image, price: null, category: 'Uwell', bestseller: true, relatedProducts: ['classic-pod-device'] },
];
