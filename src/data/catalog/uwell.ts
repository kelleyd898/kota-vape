import caliburnG2 from '@/assets/products/38.webp';
import caliburnGK3 from '@/assets/products/491.webp';
import caliburnA2SAsset from '@/assets/products/501.webp.asset.json';
import caliburnG3LiteAsset from '@/assets/products/487.webp.asset.json';
import type { Product } from './types';
export const uwellProducts: Product[] = [
  { id: 4, slug: 'caliburn-g2-pod-system-kit', name: 'Caliburn G2 Pod System Kit', sku: '38', image: caliburnG2, price: 1149, category: 'Uwell', bestseller: true, relatedProducts: ['caliburn-gk3-25w-pod-system'] },
  { id: 11, slug: 'caliburn-gk3-25w-pod-system', name: 'CALIBURN GK3 25W Pod System', sku: '491', image: caliburnGK3, price: 4599, category: 'Uwell', bestseller: false, relatedProducts: ['caliburn-g2-pod-system-kit'] },
  { id: 24, slug: 'uwell-caliburn-a2s-pod-system', name: 'Uwell Caliburn A2S Pod System', sku: '501', image: caliburnA2SAsset.url, price: 2999, category: 'Uwell', bestseller: false, trending: true, relatedProducts: ['uwell-caliburn-g3-lite-25w-pod-system', 'caliburn-gk3-25w-pod-system'] },
  { id: 25, slug: 'uwell-caliburn-g3-lite-25w-pod-system', name: 'Uwell Caliburn G3 Lite 25W Pod System', sku: '487', image: caliburnG3LiteAsset.url, price: 2999, category: 'Uwell', bestseller: false, trending: true, relatedProducts: ['uwell-caliburn-a2s-pod-system', 'caliburn-gk3-25w-pod-system'] },
];
