import { contact } from '@/config/contact';
import type { Product } from '@/data/products';

/** Direct wa.me link (used only by the redirect page). */
export function directWhatsAppUrl(message: string) {
  return `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
}

/** All site buttons go through /whatsapp-redirect so ad platforms see a conversion page. */
export function whatsAppUrl(message: string) {
  if (!contact.whatsapp) return '';
  return `/whatsapp-redirect?text=${encodeURIComponent(message)}`;
}

export function productWhatsAppUrl(product: Product, origin: string) {
  if (!contact.whatsapp) return null;
  const productUrl = new URL(`/product/${encodeURIComponent(product.slug)}`, origin).toString();
  const message = `Hello, I want to order this product:\nProduct: ${product.name}\nLink: ${productUrl}\nPlease share price and availability.`;
  return whatsAppUrl(message);
}
