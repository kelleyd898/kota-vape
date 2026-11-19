import { whatsAppUrl } from '@/lib/whatsapp';
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, MapPin, ShieldCheck, Sparkles, SearchCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { AllIndiaStrip } from "@/components/site/AllIndiaStrip";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  homeBestSellerProducts,
  homeCollectionProducts,
  homeTrendingProducts,
} from "@/data/homeCatalog";
import { cities } from "@/data/cities";
import { contact } from "@/config/contact";
import { homeSeo } from "@/config/homeSeo";
import heroImage from "@/assets/hero-vape.jpg";
import imageOnRequest from "@/assets/image-on-request.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: homeSeo.title },
      { name: "description", content: homeSeo.description },
      { property: "og:title", content: homeSeo.title },
      { property: "og:description", content: homeSeo.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});
const spotlightWhatsAppUrl = contact.whatsapp
  ? whatsAppUrl("Hi, I read the Spotlight Review for the LUXE Q2 SE. Can you share availability?")
  : null;
const heroWhatsAppUrl = contact.whatsapp
  ? whatsAppUrl("Hi, I want to order vape products")
  : null;
const reasons = [
  {
    title: "Strict authenticity",
    text: "We prioritize accurate information and encourage verification of product details.",
    Icon: BadgeCheck,
  },
  {
    title: "Discreet service",
    text: "Straightforward, respectful support when you have a question.",
    Icon: ShieldCheck,
  },
  {
    title: "Expert consultation",
    text: "Find clarity on formats, compatibility, and product research.",
    Icon: SearchCheck,
  },
  { title: "Premium selection", text: "An edited catalog designed to make exploration easier.", Icon: Sparkles },
];
function Home() {
  return (
    <>
      <section className="relative min-h-[540px] h-[92svh] max-h-[760px] flex items-center overflow-hidden bg-background">
        <img
          src={heroImage}
          width={1536}
          height={1024}
          alt="Dark studio photograph of a premium pod device"
          className="absolute inset-0 w-full h-full object-cover object-[72%_center] md:object-[62%_center] opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
        <div className="page-container relative z-10 py-14 md:py-16">
          <div className="max-w-[600px]">
            <p className="sr-only">Serving every corner of India</p>
            <p className="eyebrow text-primary mb-4">{homeSeo.heroDelivery}</p>
            <h1 className="font-display text-[clamp(2.75rem,11vw,6.5rem)] font-semibold leading-[0.9]">
              ALL INDIA
              <br />
              <span className="text-primary block text-[0.55em] tracking-[0.04em]">VAPE SERVICE SHOP</span>
            </h1>
            <div className="w-16 h-px bg-primary my-6 md:my-7" />
            <p className="text-muted-foreground text-base md:text-lg leading-8 max-w-lg">
              A considered place to explore product formats, discover brands, and get clear information from a team
              serving every corner of India.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-8 md:mt-9">
              <Button
                asChild
                size="lg"
                className="h-12 px-7 uppercase tracking-widest text-xs font-bold w-full sm:w-auto bg-[#25D366] text-black shadow-[0_10px_30px_-8px_rgba(37,211,102,0.55)] transition-all duration-300 hover:bg-[#25D366]/90 hover:shadow-[0_14px_40px_-8px_rgba(37,211,102,0.75)] hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-100"
              >
                <a
                  href={heroWhatsAppUrl ?? "/shop"}
                  target={heroWhatsAppUrl ? "_blank" : undefined}
                  rel={heroWhatsAppUrl ? "noopener noreferrer" : undefined}
                >
                  <WhatsAppIcon className="h-4 w-4" /> Order only on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-7 uppercase tracking-widest text-xs font-bold bg-transparent w-full sm:w-auto"
              >
                <Link to="/shop">
                  Browse Products <ArrowRight />
                </Link>
              </Button>
            </div>
            <AllIndiaStrip className="mt-6 md:mt-7" />
          </div>
        </div>
      </section>
      <div className="overflow-hidden border-y border-border bg-primary py-3 text-primary-foreground">
        <div className="marquee-track text-[11px] uppercase font-bold tracking-[0.2em]">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex shrink-0 gap-12 px-6">
              <span>⚡ Same Day Delivery</span>
              <span>🚚 48-Hour Fast Delivery</span>
              <span>💵 Cash on Delivery Available</span>
              <span>✅ 100% Genuine Products</span>
              <span>🔥 Premium Vape Store</span>
            </div>
          ))}
        </div>
      </div>
      {homeTrendingProducts.length > 0 && (
        <section className="py-10 md:py-16 bg-surface">
          <div className="page-container">
            <div className="[&_h2]:text-primary">
              <SectionHeading title="Trending Now" link="/shop" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
              {homeTrendingProducts.map((p) => (
                 <ProductCard key={p.id} product={p} showDiscount />
              ))}
            </div>
          </div>
        </section>
      )}
      {homeBestSellerProducts.length > 0 && (
        <section className="py-10 md:py-16 page-container">
          <div className="[&_h2]:text-primary">
            <SectionHeading title="Best Sellers" link="/shop" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {homeBestSellerProducts.map((p) => (
               <ProductCard key={p.id} product={p} showDiscount />
             ))}
          </div>
        </section>
      )}
      {homeCollectionProducts.length > 0 && (
        <section className="py-10 md:py-16 bg-surface border-y border-border">
          <div className="page-container">
            <div className="[&_h2]:text-primary">
              <SectionHeading
                kicker="Handpicked for you"
                title="Premium Collection"
                description="Explore more top devices, disposables and heated tobacco picks from our main catalog."
                link="/shop"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-5">
              {homeCollectionProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="bg-surface py-10 md:py-16">
        <div className="page-container grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-24">
          <div>
            <h2 className="section-title text-primary">Frequently Asked Questions</h2>
          </div>
          <div className="border-t border-border">
            {[
              [
                "What is this catalog for?",
                "Our catalog is an informational resource for adults researching product formats, brands, and compatibility.",
              ],
              [
                "How do you approach authenticity?",
                "We prioritize clear sourcing and encourage confirming any specific product information with our team.",
              ],
              [
                "Can I ask about a specific brand?",
                "Yes. Use the contact page to send a general inquiry about a brand or device format.",
              ],
              [
                "Are products available to purchase online?",
                "No. This website does not offer online purchases, checkout, or ordering.",
              ],
            ].map(([q, a]) => (
              <details key={q} className="group border-b border-border py-5">
                <summary className="cursor-pointer list-none flex justify-between items-center gap-4 font-display text-xl md:text-2xl marker:hidden">
                  {q}
                  <span className="text-primary font-sans text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-sm text-muted-foreground leading-7 mt-4 pr-10">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="grid lg:grid-cols-2 min-h-[480px] bg-secondary">
        <div className="flex items-center justify-center p-10 md:p-14">
          <div className="relative">
            <img
              src={imageOnRequest}
              alt="Vaporesso LUXE Q2 SE — image available on request"
              loading="lazy"
              className="w-56 h-56 md:w-72 md:h-72 object-contain rounded-lg border border-border bg-background p-2"
            />
            <span className="review-badge absolute -top-3 left-4">Featured Review</span>
          </div>
        </div>
        <div className="px-6 py-10 md:py-14 md:px-16 lg:px-20 flex flex-col justify-center">
          <h2 className="font-display text-4xl md:text-6xl leading-none font-semibold max-w-lg text-primary">
            Module Spotlight: Vaporesso LUXE Q2 SE Analysis
          </h2>
          <p className="text-muted-foreground leading-7 mt-6 max-w-lg">
            When evaluating high-end gear, build quality and chipset reliability are crucial. In our recent
            deep-dive—inspired by the hardware teardowns seen on popular vape shop jaipur tech forums—we analyzed the
            LUXE Q2 SE. This module features advanced airflow dynamics and a highly efficient battery retention system,
            making it a top recommendation for our Hyderabad clients who demand durability and performance without
            compromise.
          </p>
          <Button asChild className="mt-8 w-fit uppercase tracking-widest text-xs">
            <a
              href={spotlightWhatsAppUrl ?? "/contact"}
              target={spotlightWhatsAppUrl ? "_blank" : undefined}
              rel={spotlightWhatsAppUrl ? "noopener noreferrer" : undefined}
            >
              Discuss the Module <ArrowRight />
            </a>
          </Button>
        </div>
      </section>
      <section className="py-10 md:py-16 page-container">
        <SectionHeading kicker="Our principles" title="Why Choose Our Gear?" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {reasons.map(({ title, text, Icon }) => (
            <div key={title} className="border border-border bg-card p-5 md:p-7 min-h-[220px]">
              <Icon size={26} strokeWidth={1.5} className="text-primary mb-8" />
              <h3 className="font-display text-xl md:text-2xl font-semibold">{title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-6 mt-3">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-surface py-10 md:py-16">
        <div className="page-container">
          <SectionHeading
            title="Shop by City"
            description="Select your city for fast, local delivery and 100% authentic vaping supplies."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cities.map((city, i) => (
              <Link
                to="/vape-in/$city"
                params={{ city: city.slug }}
                key={city.slug}
                className={`group border p-7 min-h-[190px] flex flex-col justify-between transition-colors hover:border-primary ${i === 0 ? "border-primary bg-accent" : "border-border bg-card"}`}
              >
                <MapPin size={22} className="text-primary" />
                <div>
                  <p className="font-display text-3xl font-semibold">{city.name}</p>
                  <p className="text-muted-foreground text-xs mt-2">{city.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-surface py-10 md:py-16 border-t border-border">
        <div className="page-container">
          <h2 className="section-title text-primary">{homeSeo.sectionTitle}</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 mt-8 text-muted-foreground leading-8 text-sm md:text-base">
            {homeSeo.paragraphs.map((paragraph) => (
              <p key={paragraph} className="border-l border-border pl-5 md:pl-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
