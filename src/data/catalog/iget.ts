import imageOnRequest from '@/assets/image-on-request.webp';
import { standardProductDetails } from './productDetails';
import type { Product } from './types';

export const igetProducts: Product[] = [
  {
    id: 333,
    slug: 'iget-sun-kp20000-passion-fruit-grape-orange',
    name: 'IGET SUN KP20000 Passion Fruit Grape Orange',
    sku: null,
    image: imageOnRequest,
    price: 2500,
    category: 'IGET Vape',
    bestseller: false,
    trending: false,
    relatedProducts: ['iget-sun-kp20000-mango-peach-cherry', 'iget-sun-kp20000-classic-tobacco'],
    productDetails: standardProductDetails,
  },
  {
    id: 334,
    slug: 'iget-sun-kp20000-mango-peach-cherry',
    name: 'IGET SUN KP20000 Mango Peach Cherry',
    sku: null,
    image: imageOnRequest,
    price: 2500,
    category: 'IGET Vape',
    bestseller: false,
    trending: false,
    relatedProducts: ['iget-sun-kp20000-passion-fruit-grape-orange', 'iget-sun-kp20000-classic-tobacco'],
    productDetails: standardProductDetails,
  },
  {
    id: 335,
    slug: 'iget-sun-kp20000-classic-tobacco',
    name: 'IGET SUN KP20000 Classic Tobacco',
    sku: null,
    image: imageOnRequest,
    price: 2399,
    category: 'IGET Vape',
    bestseller: false,
    trending: false,
    relatedProducts: ['iget-sun-kp20000-passion-fruit-grape-orange', 'iget-sun-kp20000-mango-peach-cherry'],
    productDetails: standardProductDetails,
  },
];
