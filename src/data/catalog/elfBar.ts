import iceKingBlueberryIce from '@/assets/products/417.webp';
import iceKingBlackberryCranberry from '@/assets/products/419.webp';
import type { Product } from './types';
export const elfBarProducts: Product[] = [
  { id: 9, slug: 'elf-bar-ice-king-blueberry-ice-30k', name: 'Elf Bar Ice King – Blueberry Ice – 30K', sku: '417', image: iceKingBlueberryIce, price: 2199, category: 'Elf Bar', bestseller: false, relatedProducts: ['elf-bar-ice-king-blackberry-cranberry-30k'] },
  { id: 10, slug: 'elf-bar-ice-king-blackberry-cranberry-30k', name: 'Elf Bar Ice King – Blackberry Cranberry – 30K', sku: '419', image: iceKingBlackberryCranberry, price: 2199, category: 'Elf Bar', bestseller: false, relatedProducts: ['elf-bar-ice-king-blueberry-ice-30k'] },
];
