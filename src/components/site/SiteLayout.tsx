import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, ChevronDown, Menu, Search, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/categories';
import { cities } from '@/data/cities';
import { contact } from '@/config/contact';

const navigation = [
  { label: 'Home', to: '/' }, { label: 'About us', to: '/about' }, { label: 'Contact us', to: '/contact' },
  { label: 'Shop', to: '/shop' }, { label: 'Replacement pods', to: '/shop?category=Replacement%20Pods' },
];
const dropdowns = [
  { label: 'Policy', items: [{ label: 'Privacy policy', to: '/privacy-policy' }, { label: 'Terms', to: '/terms' }] },
  { label: 'Shop by city', items: cities.map(city => ({ label: city.name, to: '/contact' })) },
  { label: 'Brands', items: categories.map(category => ({ label: category.name, to: `/shop?brand=${encodeURIComponent(category.name)}` })) },
];
export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  return <div className="min-h-screen bg-background text-foreground">
    <div className="border-b border-border bg-surface text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground py-2.5 px-4">An informational catalog for adults · Product details subject to verification</div>
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-[76px] flex items-center justify-between gap-4">
        <Link to="/" className="min-w-0 shrink-0 leading-none group" aria-label="Kota Vape Shop home"><span className="block font-display font-bold text-[21px] sm:text-[25px] tracking-[0.11em] text-foreground">KOTA<span className="text-primary">.</span></span><span className="block text-[9px] tracking-[0.32em] text-primary mt-1.5">VAPE SHOP</span></Link>
        <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-6 text-[11px] font-semibold uppercase tracking-[0.12em]">
          {navigation.slice(0,4).map(item => <Link key={item.label} to={item.to} className="text-muted-foreground hover:text-primary transition-colors">{item.label}</Link>)}
          {dropdowns.slice(0,2).map(drop => <div className="group relative" key={drop.label}><button className="flex items-center gap-1 text-muted-foreground hover:text-primary py-7 uppercase" type="button">{drop.label}<ChevronDown size={13}/></button><div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 absolute top-full left-0 min-w-44 bg-surface border border-border p-2 shadow-xl transition-all">{drop.items.map(item => <a key={item.label} href={item.to} className="block px-3 py-2.5 text-muted-foreground hover:text-primary hover:bg-secondary">{item.label}</a>)}</div></div>)}
          <Link to="/shop" search={{ q: '', brand: '', category: 'Replacement Pods' }} className="text-muted-foreground hover:text-primary transition-colors">Replacement pods</Link>
          {dropdowns.slice(2).map(drop => <div className="group relative" key={drop.label}><button className="flex items-center gap-1 text-muted-foreground hover:text-primary py-7 uppercase" type="button">{drop.label}<ChevronDown size={13}/></button><div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 absolute top-full left-0 min-w-44 bg-surface border border-border p-2 shadow-xl transition-all">{drop.items.map(item => <a key={item.label} href={item.to} className="block px-3 py-2.5 text-muted-foreground hover:text-primary hover:bg-secondary">{item.label}</a>)}</div></div>)}
        </nav>
        <div className="flex items-center gap-1 sm:gap-3"><Button variant="ghost" size="icon" aria-label="Search catalog" onClick={() => setSearchOpen(!searchOpen)}><Search size={19}/></Button><Button variant="ghost" size="icon" className="xl:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21}/> : <Menu size={21}/>}</Button></div>
      </div>
      {searchOpen && <form action="/shop" className="border-t border-border p-4 max-w-7xl mx-auto flex gap-2"><input name="q" autoFocus placeholder="Search the catalog..." className="w-full bg-secondary border border-border px-4 py-3 outline-none focus:border-primary text-sm"/><Button type="submit">Search <ArrowRight size={15}/></Button></form>}
      {menuOpen && <nav aria-label="Mobile navigation" className="xl:hidden max-h-[75vh] overflow-y-auto border-t border-border bg-surface px-5 py-4 grid grid-cols-2 gap-1">{navigation.map(item => <a key={item.label} href={item.to} className="py-3 text-xs uppercase tracking-widest text-muted-foreground">{item.label}</a>)}{dropdowns.map(drop => <div key={drop.label} className="col-span-2 border-t border-border pt-4 mt-2"><span className="text-primary text-xs uppercase tracking-widest">{drop.label}</span><div className="flex flex-wrap gap-x-5 gap-y-3 py-3">{drop.items.map(item => <a key={item.label} href={item.to} className="text-sm text-muted-foreground">{item.label}</a>)}</div></div>)}</nav>}
    </header>
    <main>{children}</main>
    <footer className="bg-surface border-t border-border pt-20 pb-8"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-16"><div className="col-span-2 md:col-span-1"><Link to="/" className="font-display font-bold text-2xl tracking-widest">KOTA<span className="text-primary">.</span></Link><p className="text-primary tracking-[0.25em] text-[10px] mt-2">VAPE SHOP</p><p className="text-muted-foreground text-sm leading-7 mt-6">An adult-focused product information catalog rooted in Kota. Explore formats, compare details, and connect for general support.</p></div><div><h3 className="footer-heading">Coverage areas</h3><div className="footer-links">{cities.map(city => <Link key={city.slug} to="/contact">{city.name}</Link>)}</div></div><div><h3 className="footer-heading">Information</h3><div className="footer-links"><Link to="/about">About us</Link><Link to="/faq">FAQs</Link><Link to="/privacy-policy">Privacy policy</Link><Link to="/terms">Terms</Link><Link to="/contact">Contact</Link></div></div><div><h3 className="footer-heading">Contact</h3><div className="text-sm text-muted-foreground leading-8"><p>{contact.location}</p>{contact.phone && <p>{contact.phone}</p>}{contact.email && <a href={`mailto:${contact.email}`}>{contact.email}</a>}<Link to="/contact" className="flex items-center gap-2 mt-3 text-primary">General inquiries <ArrowRight size={15}/></Link></div></div></div><div className="border-t border-border pt-7 flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground"><span>© {new Date().getFullYear()} KOTA VAPE SHOP. All rights reserved.</span><span>For adults only · Informational catalog · No online sales</span></div></div></footer>
    {contact.whatsapp && <a href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hello, I have a general question about your catalog.')}`} target="_blank" rel="noreferrer" aria-label="Contact on WhatsApp" className="fixed bottom-6 right-6 z-50 grid place-items-center h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 transition-transform"><MessageCircle size={22}/></a>}
  </div>;
}
