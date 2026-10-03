import { products } from '@/data/products';
import { replacementPods } from '@/data/catalog/replacementPods';
import type { Product } from '@/data/products';
export const getProducts = () => products;
export const getProductBySlug = (slug: string) => [...products, ...replacementPods].find(product => product.slug === slug);
export const getRelatedProducts = (product: Product) => {
  const collection = replacementPods.some(item => item.slug === product.slug) ? replacementPods : products;
  return collection.filter(item => item.slug !== product.slug && item.category === product.category && product.relatedProducts.includes(item.slug));
};
