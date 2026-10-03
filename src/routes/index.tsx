import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  MapPin,
  ShieldCheck,
  Sparkles,
  SearchCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { products } from "@/data/products";
import { replacementPods } from "@/data/catalog/replacementPods";
import { categories } from "@/data/categories";
import { cities } from "@/data/cities";
import { contact } from "@/config/contact";
import heroImage from "@/assets/hero-vape.jpg";
import imageOnRequest from "@/assets/image-on-request.webp.asset.json";
import elfImage from "@/assets/categories/elf.webp.asset.json";
import uwellImage from "@/assets/categories/uwell.webp.asset.json";
import saltImage from "@/assets/categories/Pod-salt.webp.asset.json";
import igetImage from "@/assets/categories/iget.webp.asset.json";
const homeCategoryImages = [elfImage.url, uwellImage.url, saltImage.url, igetImage.url];
// Landing page shows only these 4 brands; all 8 stay in the catalog/menu.
const homeCategorySlugs = ["elf-bar", "uwell", "pod-salt", "iget"];
const homeCategories = homeCategorySlugs
  .map((slug) => categories.find((c) => c.slug === slug)!)
  .filter(Boolean);
const allProducts = [...products, ...replacementPods];
const trendingProducts = allProducts.slice(0, 8);
const bestSellerProducts = [
  ...allProducts.filter((p) => p.bestseller),
  ...allProducts.filter((p) => !p.bestseller),
].slice(0, 8);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KOTA VAPE SHOP | Premium Product Information in Kota" },
      {
        name: "description",
        content:
          "Explore adult-focused device and pod information, brand guides, and local support from KOTA VAPE SHOP.",
      },
      { property: "og:title", content: "KOTA VAPE SHOP | Premium Product Information in Kota" },
      {
        property: "og:description",
        content: "A curated informational catalog and product research resource based in Kota.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});
const spotlightWhatsAppUrl = contact.whatsapp
  ? `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hi, I read the Spotlight Review for the LUXE Q2 SE. Can you share availability?")}`
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
            <p className="eyebrow">Kota, Rajasthan</p>
            <h1 className="font-display text-[clamp(3rem,15vw,8rem)] font-semibold leading-[0.85]">
              KOTA
              <br />
              <span className="text-primary">VAPE SHOP</span>
            </h1>
            <div className="w-16 h-px bg-primary my-6 md:my-7" />
            <p className="text-muted-foreground text-base md:text-lg leading-8 max-w-lg">
              A considered place to explore product formats, discover brands, and get clear information from a team
              rooted in Kota.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-8 md:mt-9">
              <Button
                asChild
                size="lg"
                className="h-12 px-7 uppercase tracking-widest text-xs font-bold w-full sm:w-auto"
              >
                <Link to="/shop" search={{ q: "", category: "" }}>
                  Explore catalog <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-7 uppercase tracking-widest text-xs font-bold bg-transparent w-full sm:w-auto"
              >
                <Link to="/about">Our approach</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 left-5 lg:left-8 z-10 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          01 / Discover the collection
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
      <section className="py-10 md:py-16 page-container">
        <div className="[&_h2]:text-primary"><SectionHeading title="Categories" link="/categories" /></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {homeCategories.map((category, i) => (
            <Link
              key={category.slug}
              to="/shop"
              search={{ q: "", category: category.name }}
              className="group relative aspect-[4/5] overflow-hidden border border-border bg-card"
            >
              <img
                src={homeCategoryImages[i]}
                alt={`Illustrative ${category.name} category`}
                loading="lazy"
                className="w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <span className="absolute top-4 left-4 text-[10px] tracking-widest text-primary">0{i + 1} / 04</span>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{category.name}</p>
                <div className="flex justify-between items-end mt-1">
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold">{category.name}</h3>
                  <ArrowUpRight size={20} className="text-primary" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="py-10 md:py-16 bg-surface">
        <div className="page-container">
          <div className="[&_h2]:text-primary"><SectionHeading title="Trending Now" link="/shop" /></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {trendingProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 md:py-16 page-container">
        <div className="[&_h2]:text-primary"><SectionHeading title="Best Sellers" link="/shop" /></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {bestSellerProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
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
              src={imageOnRequest.url}
              alt="Image available on request"
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
            When evaluating high-end gear, build quality and chipset reliability are crucial. In our recent deep-dive—inspired by the hardware teardowns seen on popular vape shop jaipur tech forums—we analyzed the LUXE Q2 SE. This module features advanced airflow dynamics and a highly efficient battery retention system, making it a top recommendation for our Hyderabad clients who demand durability and performance without compromise.
          </p>
          <Button asChild className="mt-8 w-fit uppercase tracking-widest text-xs">
            <a href={spotlightWhatsAppUrl ?? "/contact"} target={spotlightWhatsAppUrl ? "_blank" : undefined} rel={spotlightWhatsAppUrl ? "noopener noreferrer" : undefined}>
              Discuss the Module <ArrowRight />
            </a>
          </Button>
        </div>
      </section>
      <section className="py-10 md:py-16 page-container">
        <SectionHeading kicker="Our principles" title="Why choose Kota Vape Shop" />
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
            kicker="Where we're rooted"
            title="Explore by city"
            description="Kota is home. Our informational content is also accessible to readers across Rajasthan."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cities.map((city, i) => (
              <Link
                to="/contact"
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
        <div className="page-container grid lg:grid-cols-2 gap-10 lg:gap-28">
          <div>
            <p className="eyebrow">Our perspective</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] font-semibold">
              Setting the standard for premium gear accessibility.
            </h2>
          </div>
          <div className="text-muted-foreground leading-8 text-sm md:text-base space-y-5">
            <p>
              Good information should feel easy to find. KOTA VAPE SHOP brings a more considered approach to
              understanding devices, pods, formats, and the details that matter when comparing them.
            </p>
            <p>
              Built around Kota, our catalog pairs a carefully edited presentation with authenticity-minded research and
              approachable general support. It is a place to learn, not an online checkout.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary uppercase text-xs tracking-widest font-semibold"
            >
              About us <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
