import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { CheckCircle2, ChevronRight, MessageCircle, Star } from 'lucide-react';
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
  const [rating, setRating] = useState(0);
  const [reviewNote, setReviewNote] = useState('');
  useEffect(() => { setOrigin(window.location.origin); }, []);
  const whatsappUrl = origin ? productWhatsAppUrl(product, origin) : null;
  const related = getRelatedProducts(product);
  const price = product.price === null ? 'Price on inquiry' : `₹${product.price.toLocaleString('en-IN')}`;
  return <div className="page-container py-6 md:py-14">
    <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-wider text-muted-foreground mb-8"><Link to="/" className="hover:text-primary">Home</Link><ChevronRight size={12}/><Link to="/shop" search={{ q: '', category: product.category }} className="hover:text-primary">{product.category}</Link><ChevronRight size={12}/><span className="text-foreground normal-case break-words">{product.name}</span></div>
    <div className="grid lg:grid-cols-[minmax(0,.8fr)_minmax(0,1fr)] gap-9 lg:gap-14 items-start">
      <div className="min-w-0"><div className="group aspect-square max-w-[480px] border border-border bg-secondary overflow-hidden cursor-zoom-in" onMouseMove={event => { const rect = event.currentTarget.getBoundingClientRect(); setZoom({ x: (event.clientX - rect.left) / rect.width * 100, y: (event.clientY - rect.top) / rect.height * 100 }); }}><img src={product.image} alt={`Illustrative image for ${product.name}`} width={1024} height={1024} style={{ transformOrigin: `${zoom.x}% ${zoom.y}%` }} className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.65]"/></div></div>
      <div className="min-w-0">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-primary break-words">{product.name}</h1>
        <p className="accent-green text-2xl sm:text-3xl font-semibold mt-5">{price}</p>
        <div className="mt-6 max-w-sm">{whatsappUrl ? <Button asChild size="lg" className="w-full"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/> Get on WhatsApp</a></Button> : <Button asChild size="lg" variant="outline" className="w-full"><Link to="/contact"><MessageCircle size={18}/> Contact for details</Link></Button>}</div>{!contact.whatsapp && <p className="mt-3 text-xs text-muted-foreground">WhatsApp enquiries will be available once the business number is confirmed.</p>}
        <div className="mt-6 space-y-2 text-sm"><p><span className="font-semibold">SKU:</span> {product.sku ?? 'On inquiry'}</p><p><span className="font-semibold uppercase">Category:</span> <Link to="/shop" search={{ q: '', category: product.category }} className="hover:text-primary">{product.category}</Link></p></div>
        <div className="mt-7 border border-dashed border-border px-5 sm:px-8 py-5 text-center max-w-md"><p className="text-xs sm:text-sm font-semibold tracking-wide">Guaranteed Safe Checkout</p><img src={paymentStrip.url} alt="Mastercard, Visa, Amex and Discover" className="mt-4 mx-auto w-full max-w-[300px] h-auto"/></div>
        <div className="mt-8 max-w-md"><p className="text-sm font-semibold mb-4">Extra Features</p><ul className="space-y-3 text-sm">{extraFeatures.map(feature => <li key={feature} className="flex items-center gap-2.5"><CheckCircle2 size={18} className="accent-green shrink-0"/><span>{feature}</span></li>)}</ul></div>
      </div>
    </div>
    <section className="mt-12 md:mt-16">
      <div className="border-y border-border py-4 text-center"><h2 className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.2em] border-b-2 border-primary pb-1 px-6">Reviews (0)</h2></div>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 pt-10">
        <div><h3 className="font-display text-2xl sm:text-3xl font-semibold">Reviews</h3><p className="text-muted-foreground mt-4">There are no reviews yet.</p></div>
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-primary leading-snug break-words">Be the first to review “{product.name}”</h3>
          <p className="text-xs text-muted-foreground mt-3">Your email address will not be published. Required fields are marked <span className="text-destructive">*</span></p>
          <form className="mt-6 space-y-5" onSubmit={event => { event.preventDefault(); setReviewNote('Review submissions will open once the store launches. For now, reach us on WhatsApp.'); }}>
            <div><p className="text-xs font-semibold uppercase tracking-wider mb-2">Your rating <span className="text-destructive">*</span></p><div className="flex gap-1">{[1, 2, 3, 4, 5].map(value => <button key={value} type="button" aria-label={`${value} of 5 stars`} onClick={() => setRating(value)} className="p-0.5"><Star size={22} className={value <= rating ? 'fill-current text-primary' : 'text-muted-foreground'} /></button>)}</div></div>
            <div className="grid sm:grid-cols-2 gap-4"><label className="block text-sm">Name <span className="text-destructive">*</span><input required type="text" className="mt-2 w-full h-11 bg-input border border-border px-3 text-sm outline-none focus:border-primary"/></label><label className="block text-sm">Email <span className="text-destructive">*</span><input required type="email" className="mt-2 w-full h-11 bg-input border border-border px-3 text-sm outline-none focus:border-primary"/></label></div>
            <label className="block text-sm">Your review <span className="text-destructive">*</span><textarea required rows={5} className="mt-2 w-full bg-input border border-border px-3 py-2.5 text-sm outline-none focus:border-primary resize-y"/></label>
            <label className="flex items-start gap-2.5 text-xs text-muted-foreground cursor-pointer"><input type="checkbox" className="mt-0.5 accent-[var(--primary)]"/> Save my name, email, and website in this browser for the next time I comment.</label>
            <Button type="submit" className="px-8">Submit</Button>
            {reviewNote && <p className="text-xs accent-green">{reviewNote}</p>}
          </form>
        </div>
      </div>
    </section>
    {related.length > 0 && <section className="mt-14 md:mt-20"><h2 className="font-display text-2xl md:text-3xl mb-6 md:mb-8">Related products</h2><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">{related.map(item => <ProductCard key={item.id} product={item}/>)}</div></section>}
  </div>;
}
