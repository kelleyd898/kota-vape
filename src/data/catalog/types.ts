export type CategoryName = 'Elf Bar' | 'Uwell' | 'Pod Salt' | 'Iget' | 'Replacement Pods';
export type Product = {
  id: number;
  slug: string;
  name: string;
  sku: string | null;
  image: string;
  price: number | null;
  category: CategoryName;
  bestseller: boolean;
  relatedProducts: string[];
};
