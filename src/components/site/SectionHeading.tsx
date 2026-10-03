import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
export function SectionHeading({ kicker, title, description, link, linkLabel = 'View all' }: { kicker?: string; title: string; description?: string; link?: '/shop' | '/categories' | '/brands' | '/faq'; linkLabel?: string }) {
 return <div className="mb-8 md:mb-10 flex items-end justify-between gap-4"><div className="min-w-0">{kicker && <p className="eyebrow">{kicker}</p>}<h2 className="section-title">{title}</h2>{description && <p className="mt-3 text-muted-foreground text-sm max-w-xl leading-7">{description}</p>}</div>{link && <Link to={link} className="hidden sm:flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary hover:text-foreground transition-colors">{linkLabel}<ArrowUpRight size={16}/></Link>}</div>
}
