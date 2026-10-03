import { createFileRoute } from '@tanstack/react-router';
import { ProductCard } from '@/components/site/ProductCard';
import { replacementPods } from '@/data/catalog/replacementPods';
export const Route = createFileRoute('/replacement-pods')({
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
  return <div className="page-container py-6 md:py-12 min-h-[60vh]"><p className="eyebrow">The collection</p><h1 className="section-title mb-10">Replacement pods</h1><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">{replacementPods.map(product => <ProductCard key={product.id} product={product}/>)}</div></div>;
}
