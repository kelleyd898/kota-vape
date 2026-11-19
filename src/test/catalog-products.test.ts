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
  ['elf-bar-ice-king-30k-blue-razz-lemonade', 'Elf Bar Ice King 30K Blue Razz Lemonade', 2800],
  ['smok-nord-x-60w-pod-mod-kit', 'SMOK NORD X 60W Pod Mod Kit', 5300],
  ['elfbar-raya-d2-20000-puffs-watermelon-ice', 'Elfbar RAYA D2 20000 Puffs Watermelon Ice', 2000],
  ['elfbar-raya-d3-all-flavours', 'Elfbar RAYA D3 All Flavours', 2200],
  ['smok-novo-2-25w-pod-system', 'SMOK NOVO 2 25W Pod System', 3500],
  ['chargeable-disposable-vapes-mixed-berries', 'Chargeable Disposable Vapes Mixed Berries', 1750],
  ['gen-pt-60-vape-kit', 'GEN PT 60 Vape Kit', 4400],
  ['drag-4-vape-mod-kit', 'DRAG 4 Vape Mod Kit', 4900],
  ['uwell-crown-x-pod-system', 'UWELL Crown X Pod System', 2800],
  ['smok-spaceman-prism-20k-apple-kiwi-ice', 'SMOK Spaceman Prism 20K Apple Kiwi Ice', 2200],
  ['smok-spaceman-prism-20k-blue-razz-ice', 'SMOK Spaceman Prism 20K Blue Razz Ice', 2200],
  ['youto-digi-15000-grape-ice', 'YOUTO DIGI 15000 Grape Ice', 1800],
  ['elfbar-raya-d2-tobacco-5-percent-nic', 'Elfbar RAYA D2 Tobacco 5% Nic', 2300],
  ['geek-bar-skyview-blue-razz-ice', 'Geek Bar Skyview Blue Razz Ice', 2300],
  ['iget-sun-kp20000-passion-fruit-grape-orange', 'IGET SUN KP20000 Passion Fruit Grape Orange', 2500],
  ['iget-sun-kp20000-mango-peach-cherry', 'IGET SUN KP20000 Mango Peach Cherry', 2500],
  ['iget-sun-kp20000-classic-tobacco', 'IGET SUN KP20000 Classic Tobacco', 2399],
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

  it('places the three IGET SUN products in IGET Vape', () => {
    const igetSlugs = suppliedProducts.slice(-3).map(([slug]) => slug);
    expect(igetSlugs.map((slug) => getProductBySlug(slug)?.category)).toEqual([
      'IGET Vape',
      'IGET Vape',
      'IGET Vape',
    ]);
  });
});
