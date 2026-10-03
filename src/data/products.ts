import { elfBarProducts } from './catalog/elfBar';
import { uwellProducts } from './catalog/uwell';
import { igetProducts } from './catalog/iget';
import { funkyRepublicProducts } from './catalog/funkyRepublic';
import { vaporessoProducts } from './catalog/vaporesso';
import { vgodProducts } from './catalog/vgod';
import { nastyBarProducts } from './catalog/nastyBar';
import { podSaltProducts } from './catalog/podSalt';
export type { Product } from './catalog/types';
// Illustrative references only; no prices, SKU values, or availability are inferred.
// Category-wise modules: add products to the matching file in src/data/catalog/.
export const products = [
  ...elfBarProducts,
  ...uwellProducts,
  ...igetProducts,
  ...funkyRepublicProducts,
  ...vaporessoProducts,
  ...vgodProducts,
  ...nastyBarProducts,
  ...podSaltProducts,
];
