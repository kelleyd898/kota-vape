import imgD1Cola from '@/assets/products/elf-d1-cola.webp';
import imgIkColaIce from '@/assets/products/elf-ik-cola-ice.webp';
import imgMnBrw from '@/assets/products/elf-mn-brw.webp';
import imgD3MiamiMint from '@/assets/products/elf-d3-miami-mint.webp';
import imgD3BlueberryIce from '@/assets/products/elf-d3-blueberry-ice.webp';
import imgD1BlueberryMint from '@/assets/products/elf-d1-blueberry-mint.webp';
import imgD1MangoStrawberry from '@/assets/products/elf-d1-mango-strawberry.webp';
import imgD1KiwiGuavaGrape from '@/assets/products/elf-d1-kiwi-guava-grape.webp';
import imgIkMixedBerries from '@/assets/products/elf-ik-mixed-berries.webp';
import imgD3PeachIce from '@/assets/products/elf-d3-peach-ice.webp';
import imgGhKiwiPassionFruitGuava from '@/assets/products/elfbar-gh23000-kiwi-passion-fruit-guava.webp';
import imgGhBlueRazzIceRaspberry from '@/assets/products/elfbar-gh23000-blue-razz-ice-raspberry.webp';
import imgYuzuTropicalMango from '@/assets/products/yuzu-15000-tropical-mango.webp';
import imgBc5000WatermelonIce from '@/assets/products/elfbar-bc5000-watermelon-ice.webp';
import imgCaliburnA3s from '@/assets/products/uwell-caliburn-a3s-16w-pod-kit.webp';
import imgElfworldMintMenthol from '@/assets/products/elfworld-12000-mint-menthol.webp';
import imgYoutoAntonovkaApple from '@/assets/products/youto-thanos-antonovka-apple.webp';
import imgElfworldWatermelonIce from '@/assets/products/elfworld-12k-watermelon-ice.webp';
import imgIkBlueRazzLemonade from '@/assets/products/elf-bar-ice-king-30k-blue-razz-lemonade.webp';
import imgSmokNordX from '@/assets/products/smok-nord-x-60w-pod-mod-kit.webp';
import imgRayaD2WatermelonIce from '@/assets/products/elfbar-raya-d2-20000-puffs-watermelon-ice.webp';
import imgRayaD3AllFlavours from '@/assets/products/elfbar-raya-d3-all-flavours.webp';
import imgSmokNovo2 from '@/assets/products/smok-novo-2-25w-pod-system.webp';
import imgChargeableMixedBerries from '@/assets/products/chargeable-disposable-vapes-mixed-berries.webp';
import imgGenPt60 from '@/assets/products/gen-pt-60-vape-kit.webp';
import imgDrag4 from '@/assets/products/drag-4-vape-mod-kit.webp';
import imgCrownX from '@/assets/products/uwell-crown-x-pod-system.webp';
import imgSpacemanAppleKiwiIce from '@/assets/products/smok-spaceman-prism-20k-apple-kiwi-ice.webp';
import imgSpacemanBlueRazzIce from '@/assets/products/smok-spaceman-prism-20k-blue-razz-ice.webp';
import imgYoutoDigiGrapeIce from '@/assets/products/youto-digi-15000-grape-ice.webp';
import imgRayaD2Tobacco from '@/assets/products/elfbar-raya-d2-tobacco-5-percent-nic.webp';
import imgGeekBarSkyview from '@/assets/products/geek-bar-skyview-blue-razz-ice.webp';
import { standardProductDetails } from './productDetails';
import type { Product } from './types';

type Seed = { id: number; slug: string; name: string; image: string; price: number; features?: string[]; productDetails?: string[]; bestseller?: boolean; trending?: boolean };

const seeds: Seed[] = [
  { id: 301, slug: 'elf-bar-raya-d1-mango-strawberry-ice-cream', name: 'ELF BAR RAYA D1 – Mango Strawberry Ice Cream', image: imgD1MangoStrawberry, price: 2200, features: ['18ml Pre-Filled Vape Juice', '5% (50mg) Nic Salt', 'Rechargeable 650mAh Battery', 'Type-C Charging Port', 'Approximately 13,000 Puffs', 'Anti-Dry Technology', 'E-Liquid & Power Display'] },
  { id: 302, slug: 'elf-bar-raya-d1-kiwi-guava-grape', name: 'ELF BAR RAYA D1 – Kiwi Guava Grape', image: imgD1KiwiGuavaGrape, price: 2200, features: ['Kiwi, Guava & Grape Flavour Blend', 'Sweet, Tangy & Tropical Taste', 'Approximately 13,000 Puffs', '18ml Pre-Filled Vape Juice', '5% Nicotine Salt (50mg)', 'Rechargeable 650mAh Battery', 'Type-C Charging Port', 'Anti-Dry Technology', 'E-Liquid & Power Display', 'Lightweight, Portable & Durable Design'] },
  { id: 303, slug: 'elf-bar-raya-d1-blueberry-mint', name: 'ELF BAR RAYA D1 – Blueberry Mint', image: imgD1BlueberryMint, price: 2200, trending: true, features: ['Sweet Blueberry & Refreshing Mint Flavour', 'Smooth & Flavourful Experience', 'Up to 13,000 Puffs', '5% Nicotine Strength', '18ml E-Liquid Capacity', 'Rechargeable 650mAh Battery', 'Type-C Charging Support', 'Long-Lasting Flavour Performance', 'Convenient & Easy-to-Use Design'] },
  { id: 304, slug: 'elf-bar-ice-king-mixed-berries-30k', name: 'Elf Bar Ice King – Mixed Berries – 30K', image: imgIkMixedBerries, price: 2899, features: ['Mixed Berries Flavour', 'Up to 30,000 Puffs', 'Adjustable Coolness', 'Adjustable Power & Airflow', '5-Level Adjustable Coolness'] },
  { id: 305, slug: 'elf-bar-raya-d1-cola', name: 'ELF BAR RAYA D1 – Cola', image: imgD1Cola, price: 2200, bestseller: true, features: ['Classic & Refreshing Cola Flavour', 'Smooth & Flavourful Experience', 'Approximately 13,000 Puffs', '18ml Pre-Filled Vape Juice', '5% Nicotine Salt (50mg)', 'Rechargeable 650mAh Battery', 'Type-C Charging Support', 'Anti-Dry Technology', 'E-Liquid & Power Display', 'Lightweight, Sturdy & Portable Design'] },
  { id: 306, slug: 'elf-bar-moon-night-blueberry-raspberry-watermelon', name: 'Elf Bar Moon Night – Blueberry Raspberry Watermelon', image: imgMnBrw, price: 3299, bestseller: true, features: ['Triple Fruit Flavour: Blueberry, Raspberry & Watermelon', 'Smooth Airflow with Dense Vapour Output', 'Ready-to-Use Disposable Device', 'No Charging or Refilling Required', 'Compact, Lightweight & Portable Design', 'Premium Elf Bar Moon Night Quality'] },
  { id: 307, slug: 'elf-bar-ice-king-cola-ice-30k', name: 'Elf Bar Ice King – Cola Ice – 30K', image: imgIkColaIce, price: 2899, trending: true, features: ['Classic Cola Flavour with Icy Finish', 'Fizzy, Sweet & Refreshing Taste', 'Up to 30,000 Puffs', 'Long-Lasting Performance', 'Smooth & Consistent Vapour Delivery', 'Sleek & Portable Design', 'No Charging or Refilling Required'] },
  { id: 308, slug: 'elf-bar-raya-d3-pro-30k-peach-ice', name: 'Elf Bar Raya D3 Pro – 30K Peach Ice', image: imgD3PeachIce, price: 2999, features: ['Sweet & Juicy Ripe Peach Flavour', 'Refreshing Icy Cool Finish', 'Up to 30,000 Puffs', 'Rechargeable High-Capacity Device', 'Smooth Draw & Consistent Vapour Delivery', 'Rich & Long-Lasting Flavour', 'Sleek & Compact Design', 'Travel-Friendly & Easy to Carry'] },
  { id: 309, slug: 'elf-bar-raya-d3-pro-30k-miami-mint', name: 'Elf Bar Raya D3 Pro 30K – Miami Mint', image: imgD3MiamiMint, price: 2999, trending: true, features: ['Crisp & Refreshing Mint Flavour', 'Cool, Icy Finish', 'Smooth & Satisfying Inhale', 'High-Capacity, Long-Lasting Performance', 'Clean & Invigorating Flavour', 'Convenient & Easy-to-Use Design', 'Portable & Travel-Friendly'] },
  { id: 310, slug: 'elf-bar-raya-d3-pro-30k-blueberry-ice', name: 'Elf Bar Raya D3 Pro 30K – Blueberry Ice', image: imgD3BlueberryIce, price: 2999, bestseller: true, features: ['Sweet & Juicy Ripe Blueberry Flavour', 'Refreshing Flavour Twist', 'Cooling Menthol Finish', 'Crisp Icy Kick', 'Smooth & Satisfying Inhale', 'High-Capacity, Long-Lasting Performance', 'Convenient & Easy-to-Use Design', 'Portable & Travel-Friendly'] },
  { id: 311, slug: 'elfbar-gh23000-kiwi-passion-fruit-guava', name: 'Elfbar GH23000 Kiwi Passion Fruit Guava', image: imgGhKiwiPassionFruitGuava, price: 2400, productDetails: standardProductDetails },
  { id: 312, slug: 'elfbar-gh23000-blue-razz-ice-raspberry', name: 'Elfbar GH23000 Blue Razz Ice Raspberry', image: imgGhBlueRazzIceRaspberry, price: 2400, productDetails: standardProductDetails },
  { id: 313, slug: 'yuzu-15000-puffs-tropical-mango', name: 'YUZU 15000 Puffs Tropical Mango', image: imgYuzuTropicalMango, price: 2300, productDetails: standardProductDetails },
  { id: 314, slug: 'elfbar-bc5000-watermelon-ice', name: 'Elfbar BC5000 Watermelon Ice', image: imgBc5000WatermelonIce, price: 1500, productDetails: standardProductDetails },
  { id: 315, slug: 'uwell-caliburn-a3s-16w-pod-kit', name: 'Uwell Caliburn A3S 16W Pod Kit', image: imgCaliburnA3s, price: 4000, productDetails: standardProductDetails },
  { id: 316, slug: 'elfworld-12000-puffs-mint-menthol', name: 'Elfworld 12000 Puffs Mint Menthol', image: imgElfworldMintMenthol, price: 2000, productDetails: standardProductDetails },
  { id: 317, slug: 'youto-thanos-antonovka-apple', name: 'Youto Thanos Antonovka Apple', image: imgYoutoAntonovkaApple, price: 1500, productDetails: standardProductDetails },
  { id: 318, slug: 'elfworld-12k-watermelon-ice', name: 'Elfworld 12K Watermelon Ice', image: imgElfworldWatermelonIce, price: 2000, productDetails: standardProductDetails },
  { id: 319, slug: 'elf-bar-ice-king-30k-blue-razz-lemonade', name: 'Elf Bar Ice King 30K Blue Razz Lemonade', image: imgIkBlueRazzLemonade, price: 2800, productDetails: standardProductDetails },
  { id: 320, slug: 'smok-nord-x-60w-pod-mod-kit', name: 'SMOK NORD X 60W Pod Mod Kit', image: imgSmokNordX, price: 5300, productDetails: standardProductDetails },
  { id: 321, slug: 'elfbar-raya-d2-20000-puffs-watermelon-ice', name: 'Elfbar RAYA D2 20000 Puffs Watermelon Ice', image: imgRayaD2WatermelonIce, price: 2000, productDetails: standardProductDetails },
  { id: 322, slug: 'elfbar-raya-d3-all-flavours', name: 'Elfbar RAYA D3 All Flavours', image: imgRayaD3AllFlavours, price: 2200, productDetails: standardProductDetails },
  { id: 323, slug: 'smok-novo-2-25w-pod-system', name: 'SMOK NOVO 2 25W Pod System', image: imgSmokNovo2, price: 3500, productDetails: standardProductDetails },
  { id: 324, slug: 'chargeable-disposable-vapes-mixed-berries', name: 'Chargeable Disposable Vapes Mixed Berries', image: imgChargeableMixedBerries, price: 1750, productDetails: standardProductDetails },
  { id: 325, slug: 'gen-pt-60-vape-kit', name: 'GEN PT 60 Vape Kit', image: imgGenPt60, price: 4400, productDetails: standardProductDetails },
  { id: 326, slug: 'drag-4-vape-mod-kit', name: 'DRAG 4 Vape Mod Kit', image: imgDrag4, price: 4900, productDetails: standardProductDetails },
  { id: 327, slug: 'uwell-crown-x-pod-system', name: 'UWELL Crown X Pod System', image: imgCrownX, price: 2800, productDetails: standardProductDetails },
  { id: 328, slug: 'smok-spaceman-prism-20k-apple-kiwi-ice', name: 'SMOK Spaceman Prism 20K Apple Kiwi Ice', image: imgSpacemanAppleKiwiIce, price: 2200, productDetails: standardProductDetails },
  { id: 329, slug: 'smok-spaceman-prism-20k-blue-razz-ice', name: 'SMOK Spaceman Prism 20K Blue Razz Ice', image: imgSpacemanBlueRazzIce, price: 2200, productDetails: standardProductDetails },
  { id: 330, slug: 'youto-digi-15000-grape-ice', name: 'YOUTO DIGI 15000 Grape Ice', image: imgYoutoDigiGrapeIce, price: 1800, productDetails: standardProductDetails },
  { id: 331, slug: 'elfbar-raya-d2-tobacco-5-percent-nic', name: 'Elfbar RAYA D2 Tobacco 5% Nic', image: imgRayaD2Tobacco, price: 2300, productDetails: standardProductDetails },
  { id: 332, slug: 'geek-bar-skyview-blue-razz-ice', name: 'Geek Bar Skyview Blue Razz Ice', image: imgGeekBarSkyview, price: 2300, productDetails: standardProductDetails },
];

export const elfBarProducts: Product[] = seeds.map((s) => ({
  id: s.id,
  slug: s.slug,
  name: s.name,
  sku: null,
  image: s.image,
  price: s.price,
  category: 'Elf Bar',
  bestseller: s.bestseller ?? false,
  trending: s.trending ?? false,
  relatedProducts: [],
  ...(s.productDetails ? { productDetails: s.productDetails } : {}),
  ...(s.features ? { features: s.features } : {}),
}));
