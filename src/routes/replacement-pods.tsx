import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { zodValidator, fallback } from '@tanstack/zod-adapter';
import { z } from 'zod';
import { ProductCard } from '@/components/site/ProductCard';
import { replacementPods } from '@/data/catalog/replacementPods';

const podsSearchSchema = z.object({
  sort: fallback(z.string(), 'latest').default('latest'),
});

export const Route = createFileRoute('/replacement-pods')({
  validateSearch: zodValidator(podsSearchSchema),
  head: () => ({ meta: [
    { title: 'Replacement Pods | KOTA VAPE SHOP' },
    { name: 'description', content: 'Browse replacement pod references at KOTA VAPE SHOP.' },
    { property: 'og:title', content: 'Replacement Pods | KOTA VAPE SHOP' },
    { property: 'og:description', content: 'Explore replacement pod references and contact us to confirm details.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: ReplacementPods,
});

function ReplacementPods() {
  const { sort } = Route.useSearch();
  const navigate = useNavigate({ from: '/replacement-pods' });

  const sorted = [...replacementPods].sort((a, b) => {
    if (sort === 'price-asc') return (a.price ?? Infinity) - (b.price ?? Infinity);
    if (sort === 'price-desc') return (b.price ?? -Infinity) - (a.price ?? -Infinity);
    return b.id - a.id; // latest
  });

  return (
    <div className="page-container py-6 md:py-12 min-h-[60vh]">
      <p className="eyebrow">The collection</p>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h1 className="section-title">Replacement pods</h1>
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          Sort by
          <select
            value={sort}
            onChange={(event) => navigate({ to: '.', search: { sort: event.target.value } })}
            className="rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
          >
            <option value="latest">Latest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </label>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
        {sorted.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}
