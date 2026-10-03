import { elfBarProducts } from './catalog/elfBar';
import { uwellProducts } from './catalog/uwell';
import { podSaltProducts } from './catalog/podSalt';
import { igetProducts } from './catalog/iget';
export type { Product } from './catalog/types';
// Illustrative references only; no prices, SKU values, or availability are inferred.
export const products = [...elfBarProducts, ...uwellProducts, ...podSaltProducts, ...igetProducts];
