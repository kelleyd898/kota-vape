import { elfBarProducts } from './catalog/elfBar';
import { igetProducts } from './catalog/iget';
import { nicSaltsProducts } from './catalog/nicSalts';
import { terraProducts } from './catalog/terra';
export type { Product } from './catalog/types';
// Category-wise modules: add products to the matching file in src/data/catalog/.
export const products = [...elfBarProducts, ...igetProducts, ...nicSaltsProducts, ...terraProducts];
