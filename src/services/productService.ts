import { products } from '@/data/products';
import { replacementPods } from '@/data/catalog/replacementPods';
import type { Product } from '@/data/products';
export const getProducts = () => products;
export const getProductBySlug = (slug: string) => [...products, ...replacementPods].find(product => product.slug === slug);
export const getRelatedProducts = (product: Product) => {
  const isPod = replacementPods.some(item => item.slug === product.slug);
  if (isPod) {
    // Replacement pods: related items are simply the other pods (same category).
    return replacementPods.filter(item => item.slug !== product.slug);
  }
  return products.filter(item => item.slug !== product.slug && item.category === product.category && product.relatedProducts.includes(item.slug));
};
