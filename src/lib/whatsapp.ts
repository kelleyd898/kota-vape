import { contact } from '@/config/contact';
import type { Product } from '@/data/products';
export function productWhatsAppUrl(product: Product, origin: string) {
  if (!contact.whatsapp) return null;
  const productUrl = new URL(`/product/${encodeURIComponent(product.slug)}`, origin).toString();
  const message = `Hello, I want to order this product:\nProduct: ${product.name}\nLink: ${productUrl}\nPlease share price and availability.`;
  return `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
}
