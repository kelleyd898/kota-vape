import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { MapPin } from 'lucide-react';
import { cities } from '@/data/cities';
import { products } from '@/data/products';
import { replacementPods } from '@/data/catalog/replacementPods';
import { ProductCard } from '@/components/site/ProductCard';

export const Route = createFileRoute('/vape-in/$city')({
  loader: ({ params }) => {
    const city = cities.find((item) => item.slug === params.city);
    if (!city) throw notFound();
    return city;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `Vape in ${loaderData.name} | ALL INDIA VAPE SERVICE SHOP` : 'City not found | ALL INDIA VAPE SERVICE SHOP';
    const description = loaderData
      ? `Explore ALL INDIA VAPE SERVICE SHOP product profiles and information for adults in ${loaderData.name}, Rajasthan.`
      : 'Explore the ALL INDIA VAPE SERVICE SHOP city catalog.';
    return { meta: [
      { title }, { name: 'description', content: description },
      { property: 'og:title', content: title }, { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
      ...(!loaderData ? [{ name: 'robots', content: 'noindex' }] : []),
    ] };
  },
  component: CityCatalog,
});

function CityCatalog() {
  const city = Route.useLoaderData();
  return <div className="page-container py-8 md:py-14">
    <nav aria-label="Breadcrumb" className="mb-8 text-xs text-muted-foreground"><Link to="/" className="hover:text-primary">Home</Link> / <span className="text-foreground">{city.name}</span></nav>
    <div className="border-b border-border pb-8 md:pb-10">
      <p className="eyebrow flex items-center gap-2"><MapPin size={14} /> {city.serviceArea}</p>
      <h1 className="font-display text-5xl md:text-8xl font-semibold leading-none">Vape in <span className="text-primary">{city.name}</span></h1>
      <p className="mt-5 text-sm md:text-base text-muted-foreground">Explore our product catalog and information from {city.name}.</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 py-8 md:py-12">
      {[...products, ...replacementPods].map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  </div>;
}