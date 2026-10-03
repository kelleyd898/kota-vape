import img38 from '@/assets/products/38.webp.asset.json';
import img531 from '@/assets/products/531.webp.asset.json';
import img529 from '@/assets/products/529.webp.asset.json';
import img517 from '@/assets/products/517.webp.asset.json';
import type { Product } from './types';

// Separate collection from the main shop. Every entry shares the same
// category: 'Replacement Pods'. Entries remain illustrative until verified.
// Note: `price` is kept only so the page can sort low→high / high→low.
export const replacementPods: Product[] = [
  { id: 101, slug: 'caliburn-g2-replacement-pod', name: 'Caliburn G2 Replacement Pod', sku: 'RP-001', image: img38.url, price: 449, category: 'Replacement Pods', bestseller: true, relatedProducts: [] },
  { id: 102, slug: 'caliburn-a2-replacement-pod', name: 'Caliburn A2 Replacement Pod', sku: 'RP-002', image: img531.url, price: 399, category: 'Replacement Pods', bestseller: false, relatedProducts: [] },
  { id: 103, slug: 'caliburn-x-replacement-pod', name: 'Caliburn X Replacement Pod', sku: 'RP-003', image: img529.url, price: 549, category: 'Replacement Pods', bestseller: false, relatedProducts: [] },
  { id: 104, slug: 'koko-ak2-replacement-pod', name: 'Koko AK2 Replacement Pod', sku: 'RP-004', image: img517.url, price: 429, category: 'Replacement Pods', bestseller: false, relatedProducts: [] },
  { id: 105, slug: 'elf-mate-500-replacement-pod', name: 'Elf Mate 500 Replacement Pod', sku: 'RP-005', image: img38.url, price: 499, category: 'Replacement Pods', bestseller: true, relatedProducts: [] },
  { id: 106, slug: 'elfa-replacement-pod', name: 'Elfa Replacement Pod', sku: 'RP-006', image: img531.url, price: 599, category: 'Replacement Pods', bestseller: false, relatedProducts: [] },
  { id: 107, slug: 'iget-bar-replacement-pod', name: 'IGET Bar Replacement Pod', sku: 'RP-007', image: img529.url, price: 649, category: 'Replacement Pods', bestseller: false, relatedProducts: [] },
  { id: 108, slug: 'iget-legend-replacement-pod', name: 'IGET Legend Replacement Pod', sku: 'RP-008', image: img517.url, price: 699, category: 'Replacement Pods', bestseller: false, relatedProducts: [] },
  { id: 109, slug: 'pod-salt-go-replacement-pod', name: 'Pod Salt Go Replacement Pod', sku: 'RP-009', image: img38.url, price: 379, category: 'Replacement Pods', bestseller: false, relatedProducts: [] },
  { id: 110, slug: 'pod-salt-nexus-replacement-pod', name: 'Pod Salt Nexus Replacement Pod', sku: 'RP-010', image: img531.url, price: 749, category: 'Replacement Pods', bestseller: true, relatedProducts: [] },
  { id: 111, slug: 'caliburn-g3-replacement-pod', name: 'Caliburn G3 Replacement Pod', sku: 'RP-011', image: img529.url, price: 519, category: 'Replacement Pods', bestseller: false, relatedProducts: [] },
  { id: 112, slug: 'koko-prime-replacement-pod', name: 'Koko Prime Replacement Pod', sku: 'RP-012', image: img517.url, price: 469, category: 'Replacement Pods', bestseller: false, relatedProducts: [] },
];
