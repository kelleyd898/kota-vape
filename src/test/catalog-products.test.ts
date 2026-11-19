import { describe, expect, it } from 'vitest';

import { getProductBySlug } from '@/services/productService';

const suppliedProducts = [
  ['elfbar-gh23000-kiwi-passion-fruit-guava', 'Elfbar GH23000 Kiwi Passion Fruit Guava', 2400],
  ['elfbar-gh23000-blue-razz-ice-raspberry', 'Elfbar GH23000 Blue Razz Ice Raspberry', 2400],
  ['yuzu-15000-puffs-tropical-mango', 'YUZU 15000 Puffs Tropical Mango', 2300],
  ['elfbar-bc5000-watermelon-ice', 'Elfbar BC5000 Watermelon Ice', 1500],
  ['uwell-caliburn-a3s-16w-pod-kit', 'Uwell Caliburn A3S 16W Pod Kit', 4000],
  ['elfworld-12000-puffs-mint-menthol', 'Elfworld 12000 Puffs Mint Menthol', 2000],
  ['youto-thanos-antonovka-apple', 'Youto Thanos Antonovka Apple', 1500],
  ['elfworld-12k-watermelon-ice', 'Elfworld 12K Watermelon Ice', 2000],
] as const;

const suppliedDetails = [
  'Authentic product with warranty',
  'Free delivery in All over India',
  'Cash on delivery available',
];

describe('Owner-supplied product records', () => {
  it.each(suppliedProducts)('keeps the supplied name and price for %s', (slug, name, price) => {
    expect(getProductBySlug(slug)).toMatchObject({ name, price });
  });

  it.each(suppliedProducts)('shows the three supplied Product Details for %s', (slug) => {
    expect(getProductBySlug(slug)?.productDetails).toEqual(suppliedDetails);
  });
});
