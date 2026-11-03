import imgTwilightPearl from '@/assets/products/twilight-pearl.webp';
import imgTereaSilver from '@/assets/products/terea-silver.webp';
import imgTereaBronze from '@/assets/products/terea-bronze.webp';
import type { Product } from './types';

export const terraProducts: Product[] = [
  {
    id: 201,
    slug: 'iqos-terea-twilight-pearl',
    name: 'IQOS TEREA – Twilight Pearl',
    sku: null,
    image: imgTwilightPearl,
    price: 5000,
    originalPrice: 8000,
    category: 'Terra',
    bestseller: false,
    relatedProducts: ['iqos-terea-silver', 'iqos-terea-bronze'],
    features: [
      'Product Type: Heated Tobacco Sticks',
      'Compatibility: IQOS ILUMA Compatible Devices',
      'Flavour Profile: Smooth Tobacco & Aromatic Notes',
      'Category: Premium TEREA Tobacco Sticks',
    ],
  },
  {
    id: 202,
    slug: 'iqos-terea-silver',
    name: 'IQOS TEREA – Silver',
    sku: null,
    image: imgTereaSilver,
    price: 5000,
    originalPrice: 8000,
    category: 'Terra',
    bestseller: false,
    relatedProducts: ['iqos-terea-twilight-pearl', 'iqos-terea-bronze'],
    features: [
      'Product Type: Heated Tobacco Sticks',
      'Compatibility: IQOS ILUMA Compatible Devices',
      'Flavour Profile: Classic Tobacco Character with a Smooth and Balanced Taste',
      'Category: Premium TEREA Tobacco Sticks',
    ],
  },
  {
    id: 203,
    slug: 'iqos-terea-bronze',
    name: 'IQOS TEREA – Bronze',
    sku: null,
    image: imgTereaBronze,
    price: 5000,
    originalPrice: 8000,
    category: 'Terra',
    bestseller: false,
    relatedProducts: ['iqos-terea-twilight-pearl', 'iqos-terea-silver'],
    features: [
      'Product Type: Heated Tobacco Sticks',
      'Compatibility: IQOS ILUMA Compatible Devices',
      'Flavour Profile: Smooth Tobacco & Aromatic Notes',
      'Category: Premium TEREA Tobacco Sticks',
    ],
  },
];
