import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { ProductCard } from '@/components/site/ProductCard';
import { Button } from '@/components/ui/button';
import { getProductBySlug, getRelatedProducts } from '@/services/productService';
import { productWhatsAppUrl } from '@/lib/whatsapp';
import paymentStrip from '@/assets/paymentstrip.png.asset.json';
import { contact } from '@/config/contact';
export const Route = createFileRoute('/product/$slug')({
  loader: ({ params }) => { const product = getProductBySlug(params.slug); if (!product) throw notFound(); return product; },
  head: ({ loaderData }) => ({ meta: [
    { title: loaderData ? `${loaderData.name} | KOTA VAPE SHOP` : 'Product not found | KOTA VAPE SHOP' },
    { name: 'description', content: loaderData ? `View ${loaderData.name} in the KOTA VAPE SHOP catalog.` : 'Browse product information at KOTA VAPE SHOP.' },
    { property: 'og:title', content: loaderData ? `${loaderData.name} | KOTA VAPE SHOP` : 'Product not found | KOTA VAPE SHOP' },
    { property: 'og:description', content: loaderData ? `View ${loaderData.name} in the KOTA VAPE SHOP catalog.` : 'Explore our catalog.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: ProductDetail,
});
const extraFeatures = ['Premium Quality', 'Secure Payments', 'Satisfaction Guarantee', 'Worldwide Shipping', 'Money Back Guarantee'];
function ProductDetail() {
  const product = Route.useLoaderData();
  const [origin, setOrigin] = useState('');
  const [zoom, setZoom] = useState({ x: 50, y: 50 });
  useEffect(() => { setOrigin(window.location.origin); }, []);
  const whatsappUrl = origin ? productWhatsAppUrl(product, origin) : null;
  const related = getRelatedProducts(product);
  return <div className="page-container py-10 md:py-16">
    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-10"><Link to="/">Home</Link><ChevronRight size={13}/><Link to="/shop" search={{ q: '', category: '' }}>Shop</Link><ChevronRight size={13}/><span className="text-foreground break-words">{product.name}</span></div>
    <div className="grid lg:grid-cols-[minmax(0,.82fr)_minmax(0,1fr)] gap-9 lg:gap-16 items-start">
      <div className="min-w-0"><div className="group aspect-square max-w-[520px] border border-border bg-card overflow-hidden cursor-zoom-in" onMouseMove={event => { const rect = event.currentTarget.getBoundingClientRect(); setZoom({ x: (event.clientX - rect.left) / rect.width * 100, y: (event.clientY - rect.top) / rect.height * 100 }); }}><img src={product.image} alt={`Illustrative image for ${product.name}`} width={1024} height={1024} style={{ transformOrigin: `${zoom.x}% ${zoom.y}%` }} className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.65]"/></div></div>
      <div className="min-w-0 lg:pt-2"><p className="eyebrow">{product.category}</p><h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight break-words">{product.name}</h1><p className="text-foreground text-xl mt-6">{product.price === null ? 'Price on inquiry' : `₹${product.price.toLocaleString('en-IN')}`}</p><div className="border-t border-border mt-7 pt-6 space-y-3 text-sm"><p><span className="text-muted-foreground">SKU:</span> {product.sku ?? 'On inquiry'}</p><p><span className="text-muted-foreground">Category:</span> {product.category}</p></div>
      <div className="mt-8">{whatsappUrl ? <Button asChild size="lg"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/> Enquire on WhatsApp</a></Button> : <Button asChild size="lg" variant="outline"><Link to="/contact"><MessageCircle size={18}/> Contact for details</Link></Button>}</div>{!contact.whatsapp && <p className="mt-3 text-xs text-muted-foreground">WhatsApp enquiries will be available once the business number is confirmed.</p>}
      <img src={paymentStrip.url} alt="Mastercard, Visa, Amex and Discover" className="mt-8 w-full max-w-[440px] h-auto" />
      </div>
    </div>
    <section className="mt-16 border-t border-border pt-10"><h2 className="font-display text-3xl mb-5">Extra Features</h2><ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-muted-foreground">{extraFeatures.map(feature => <li key={feature} className="border-b border-border py-3">{feature}</li>)}</ul></section>
    {related.length > 0 && <section className="mt-20"><h2 className="section-title mb-8">Related products</h2><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">{related.map(item => <ProductCard key={item.id} product={item}/>)}</div></section>}
  </div>;
}
