export type CategoryName = 'Elf Bar' | 'IGET Vape' | 'Nic Salts' | 'Terra' | 'Replacement Pods';
export type Product = {
  id: number;
  slug: string;
  name: string;
  sku: string | null;
  image: string;
  price: number | null;
  originalPrice?: number;
  category: CategoryName;
  bestseller: boolean;
  trending?: boolean;
  relatedProducts: string[];
  /** Product features shown in the "Features" section of the product page (owner-supplied). */
  features?: string[];
  /** Per-product extra features (owner-supplied); falls back to the default list when absent. */
  extraFeatures?: string[];
};
