import { createFileRoute, Link } from '@tanstack/react-router';
import { zodValidator, fallback } from '@tanstack/zod-adapter';
import { z } from 'zod';
import { Search } from 'lucide-react';
import { ProductCard } from '@/components/site/ProductCard';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { categories } from '@/data/categories';

const shopSearchSchema = z.object({
  q: fallback(z.string(), '').default(''),
  category: fallback(z.string(), '').default(''),
  sort: fallback(z.string(), 'featured').default('featured'),
  page: fallback(z.number().int(), 1).default(1),
});

export const Route = createFileRoute('/shop')({
  validateSearch: zodValidator(shopSearchSchema),
  head: () => ({ meta: [{ title: 'Shop Catalog | KOTA VAPE SHOP' }, { name: 'description', content: 'Browse product information by category in the KOTA VAPE SHOP catalog.' }, { property: 'og:title', content: 'Shop Catalog | KOTA VAPE SHOP' }, { property: 'og:description', content: 'Explore product information by category.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  component: Shop,
});

function Shop() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const query = search.q;
  const category = search.category;
  const sort = search.sort;
  const page = search.page;
  const setParam = (patch: Partial<{ q: string; category: string; sort: string; page: number }>) => {
    navigate({
      to: '.',
      search: (prev: typeof search) => ({ ...prev, ...patch }),
      replace: true,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const filtered = (() => {
    const result = products.filter(p => (!category || p.category === category) && (!query || `${p.name} ${p.category}`.toLowerCase().includes(query.toLowerCase())));
    if (sort === 'name') result.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'bestseller') result.sort((a, b) => Number(b.bestseller) - Number(a.bestseller));
    if (sort === 'price-asc') result.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
    if (sort === 'price-desc') result.sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
    return result;
  })();
  const pages = Math.max(1, Math.ceil(filtered.length / 8));
  const safePage = Math.min(page, pages);
  return <div className="page-container py-6 md:py-12"><div className="text-xs text-muted-foreground mb-9"><Link to="/" className="hover:text-primary">Home</Link> / <span className="text-foreground">Shop</span></div><div className="border-b border-border pb-9"><p className="eyebrow">The collection</p><h1 className="font-display text-5xl md:text-8xl font-semibold">The catalog<span className="text-primary">.</span></h1></div>
    <div className="py-8 grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-3 items-center"><label className="relative block"><Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"/><input aria-label="Search products" value={query} onChange={e => setParam({ q: e.target.value, page: 1 })} placeholder="Search products..." className="w-full h-11 bg-card border border-border pl-11 pr-4 text-sm outline-none focus:border-primary"/></label><select aria-label="Filter by category" value={category} onChange={e => setParam({ category: e.target.value, page: 1 })} className="h-11 bg-card border border-border px-4 text-sm text-foreground outline-none focus:border-primary"><option value="">All categories</option>{categories.map(c => <option key={c.slug} value={c.name}>{c.name}</option>)}</select><select aria-label="Sort products" value={sort} onChange={e => setParam({ sort: e.target.value, page: 1 })} className="h-11 bg-card border border-border px-4 text-sm text-foreground outline-none focus:border-primary"><option value="featured">Featured</option><option value="name">Name A–Z</option><option value="bestseller">Best sellers</option><option value="price-asc">Price: Low to High</option><option value="price-desc">Price: High to Low</option></select></div><div className="mb-5 text-muted-foreground text-xs uppercase tracking-widest">{filtered.length} product profiles</div>{filtered.length ? <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">{filtered.slice((safePage-1)*8,safePage*8).map(p => <ProductCard key={p.id} product={p}/>)}</div> : <div className="border border-border py-20 text-center text-muted-foreground">No matching products.</div>}{pages > 1 && <div className="flex justify-center gap-2 mt-10">{Array.from({length: pages}, (_,i) => <Button key={i} variant={safePage===i+1?'default':'outline'} size="icon" aria-label={`Page ${i+1}`} onClick={() => setParam({ page: i+1 })}>{i+1}</Button>)}</div>}</div>;
}
