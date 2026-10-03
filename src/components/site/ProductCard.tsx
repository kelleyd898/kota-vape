import { Link } from '@tanstack/react-router';
import type { Product } from '@/data/products';
export function ProductCard({ product }: { product: Product }) {
  return <article className="group min-w-0 rounded-md border border-border bg-card p-2.5 sm:p-3 transition-colors hover:border-primary/50">
    <Link to="/product/$slug" params={{ slug: product.slug }} className="block overflow-hidden aspect-square rounded-md bg-secondary"><img src={product.image} alt={`Illustrative image for ${product.name}`} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/></Link>
    <div className="p-2 pt-3 sm:p-3 sm:pt-4"><Link to="/product/$slug" params={{ slug: product.slug }} className="block font-display text-lg sm:text-xl font-semibold leading-snug break-words hover:text-primary transition-colors">{product.name}</Link><p className="mt-2 text-sm text-muted-foreground">{product.price === null ? 'Price on inquiry' : `₹${product.price.toLocaleString('en-IN')}`}</p></div>
  </article>;
}
