import image from '@/assets/product-kit.jpg';
import type { Product } from './types';
export const igetProducts: Product[] = [
  { id: 3, slug: 'silver-pod-kit', name: 'Silver Pod Kit', sku: null, image, price: null, category: 'IGET', bestseller: true, relatedProducts: ['metallic-kit-profile'] },
  { id: 8, slug: 'metallic-kit-profile', name: 'Metallic Kit Profile', sku: null, image, price: null, category: 'IGET', bestseller: true, relatedProducts: ['silver-pod-kit'] },
];
