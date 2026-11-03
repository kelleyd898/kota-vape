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
import imageOnRequest from '@/assets/image-on-request.webp';
import type { Product } from './types';

type Seed = { id: number; slug: string; name: string; image: string; price: number; features: string[]; bestseller?: boolean; trending?: boolean };

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
  features: s.features,
}));
