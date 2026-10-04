import caliburnG2 from '@/assets/products/38.webp';
import caliburnGK3 from '@/assets/products/491.webp';
import caliburnA2SAsset from '@/assets/products/501.webp';
import caliburnG3LiteAsset from '@/assets/products/487.webp';
import caliburnGK2Asset from '@/assets/products/509.webp';
import caliburnA3Asset from '@/assets/products/503.webp';
import caliburnXAsset from '@/assets/products/497.webp';
import type { Product } from './types';
export const uwellProducts: Product[] = [
  { id: 4, slug: 'caliburn-g2-pod-system-kit', name: 'Caliburn G2 Pod System Kit', sku: '38', image: caliburnG2, price: 1149, category: 'Uwell', bestseller: false, relatedProducts: ['caliburn-gk3-25w-pod-system'] },
  { id: 11, slug: 'caliburn-gk3-25w-pod-system', name: 'CALIBURN GK3 25W Pod System', sku: '491', image: caliburnGK3, price: 4599, category: 'Uwell', bestseller: true, relatedProducts: ['caliburn-g2-pod-system-kit'] },
  { id: 24, slug: 'uwell-caliburn-a2s-pod-system', name: 'Uwell Caliburn A2S Pod System', sku: '501', image: caliburnA2SAsset, price: 2999, category: 'Uwell', bestseller: false, trending: true, relatedProducts: ['uwell-caliburn-g3-lite-25w-pod-system', 'caliburn-gk3-25w-pod-system'] },
  { id: 25, slug: 'uwell-caliburn-g3-lite-25w-pod-system', name: 'Uwell Caliburn G3 Lite 25W Pod System', sku: '487', image: caliburnG3LiteAsset, price: 2999, category: 'Uwell', bestseller: false, trending: true, relatedProducts: ['uwell-caliburn-a2s-pod-system', 'caliburn-gk3-25w-pod-system'] },
  { id: 26, slug: 'uwell-caliburn-gk2-pod-system', name: 'Uwell Caliburn GK2 Pod System', sku: '509', image: caliburnGK2Asset, price: 4299, category: 'Uwell', bestseller: true, relatedProducts: ['uwell-caliburn-a3-15w-pod-system-device', 'caliburn-gk3-25w-pod-system'] },
  { id: 27, slug: 'uwell-caliburn-a3-15w-pod-system-device', name: 'Uwell Caliburn A3 15W Pod System Device', sku: '503', image: caliburnA3Asset, price: 3699, category: 'Uwell', bestseller: true, relatedProducts: ['uwell-caliburn-gk2-pod-system', 'uwell-caliburn-x-20w-pod-system'] },
  { id: 28, slug: 'uwell-caliburn-x-20w-pod-system', name: 'Uwell Caliburn X 20W Pod System', sku: '497', image: caliburnXAsset, price: 4299, category: 'Uwell', bestseller: true, relatedProducts: ['uwell-caliburn-gk2-pod-system', 'uwell-caliburn-a3-15w-pod-system-device'] },
];

