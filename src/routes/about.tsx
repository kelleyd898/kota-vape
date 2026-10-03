import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const toc = [
  { id: 'our-story', label: '1. Our Story and Vision' },
  { id: 'premium-quality', label: '2. Uncompromising Premium Quality' },
  { id: 'delivery-network', label: '3. Our Hyper-Local Delivery Network in Jaipur' },
  { id: 'expanding-reach', label: '4. Expanding Reach: Coimbatore & Kerala' },
  { id: 'authenticity', label: '5. 100% Authenticity Guarantee' },
  { id: 'connect', label: '6. Connect With Us' },
];

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About Us | KOTA VAPE SHOP' },
      { name: 'description', content: 'About Vape Shop Jaipur: your local premium vape store — authenticity guarantee, hyper-local delivery in Jaipur, and nationwide reach.' },
      { property: 'og:title', content: 'About Us | KOTA VAPE SHOP' },
      { property: 'og:description', content: 'Your local destination for premium, authentic vaping products — Jaipur rooted, delivered nationwide.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="page-container py-10 md:py-16">
      <p className="eyebrow">About us</p>
      <h1 className="font-display text-5xl md:text-7xl font-semibold text-primary leading-tight max-w-4xl">About KOTA VAPE SHOP: Your Local Premium Vape Store</h1>
      <p className="max-w-none md:max-w-5xl lg:max-w-none mt-8 text-muted-foreground leading-8">
        Welcome to Vape Shop Jaipur, your ultimate local destination for premium, authentic, and high-quality vaping products. We are more than just an e-commerce store; we are a dedicated community of vaping enthusiasts committed to providing the finest products, exceptional customer service, and a seamless shopping experience for adult vapers across Jaipur and beyond.
      </p>

      <div className="border-t border-border mt-12 pt-10 max-w-2xl">
        <h2 className="section-title text-primary">Table of Contents</h2>
        <ol className="mt-6 space-y-3">
          {toc.map(item => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="text-primary hover:opacity-80 transition-opacity">{item.label}</a>
            </li>
          ))}
        </ol>
      </div>

      <p className="sr-only">About Vape Shop Jaipur Premium Vapes Authentic E-liquids Delivery in Malviya Nagar Vaishali Nagar</p>

      <div className="mt-14 space-y-16 max-w-none">
        <section id="our-story" className="scroll-mt-28">
          <h2 className="section-title text-primary">1. Our Story and Vision</h2>
          <p className="mt-5 text-muted-foreground leading-8">
            Vape Shop Jaipur was founded with a clear vision: to revolutionize the local vaping landscape by making high-end, reliable, and authentic products accessible to adult consumers right here in Rajasthan. We recognized a significant gap in the market where quality was compromised, and customers often faced counterfeit devices. Our goal was to build a secure, trusted online platform where quality meets hyper-local convenience.
          </p>
        </section>

        <section id="premium-quality" className="scroll-mt-28">
          <h2 className="section-title text-primary">2. Uncompromising Premium Quality</h2>
          <p className="mt-5 text-muted-foreground leading-8">
            We do not just sell vapes; we offer a premium lifestyle choice. From advanced pod systems and high-capacity disposable vapes to rich, flavorful e-liquids, every item is handpicked. Our backend operations are managed by a highly technical team dedicated to maintaining a flawless, secure, and fast e-commerce environment. We utilize the latest web technologies to ensure encrypted checkouts and real-time inventory tracking for our users.
          </p>
        </section>

        <section id="delivery-network" className="scroll-mt-28">
          <h2 className="section-title text-primary">3. Our Hyper-Local Delivery Network in Jaipur</h2>
          <p className="mt-5 text-muted-foreground leading-8">
            For advanced local SEO and unparalleled customer convenience, we have optimized our logistics to serve every corner of the Pink City. If you are searching for a “vape shop near me” in Jaipur, we provide the fastest local delivery to ensure you never run out of your favorite supplies. Our comprehensive delivery zones include:
          </p>
          <ul className="mt-5 space-y-3 text-muted-foreground leading-7 list-disc pl-5">
            <li>South &amp; East Jaipur: Fast delivery to Malviya Nagar, Mansarovar, Jagatpura, Pratap Nagar, Tonk Road, Sitapura, and Durgapura.</li>
            <li>West &amp; Central Jaipur: Serving Vaishali Nagar, Chitrakoot, Ajmer Road, Sirsi Road, C-Scheme, Civil Lines, and Bapu Nagar.</li>
            <li>North &amp; Heritage Areas: Dedicated routes for Raja Park, Bani Park, Vidhyadhar Nagar, Jhotwara, Jhalana, and the walled city areas.</li>
          </ul>
        </section>

        <section id="expanding-reach" className="scroll-mt-28">
          <h2 className="section-title text-primary">4. Expanding Reach: Coimbatore &amp; Kerala</h2>
          <p className="mt-5 text-muted-foreground leading-8">
            While our core operations are deeply rooted in Jaipur, our highly optimized supply chain allows us to scale efficiently. We successfully fulfill retail e-commerce demands across major hubs nationwide, including robust delivery networks serving our dedicated customer bases in Coimbatore and throughout Kerala. Our commitment to secure packaging and rapid transit remains absolute, no matter your pin code.
          </p>
        </section>

        <section id="authenticity" className="scroll-mt-28">
          <h2 className="section-title text-primary">5. 100% Authenticity Guarantee</h2>
          <p className="mt-5 text-muted-foreground leading-8">
            The market is flooded with counterfeit items, but we guarantee that every device, coil, and e-liquid from Vape Shop Jaipur is 100% genuine. Sourced directly from verified manufacturers and official distributors, our strict quality control ensures safety and top-tier performance for every adult vaper.
          </p>
        </section>

        <section id="connect" className="scroll-mt-28">
          <h2 className="section-title text-primary">6. Connect With Us</h2>
          <p className="mt-5 text-muted-foreground leading-8">
            We invite you to explore our catalog and experience the difference. Whether you are a beginner looking for a starter kit in Mansarovar, or a seasoned vaper seeking advanced mods in Malviya Nagar, we are here for you. Reach out via our Contact Us page or click the floating button to WhatsApp our expert team directly. Welcome to the family!
          </p>
        </section>
      </div>

      <div className="border-t border-border mt-16 pt-10 flex justify-between items-center gap-5">
        <p className="font-display text-3xl">Have a general question?</p>
        <Button asChild>
          <Link to="/contact">Contact us <ArrowRight /></Link>
        </Button>
      </div>
    </div>
  );
}
