import { products } from '@/data/products';
export const getProducts = () => products;
export const getProductBySlug = (slug: string) => products.find(product => product.slug === slug);
export const getRelatedProducts = (slugs: string[]) => products.filter(product => slugs.includes(product.slug));
