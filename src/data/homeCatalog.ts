import { products } from '@/data/products';
import type { CategoryName } from '@/data/catalog/types';

const mainShopCategories: CategoryName[] = ['Elf Bar', 'IGET Vape', 'Nic Salts', 'Terra'];

// Homepage merchandising is deliberately restricted to the four main shop categories.
export const homeCatalogProducts = products.filter((product) => mainShopCategories.includes(product.category));
export const homeTrendingProducts = homeCatalogProducts.filter((product) => product.trending);
export const homeBestSellerProducts = homeCatalogProducts.filter((product) => product.bestseller);

const featuredSlugs = new Set(
  [...homeTrendingProducts, ...homeBestSellerProducts].map((product) => product.slug),
);

// Show the rest of the range without repeating products already featured above.
export const homeCollectionProducts = homeCatalogProducts.filter((product) => !featuredSlugs.has(product.slug));
