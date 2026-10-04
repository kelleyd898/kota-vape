export type CategoryName = 'Elf Bar' | 'Uwell' | 'IGET' | 'Funky Republic' | 'Vaporesso' | 'VGOD' | 'Nasty Bar' | 'Pod Salt' | 'Replacement Pods';
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
};
