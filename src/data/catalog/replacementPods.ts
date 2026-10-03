import img443 from '@/assets/products/443.webp';
import img445 from '@/assets/products/445.webp';
import img447 from '@/assets/products/447.webp';
import img449 from '@/assets/products/449.webp';
import img453 from '@/assets/products/453.webp';
import img455 from '@/assets/products/455.webp';
import img457 from '@/assets/products/457.webp';
import img459 from '@/assets/products/459.webp';
import img851 from '@/assets/products/851.webp';
import imageOnRequest from '@/assets/image-on-request.webp';
import type { Product } from './types';

// Separate collection from the main shop. Missing product photos use the
// existing image-on-request placeholder until the owner provides them.
export const replacementPods: Product[] = [
  { id: 101, slug: 'juul2-apple-pods-2-pods', name: 'JUUL2 Apple Pods (2 Pods)', sku: '445', image: img445, price: 1699, category: 'Replacement Pods', bestseller: false, relatedProducts: [] },
  { id: 102, slug: 'juul2-autumn-tobacco-pods-2-pods', name: 'JUUL2 Autumn Tobacco Pods (2 Pods)', sku: '459', image: img459, price: 1699, category: 'Replacement Pods', bestseller: false, relatedProducts: [] },
  { id: 103, slug: 'juul2-crisp-menthol-pods-2-pods', name: 'JUUL2 Crisp Menthol Pods (2 Pods)', sku: '453', image: img453, price: 1699, category: 'Replacement Pods', bestseller: false, relatedProducts: [] },
  { id: 104, slug: 'juul2-mango-pods-2-pods', name: 'JUUL2 Mango Pods (2 Pods)', sku: '447', image: img447, price: 1699, category: 'Replacement Pods', bestseller: false, relatedProducts: [] },
  { id: 105, slug: 'juul2-pods-arctic-breeze', name: 'JUUL2 Pods Arctic Breeze', sku: '443', image: img443, price: 1699, category: 'Replacement Pods', bestseller: false, relatedProducts: [] },
  { id: 106, slug: 'juul2-pods-lychee', name: 'JUUL2 Pods Lychee', sku: '439', image: imageOnRequest, price: 1699, category: 'Replacement Pods', bestseller: false, relatedProducts: [] },
  { id: 107, slug: 'juul2-pods-tropical-medley', name: 'JUUL2 Pods Tropical Medley', sku: '441', image: imageOnRequest, price: 1699, category: 'Replacement Pods', bestseller: false, relatedProducts: [] },
  { id: 108, slug: 'juul2-polar-menthol-pods-2-pods', name: 'JUUL2 Polar Menthol Pods (2 Pods)', sku: '455', image: img455, price: 1699, category: 'Replacement Pods', bestseller: false, relatedProducts: [] },
  { id: 109, slug: 'juul2-ruby-menthol-pods-2-pods', name: 'JUUL2 Ruby Menthol Pods (2 Pods)', sku: '457', image: img457, price: 1699, category: 'Replacement Pods', bestseller: false, relatedProducts: [] },
  { id: 110, slug: 'juul2-starter-kit-with-2-pods', name: 'JUUL2 Starter Kit with 2 Pods', sku: '851', image: img851, price: 4300, originalPrice: 4700, category: 'Replacement Pods', bestseller: true, relatedProducts: [] },
  { id: 111, slug: 'juul2-virginia-tobacco-pods-2-pods', name: 'JUUL2 Virginia Tobacco Pods (2 Pods)', sku: '435', image: imageOnRequest, price: 1699, category: 'Replacement Pods', bestseller: false, relatedProducts: [] },
  { id: 112, slug: 'juul2-watermelon-pods-2-pods', name: 'JUUL2 Watermelon Pods (2 Pods)', sku: '449', image: img449, price: 1699, category: 'Replacement Pods', bestseller: false, relatedProducts: [] },
];
