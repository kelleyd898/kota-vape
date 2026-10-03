import blueberryPomegranate from '@/assets/products/531.webp.asset.json';
import blueberryMist from '@/assets/products/529.webp.asset.json';
import bananaIce from '@/assets/products/517.webp.asset.json';
import type { Product } from './types';
export const podSaltProducts: Product[] = [
  { id: 3, slug: 'blueberry-pomegranate-pod-salt-nicotine-salt', name: 'Blueberry Pomegranate POD SALT Nicotine Salt', sku: '531', image: blueberryPomegranate.url, price: 1400, category: 'Pod Salt', bestseller: true, relatedProducts: ['blueberry-mist-pod-salt-nicotine-salt', 'banana-ice-pod-salt-nicotine-salt'] },
  { id: 2, slug: 'blueberry-mist-pod-salt-nicotine-salt', name: 'Blueberry Mist POD SALT Nicotine Salt', sku: '529', image: blueberryMist.url, price: 1400, category: 'Pod Salt', bestseller: true, relatedProducts: ['blueberry-pomegranate-pod-salt-nicotine-salt', 'banana-ice-pod-salt-nicotine-salt'] },
  { id: 1, slug: 'banana-ice-pod-salt-nicotine-salt', name: 'BANANA ICE – POD SALT NICOTINE SALT', sku: '517', image: bananaIce.url, price: 1400, category: 'Pod Salt', bestseller: true, relatedProducts: ['blueberry-pomegranate-pod-salt-nicotine-salt', 'blueberry-mist-pod-salt-nicotine-salt'] },
];
