import image from '@/assets/product-disposable.jpg';
import type { Product } from './types';
export const elfBarProducts: Product[] = [
  { id: 2, slug: 'forest-edition-device', name: 'Forest Edition Device', sku: null, image, price: null, category: 'Elf Bar', bestseller: false, relatedProducts: ['emerald-device-profile'] },
  { id: 7, slug: 'emerald-device-profile', name: 'Emerald Device Profile', sku: null, image, price: null, category: 'Elf Bar', bestseller: false, relatedProducts: ['forest-edition-device'] },
];
