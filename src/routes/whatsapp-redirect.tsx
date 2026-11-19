import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { directWhatsAppUrl } from '@/lib/whatsapp';

export const Route = createFileRoute('/whatsapp-redirect')({
  validateSearch: (s: Record<string, unknown>) => ({ text: typeof s['text'] === 'string' ? s['text'] : 'Hi, I want to order vape products' }),
  head: () => ({
    meta: [
      { title: 'Connecting to WhatsApp — ALL INDIA VAPE SERVICE SHOP' },
      { name: 'description', content: 'Your order enquiry is being sent to ALL INDIA VAPE SERVICE SHOP on WhatsApp.' },
      { property: 'og:title', content: 'Connecting to WhatsApp — ALL INDIA VAPE SERVICE SHOP' },
      { property: 'og:description', content: 'Your order enquiry is being sent to us on WhatsApp.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'robots', content: 'noindex' },
    ],
  }),
  component: RedirectPage,
});

function RedirectPage() {
  const { text } = Route.useSearch();
  const url = directWhatsAppUrl(text);
  useEffect(() => {
    const t = setTimeout(() => window.location.replace(url), 300);
    return () => clearTimeout(t);
  }, [url]);
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6 text-center">
      <div className="max-w-md">
        <MessageCircle className="mx-auto text-primary animate-pulse" size={48} />
        <h1 className="mt-6 font-serif text-3xl text-primary">Thank you!</h1>
        <p className="mt-3 text-muted-foreground">Connecting you to WhatsApp to place your order...</p>
        <a href={url} className="mt-6 inline-block border border-primary text-primary px-6 py-3 hover:bg-primary/10">Click here if not redirected automatically</a>
      </div>
    </main>
  );
}
